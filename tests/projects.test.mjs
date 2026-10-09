import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, publishedProjects } from '../content/projects.ts';

test('only approved completed projects with genuine imagery and complete stories are published', () => {
  const original = projects.length;
  const fixture = {
    slug: 'test-fixture', title: 'Test fixture', description: 'Test-only record', status: 'completed', published: true,
    type: [], heroImage: { src: '/test-only.jpg', alt: 'Fixture', width: 1, height: 1, caption: '', type: 'completed' },
    gallery: [], problem: 'Fixture', idea: 'Fixture', design: 'Fixture', build: 'Fixture', details: 'Fixture', result: 'Fixture', services: [],
  };
  try {
    projects.push(fixture, { ...fixture, slug: 'draft', published: false }, { ...fixture, slug: 'concept', heroImage: { ...fixture.heroImage, type: 'concept' } }, { ...fixture, slug: 'missing-story', result: '' }, { ...fixture, slug: 'concept-gallery', gallery: [{ ...fixture.heroImage, type: 'concept' }] });
    assert.deepEqual(publishedProjects().filter(project => project.slug.startsWith('test-') || ['draft', 'concept', 'missing-story', 'concept-gallery'].includes(project.slug)).map(project => project.slug), ['test-fixture']);
  } finally { projects.splice(original); }
});
