import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { craftsman as article } from '../content/design-library/craftsman.ts';
const hash = data => crypto.createHash('sha256').update(data).digest('hex');

test('approved Craftsman editorial content and image files match the recorded reference', async () => {
 const manifest = JSON.parse(await fs.readFile(new URL('../docs/design-library/CRAFTSMAN-RELEASE-MANIFEST.json',import.meta.url),'utf8'));
 const editorial = {title:article.title,excerpt:article.excerpt,description:article.description,introduction:article.introduction,snapshot:article.snapshot,recognition:article.recognition,sections:article.sections,hero:article.hero,references:article.references,related:article.related,furtherReading:article.furtherReading};
 assert.equal(hash(JSON.stringify(editorial)),manifest.editorialSha256,'Approved content changed: inspect before updating the approval record');
 assert.equal(article.contentApprovedAt,manifest.contentApprovedAt);
 assert.equal(article.publicationAuthorizedAt,manifest.publicationAuthorizedAt);
 assert.equal(article.publishedAt,manifest.publishedAt);
 for(const asset of manifest.assets){
  const bytes=await fs.readFile(new URL('../'+asset.file,import.meta.url));
  assert.equal(hash(bytes),asset.sha256,asset.file);
  assert.equal(bytes.length,asset.bytes);
  assert.equal(bytes.subarray(8,12).toString(),'WEBP');
 }
});
