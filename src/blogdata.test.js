import { posts } from './blogdata';
import { getYoutubeId } from './utils/youtube';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import de from './locales/de/translation.json';

const lookup = (translation, path) => path.split('.').reduce((o, k) => o?.[k], translation);

test('slugs are unique', () => {
  const slugs = posts.map((p) => p.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
});

describe.each(posts.map((p) => [p.slug, p]))('post %s', (_, post) => {
  test.each([
    ['en', en],
    ['es', es],
    ['de', de],
  ])('has a title in %s', (_, translation) => {
    expect(lookup(translation, `${post.i18nKey}.title`)).toEqual(expect.any(String));
  });

  test('has at least one category', () => {
    expect(post.category.length).toBeGreaterThan(0);
  });

  if (post.YTlink) {
    test('YTID matches YTlink', () => {
      expect(getYoutubeId(post.YTlink)).toBe(post.YTID);
    });
  }
});
