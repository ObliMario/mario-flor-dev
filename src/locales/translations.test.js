import en from './en/translation.json';
import es from './es/translation.json';
import de from './de/translation.json';

function flattenKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([key, value]) =>
    value && typeof value === 'object' ? flattenKeys(value, `${prefix}${key}.`) : [`${prefix}${key}`]
  );
}

const enKeys = flattenKeys(en).sort();

test.each([
  ['es', es],
  ['de', de],
])('%s has the same keys as en', (_, translation) => {
  expect(flattenKeys(translation).sort()).toEqual(enKeys);
});

test.each([
  ['en', en],
  ['es', es],
  ['de', de],
])('%s has no empty strings', (_, translation) => {
  const empty = flattenKeys(translation).filter((key) => {
    const value = key.split('.').reduce((o, k) => o[k], translation);
    return typeof value === 'string' && value.trim() === '';
  });
  expect(empty).toEqual([]);
});
