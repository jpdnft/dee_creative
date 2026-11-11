import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { accessibleLibraryImage, eligibleLibraryArticles, isPublicationReady, isPublishedArticle, libraryArticleImages, libraryArticlePath, libraryAssetFolder, libraryAssetTopic, libraryPublicPaths, localLibraryPreview, libraryReleaseAuthorized } from '../lib/design-library-policy.ts';
import { craftsman } from '../content/design-library/craftsman.ts';
import { victorian } from '../content/design-library/victorian.ts';
import { modern } from '../content/design-library/modern.ts';
import { midCenturyModern } from '../content/design-library/mid-century-modern.ts';
import { contemporary } from '../content/design-library/contemporary.ts';
import { artDeco } from '../content/design-library/art-deco.ts';
import { tudorRevival } from '../content/design-library/tudor-revival.ts';
import { colonialRevival } from '../content/design-library/colonial-revival.ts';
import { prairieSchool } from '../content/design-library/prairie-school.ts';
import { mediterraneanRevival } from '../content/design-library/mediterranean-revival.ts';
import { bungalow } from '../content/design-library/bungalow.ts';
import { americanFoursquare } from '../content/design-library/american-foursquare.ts';
import { ranchHouse } from '../content/design-library/ranch-house.ts';
import { townhouseRowhouse } from '../content/design-library/townhouse-rowhouse.ts';
import { shotgunDogtrotHouse } from '../content/design-library/shotgun-dogtrot-house.ts';
import { splitLevelHouse } from '../content/design-library/split-level-house.ts';
import { farmhouse } from '../content/design-library/farmhouse.ts';
import { capeCodHouse } from '../content/design-library/cape-cod-house.ts';
import { cottage } from '../content/design-library/cottage.ts';
import { traditional } from '../content/design-library/traditional.ts';
import { transitional } from '../content/design-library/transitional.ts';
import { scandinavian } from '../content/design-library/scandinavian.ts';
import { minimalist } from '../content/design-library/minimalist.ts';
import { maximalist } from '../content/design-library/maximalist.ts';
import { eclectic } from '../content/design-library/eclectic.ts';
import { industrial } from '../content/design-library/industrial.ts';
import { wainscotingWallPaneling } from '../content/design-library/wainscoting-wall-paneling.ts';
import { interiorTrim } from '../content/design-library/interior-trim.ts';
import { decorativeCeilings } from '../content/design-library/decorative-ceilings.ts';
import { builtInBookcasesCabinetry } from '../content/design-library/built-in-bookcases-cabinetry.ts';
import { interiorArchesOpenings } from '../content/design-library/interior-arches-openings.ts';
import { staircasesBalustradesRailings } from '../content/design-library/staircases-balustrades-railings.ts';
import { fireplacesSurrounds } from '../content/design-library/fireplaces-surrounds.ts';
import { interiorWoodSpecies } from '../content/design-library/interior-wood-species.ts';
import { naturalStone } from '../content/design-library/natural-stone.ts';
import { plasterRomanClayDecorativeFinishes } from '../content/design-library/plaster-roman-clay-decorative-finishes.ts';
import { architecturalTile } from '../content/design-library/architectural-tile.ts';
import { metalFinishes } from '../content/design-library/metal-finishes.ts';
import { windowTreatments } from '../content/design-library/window-treatments.ts';
import { decorativeLightingFixtures } from '../content/design-library/decorative-lighting-fixtures.ts';
import { interiorDoorsHardware } from '../content/design-library/interior-doors-hardware.ts';
import { colorTheory } from '../content/design-library/color-theory.ts';
import { scaleProportion } from '../content/design-library/scale-proportion.ts';
import { balanceSymmetryAsymmetry } from '../content/design-library/balance-symmetry-asymmetry.ts';
import { rhythmRepetitionHarmony } from '../content/design-library/rhythm-repetition-harmony.ts';
import { lightingDesign } from '../content/design-library/lighting-design.ts';
import { spatialPlanningFlow } from '../content/design-library/spatial-planning-flow.ts';
import { fengShui } from '../content/design-library/feng-shui.ts';
import { biophilicDesign } from '../content/design-library/biophilic-design.ts';
import { wabiSabi } from '../content/design-library/wabi-sabi.ts';
import { libraryCategories } from '../content/design-library/categories.ts';

test('preview is explicit and development-only, even when a production environment contains the setting', () => {
  for (const environment of ['production', 'test', undefined]) assert.equal(localLibraryPreview(environment, 'true'), false);
  assert.equal(localLibraryPreview('development', 'false'), false);
  assert.equal(localLibraryPreview('development', undefined), false);
  assert.equal(localLibraryPreview('development', 'true'), true);
  assert.equal(libraryReleaseAuthorized, false);
});

test('article categories resolve to the intended private asset topic folders', () => {
  assert.equal(libraryAssetTopic('architectural-styles'), 'architectural-styles');
  assert.equal(libraryAssetTopic('house-types-and-forms'), 'home-types');
  assert.equal(libraryAssetTopic('architectural-elements-and-details'), 'architectural-elements');
  assert.equal(libraryAssetFolder(interiorTrim), 'crown-molding-baseboards');
  assert.equal(libraryAssetFolder(decorativeCeilings), 'coffered-beamed-decorative-ceilings');
  assert.equal(libraryAssetFolder(builtInBookcasesCabinetry), 'built-in-bookcases-cabinetry');
  assert.equal(libraryAssetFolder(interiorArchesOpenings), 'interior-arches-and-openings');
  assert.equal(libraryAssetFolder(staircasesBalustradesRailings), 'staircases-balustrades-railings');
  assert.equal(libraryAssetFolder(fireplacesSurrounds), 'fireplaces-and-surrounds');
  assert.equal(libraryAssetFolder(interiorWoodSpecies), 'interior-wood-species');
  assert.equal(libraryAssetTopic(interiorWoodSpecies.category), 'materials-and-finishes');
  assert.equal(libraryAssetFolder(naturalStone), 'natural-stone');
  assert.equal(libraryAssetFolder(plasterRomanClayDecorativeFinishes), 'plaster-roman-clay-decorative-finishes');
  assert.equal(libraryAssetFolder(architecturalTile), 'architectural-tile');
  assert.equal(libraryAssetFolder(metalFinishes), 'metal-finishes');
  assert.equal(libraryAssetFolder(windowTreatments), 'window-treatments');
  assert.equal(libraryAssetFolder(decorativeLightingFixtures), 'decorative-lighting-fixtures');
  assert.equal(libraryAssetFolder(interiorDoorsHardware), 'interior-doors');
  assert.equal(libraryAssetTopic(colorTheory.category), 'design-principles');
  assert.equal(libraryAssetFolder(colorTheory), 'color-theory');
  assert.equal(libraryAssetFolder(scaleProportion), 'scale-and-proportion');
  assert.equal(libraryAssetFolder(balanceSymmetryAsymmetry), 'balance-symmetry-asymmetry');
  assert.equal(libraryAssetFolder(rhythmRepetitionHarmony), 'rhythm-repetition-visual-harmony');
  assert.equal(libraryAssetFolder(lightingDesign), 'lighting-design-layers-mood-function');
  assert.equal(libraryAssetFolder(spatialPlanningFlow), 'spatial-planning-circulation-flow');
  assert.equal(libraryAssetFolder(fengShui), 'feng-shui');
  assert.equal(libraryAssetFolder(biophilicDesign), 'biophilic-design');
  assert.equal(libraryAssetFolder(wabiSabi), 'wabi-sabi');
  assert.equal(libraryAssetFolder(townhouseRowhouse), 'townhouse');
  assert.equal(libraryAssetFolder(shotgunDogtrotHouse), 'shotgun-dogtrot');
  assert.equal(libraryAssetFolder(splitLevelHouse), 'split-level');
  assert.equal(libraryAssetFolder(capeCodHouse), 'cape-cod');
  assert.throws(() => libraryAssetFolder({ slug: 'safe', assetFolder: '../unsafe' }));
});

test('Rhythm article places all eight supplied illustrations in the page', () => {
  assert.deepEqual(
    libraryArticleImages(rhythmRepetitionHarmony).map(figure => figure.src?.split('/').at(-1)).sort(),
    ['rhythm-passage.webp', 'rhythm-millwork.webp', 'rhythm-bathroom.webp', 'rhythm-stair.webp', 'rhythm-living.webp', 'rhythm-craftsman.webp', 'rhythm-bedroom.webp', 'rhythm-gallery.webp'].sort(),
  );
});

test('Spatial Planning article places all eight supplied illustrations in the page', () => {
  assert.deepEqual(
    libraryArticleImages(spatialPlanningFlow).map(figure => figure.src?.split('/').at(-1)).sort(),
    ['spatial-hero.webp', 'spatial-comparison.webp', 'spatial-entry.webp', 'spatial-kitchen.webp', 'spatial-dining.webp', 'spatial-renovation.webp', 'spatial-bathroom.webp', 'spatial-layers.webp'].sort(),
  );
});

test('Feng Shui article places all eight supplied illustrations in the page', () => {
  assert.deepEqual(
    libraryArticleImages(fengShui).map(figure => figure.src?.split('/').at(-1)).sort(),
    ['feng-shui-hero.webp', 'feng-shui-entry.webp', 'feng-shui-office.webp', 'feng-shui-bedroom.webp', 'feng-shui-dining.webp', 'feng-shui-studio.webp', 'feng-shui-courtyard.webp', 'feng-shui-craftsman.webp'].sort(),
  );
});

test('Biophilic Design article places all eight supplied illustrations in the page', () => {
  assert.deepEqual(
    libraryArticleImages(biophilicDesign).map(figure => figure.src?.split('/').at(-1)).sort(),
    ['biophilic-hero.webp', 'biophilic-rain.webp', 'biophilic-kitchen.webp', 'biophilic-materials.webp', 'biophilic-refuge.webp', 'biophilic-courtyard.webp', 'biophilic-bathroom.webp', 'biophilic-patio.webp'].sort(),
  );
});

test('Wabi-Sabi article places all eight supplied illustrations in the page', () => {
  assert.deepEqual(
    libraryArticleImages(wabiSabi).map(figure => figure.src?.split('/').at(-1)).sort(),
    ['wabi-sabi-hero.webp', 'wabi-sabi-ceramic.webp', 'wabi-sabi-plaster.webp', 'wabi-sabi-table.webp', 'wabi-sabi-bedroom.webp', 'wabi-sabi-door.webp', 'wabi-sabi-bathroom.webp', 'wabi-sabi-nook.webp'].sort(),
  );
});

test('every article image resolves from its category asset folder', async () => {
  for (const article of [craftsman, victorian, modern, midCenturyModern, contemporary, artDeco, tudorRevival, colonialRevival, prairieSchool, mediterraneanRevival, bungalow, americanFoursquare, ranchHouse, townhouseRowhouse, shotgunDogtrotHouse, splitLevelHouse, farmhouse, capeCodHouse, cottage, traditional, transitional, scandinavian, minimalist, maximalist, eclectic, industrial, wainscotingWallPaneling, interiorTrim, decorativeCeilings, builtInBookcasesCabinetry, interiorArchesOpenings, staircasesBalustradesRailings, fireplacesSurrounds, interiorWoodSpecies, naturalStone, plasterRomanClayDecorativeFinishes, architecturalTile, metalFinishes, windowTreatments, decorativeLightingFixtures, interiorDoorsHardware, colorTheory, scaleProportion, balanceSymmetryAsymmetry, rhythmRepetitionHarmony, lightingDesign, spatialPlanningFlow, fengShui, biophilicDesign, wabiSabi]) {
    for (const figure of libraryArticleImages(article)) {
      if (!figure.src) continue;
      const filename = figure.src.split('/').at(-1);
      assert.equal(accessibleLibraryImage([article], filename, false, true)?.articleCategory, article.category);
      await fs.access(new URL(`../assets/design-library/${libraryAssetTopic(article.category)}/${libraryAssetFolder(article)}/${filename}`, import.meta.url));
    }
  }
});

test('content approval never publishes a draft; all public discovery uses publication eligibility', () => {
  const image = { ...craftsman.hero, kind: 'documentary', src: '/fixture.webp', width: 100, height: 100, credit: 'Fixture', license: 'Test only', sourceUrl: 'https://example.com/photo' };
  const published = { ...craftsman, hero: image, sections: craftsman.sections.map(section => ({ ...section, figure: undefined })), status: 'published', contentApprovedAt: '2026-10-25', publicationAuthorizedAt: '2026-10-25', publishedAt: '2026-10-25' };
  const records = [craftsman, { ...published, slug: 'approved', status: 'approved' }, { ...published, slug: 'no-authorization', publicationAuthorizedAt: undefined }, { ...published, slug: 'brief', hero: { ...craftsman.hero, kind: 'brief' } }, { ...published, slug: 'unapproved-image', hero: { ...image, approvedAt: undefined } }, { ...published, slug: 'missing-rights', hero: { ...image, license: undefined } }, published];
  assert.deepEqual(eligibleLibraryArticles(records, false, false), []);
  assert.deepEqual(eligibleLibraryArticles(records, true, false), [published]);
  assert.equal(isPublishedArticle(craftsman), false);
  assert.deepEqual(libraryPublicPaths(records, libraryCategories, false), []);
  const paths = libraryPublicPaths(records, libraryCategories, true);
  assert(paths.includes(libraryArticlePath(published)));
  assert(!paths.some(path => path.endsWith('/approved') || path.endsWith('/brief') || path.endsWith('/no-authorization')));
  assert.deepEqual(eligibleLibraryArticles([craftsman], false, true), [craftsman]);
});

test('available articles have coherent references, anchors, categories and figure identifiers', () => {
 for (const article of [craftsman, victorian, modern, midCenturyModern, contemporary, artDeco, tudorRevival, colonialRevival, prairieSchool, mediterraneanRevival, bungalow, americanFoursquare, ranchHouse, townhouseRowhouse, shotgunDogtrotHouse, splitLevelHouse, farmhouse, capeCodHouse, cottage, traditional, transitional, scandinavian, minimalist, maximalist, eclectic, industrial, wainscotingWallPaneling, interiorTrim, decorativeCeilings, builtInBookcasesCabinetry, interiorArchesOpenings, staircasesBalustradesRailings, fireplacesSurrounds, interiorWoodSpecies, naturalStone, plasterRomanClayDecorativeFinishes, architecturalTile, metalFinishes, windowTreatments, decorativeLightingFixtures, interiorDoorsHardware, colorTheory, scaleProportion, balanceSymmetryAsymmetry, rhythmRepetitionHarmony, lightingDesign, spatialPlanningFlow, fengShui, biophilicDesign, wabiSabi]) {
  assert(libraryCategories.some(category => category.slug === article.category));
  assert.equal(new Set(article.sections.map(section => section.id)).size, article.sections.length);
  for (const section of article.sections) for (const source of section.sources ?? []) assert(article.references.some(reference => reference.id === source));
  for (const source of [...article.snapshot.sources, ...article.recognition.sources]) assert(article.references.some(reference => reference.id === source));
  assert(article.sections.some(section => section.id === article.recognition.section));
  const figures = libraryArticleImages(article);
  assert.equal(new Set(figures.map(figure => figure.id)).size, figures.length);
  for (const figure of figures) assert(figure.brief && figure.caption && figure.alt);
 }
});

test('snapshot thumbnails share article access and individual image approval safeguards', () => {
  const thumbnail = victorian.snapshot.facts[0].image;
  assert(thumbnail);
  assert.equal(libraryArticleImages(victorian).length, 11);
  assert.equal(accessibleLibraryImage([craftsman, victorian], 'victorian-snapshot-when.webp', true, false), undefined);
  assert.equal(accessibleLibraryImage([craftsman, victorian], 'victorian-snapshot-when.webp', false, true)?.articleSlug, 'victorian');
  const approvedBodyOnly = { ...victorian, snapshot: { ...victorian.snapshot, facts: victorian.snapshot.facts.map(item => ({ ...item, image: { ...item.image, approvedAt: undefined } })), features: victorian.snapshot.features.map(item => ({ ...item, image: { ...item.image, approvedAt: undefined } })) } };
  assert.equal(isPublicationReady(approvedBodyOnly), false, 'Unapproved thumbnails must block release readiness');
  assert.equal(isPublicationReady(victorian), true);
});

test('approved articles are release-ready but stay private', () => {
  assert.equal(isPublicationReady(craftsman), true);
  assert.equal(isPublicationReady(victorian), true);
  const suppliedWithApproval = { ...craftsman, hero: { ...craftsman.hero, kind: 'supplied', approvedAt: '2026-10-26' } };
  assert.equal(isPublicationReady(suppliedWithApproval), true, 'Studio Dee supplied imagery can be publication-ready after editorial image approval');
  assert.equal(isPublicationReady({ ...suppliedWithApproval, hero: { ...suppliedWithApproval.hero, approvedAt: undefined } }), false, 'Supplied images still require editorial approval');
  assert.equal(isPublishedArticle(craftsman), false);
  assert.equal(accessibleLibraryImage([craftsman, victorian], 'craftsman-exterior.webp', false, false), undefined);
  assert.equal(accessibleLibraryImage([craftsman, victorian], 'craftsman-exterior.webp', true, false), undefined);
  assert(accessibleLibraryImage([craftsman, victorian], 'craftsman-exterior.webp', false, true));
  assert.equal(accessibleLibraryImage([craftsman, victorian], '../craftsman-exterior.webp', true, true), undefined);
  const released = { ...craftsman, status: 'published', publicationAuthorizedAt: '2026-10-25', publishedAt: '2026-10-25' };
  assert(accessibleLibraryImage([released, victorian], 'craftsman-exterior.webp', true, false));
  assert.equal(accessibleLibraryImage([released, victorian], 'victorian-exterior.webp', true, false), undefined);
  assert.equal(accessibleLibraryImage([released, victorian], 'craftsman-exterior.webp', false, false), undefined);
});
