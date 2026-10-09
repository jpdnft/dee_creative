import test from 'node:test';
import assert from 'node:assert/strict';
import { validateInquiry, MAX_PHOTO_BYTES } from '../lib/inquiry.ts';

function validInquiry() {
  const data = new FormData();
  for (const [key, value] of Object.entries({ name: 'A Homeowner', email: 'homeowner@example.com', location: 'Portland', space: 'Study', vision: 'A library with a quiet reading place', consent: 'yes' })) data.set(key, value);
  return data;
}

test('an inquiry can begin without a budget, phone, or finished design', () => {
  assert.deepEqual(validateInquiry(validInquiry()), {});
});
test('missing essentials and contact consent are identified', () => {
  const errors = validateInquiry(new FormData());
  for (const field of ['name', 'email', 'location', 'space', 'vision', 'consent']) assert.ok(errors[field]);
});
test('invalid email and unrecognized investment choices are rejected', () => {
  const data = validInquiry(); data.set('email', 'not-an-email'); data.set('budget', 'unexpected');
  assert.ok(validateInquiry(data).email); assert.ok(validateInquiry(data).budget);
});
test('overlong descriptions are rejected before forwarding', () => {
  const data = validInquiry(); data.set('vision', 'x'.repeat(3001));
  assert.ok(validateInquiry(data).vision);
});
test('unsupported files and oversized photos are rejected', () => {
  const data = validInquiry(); data.set('photo', new File(['a document'], 'document.pdf', { type: 'application/pdf' }));
  assert.ok(validateInquiry(data).photo);
  data.set('photo', new File([new Uint8Array(MAX_PHOTO_BYTES + 1)], 'photo.jpg', { type: 'image/jpeg' }));
  assert.ok(validateInquiry(data).photo);
});
