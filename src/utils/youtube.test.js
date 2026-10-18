import {
  getYoutubeId,
  getYoutubeThumbnailUrl,
  getYoutubeThumbnail,
  isYoutubeUrl,
  createYoutubeThumbnailProps,
} from './youtube';

const ID = 'hoGYSWDP73g';

describe('getYoutubeId', () => {
  test.each([
    `https://youtu.be/${ID}`,
    `https://youtu.be/${ID}?t=123s`,
    `https://www.youtube.com/watch?v=${ID}`,
    `https://www.youtube.com/watch?v=${ID}&t=123s`,
    `https://www.youtube.com/watch?v=${ID}&list=PLxyz`,
    `https://www.youtube.com/watch?feature=share&v=${ID}`,
    `https://www.youtube.com/shorts/${ID}`,
    `https://www.youtube.com/embed/${ID}`,
    `https://www.youtube-nocookie.com/embed/${ID}`,
    `  https://youtu.be/${ID}  `,
  ])('extracts the id from %s', (url) => {
    expect(getYoutubeId(url)).toBe(ID);
  });

  test('keeps ids with dashes and underscores', () => {
    expect(getYoutubeId('https://youtu.be/-pZRJMEHaOQ')).toBe('-pZRJMEHaOQ');
    expect(getYoutubeId('https://youtu.be/p_NJqCJ2Fts')).toBe('p_NJqCJ2Fts');
  });

  test.each([
    ['invalid-url'],
    ['https://vimeo.com/123456789'],
    ['https://youtu.be/short'],
    [''],
    [null],
    [undefined],
    [42],
  ])('returns null for %p', (url) => {
    expect(getYoutubeId(url)).toBeNull();
  });
});

describe('getYoutubeThumbnailUrl', () => {
  test('defaults to maxresdefault', () => {
    expect(getYoutubeThumbnailUrl(ID)).toBe(`https://i.ytimg.com/vi/${ID}/maxresdefault.jpg`);
  });

  test('uses a valid requested quality', () => {
    expect(getYoutubeThumbnailUrl(ID, 'hqdefault')).toBe(`https://i.ytimg.com/vi/${ID}/hqdefault.jpg`);
  });

  test('falls back to maxresdefault for an unknown quality', () => {
    expect(getYoutubeThumbnailUrl(ID, 'huge')).toBe(`https://i.ytimg.com/vi/${ID}/maxresdefault.jpg`);
  });

  test('rejects malformed ids', () => {
    expect(getYoutubeThumbnailUrl('abc')).toBeNull();
    expect(getYoutubeThumbnailUrl('hoGYSWDP73g/../x')).toBeNull();
    expect(getYoutubeThumbnailUrl(null)).toBeNull();
  });
});

describe('getYoutubeThumbnail', () => {
  test('builds the thumbnail from a video url', () => {
    expect(getYoutubeThumbnail(`https://youtu.be/${ID}`)).toBe(`https://i.ytimg.com/vi/${ID}/maxresdefault.jpg`);
  });

  test('returns null for a non-YouTube url', () => {
    expect(getYoutubeThumbnail('https://example.com')).toBeNull();
  });
});

describe('isYoutubeUrl', () => {
  test.each([
    `https://youtu.be/${ID}`,
    `https://www.youtube.com/watch?v=${ID}`,
    `https://m.youtube.com/watch?v=${ID}`,
    `https://www.youtube-nocookie.com/embed/${ID}`,
  ])('accepts %s', (url) => {
    expect(isYoutubeUrl(url)).toBe(true);
  });

  test.each([
    'https://vimeo.com/123',
    'https://example.com',
    'invalid',
    '',
    null,
  ])('rejects %p', (url) => {
    expect(isYoutubeUrl(url)).toBe(false);
  });
});

describe('createYoutubeThumbnailProps', () => {
  test('returns image props with a hqdefault fallback', () => {
    expect(createYoutubeThumbnailProps(`https://youtu.be/${ID}`, 'Test Project')).toEqual({
      src: `https://i.ytimg.com/vi/${ID}/maxresdefault.jpg`,
      fallbackSrc: `https://i.ytimg.com/vi/${ID}/hqdefault.jpg`,
      alt: 'Miniaturbild: Test Project',
      isYoutube: true,
      videoId: ID,
    });
  });

  test('returns null when there is no video id', () => {
    expect(createYoutubeThumbnailProps('https://example.com', 'X')).toBeNull();
  });
});
