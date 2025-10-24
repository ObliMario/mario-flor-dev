/**
 * Test cases for YouTube utility functions
 * Based on URLs from the current dataset
 */

import { getYoutubeId, getYoutubeThumbnail, isYoutubeUrl, createYoutubeThumbnailProps } from './youtube';

// Test URLs from the current dataset
const testUrls = [
  "https://youtu.be/hoGYSWDP73g", // AI-Game
  "https://youtu.be/pBdRLonhN_k", // jellygame
  "https://youtu.be/p_NJqCJ2Fts", // pacman
  "https://youtu.be/7uEtePL5Ci4", // evo
  "https://youtu.be/bEyFS7pfzKg", // quiz
  "https://youtu.be/-pZRJMEHaOQ", // deutschapp
  "https://youtu.be/SywrReqCmrA", // florgame-vr
];

// Additional test cases for edge cases
const edgeCaseUrls = [
  "https://www.youtube.com/watch?v=hoGYSWDP73g",
  "https://www.youtube.com/watch?v=hoGYSWDP73g&t=123s",
  "https://www.youtube.com/watch?v=hoGYSWDP73g&list=PLxyz",
  "https://www.youtube.com/shorts/hoGYSWDP73g",
  "https://www.youtube.com/embed/hoGYSWDP73g",
  "https://www.youtube-nocookie.com/embed/hoGYSWDP73g",
  "https://youtu.be/hoGYSWDP73g?t=123s",
  "https://youtu.be/hoGYSWDP73g&list=PLxyz",
  "invalid-url",
  "https://vimeo.com/123456789",
  "",
  null,
  undefined
];

// Expected video IDs
const expectedIds = [
  "hoGYSWDP73g", // AI-Game
  "pBdRLonhN_k", // jellygame
  "p_NJqCJ2Fts", // pacman
  "7uEtePL5Ci4", // evo
  "bEyFS7pfzKg", // quiz
  "-pZRJMEHaOQ", // deutschapp
  "SywrReqCmrA", // florgame-vr
];

/**
 * Run tests for YouTube utility functions
 */
export function runYoutubeTests() {
  console.log("🧪 Running YouTube utility tests...");
  
  let passed = 0;
  let failed = 0;

  // Test getYoutubeId with dataset URLs
  console.log("\n📹 Testing getYoutubeId with dataset URLs:");
  testUrls.forEach((url, index) => {
    const result = getYoutubeId(url);
    const expected = expectedIds[index];
    if (result === expected) {
      console.log(`✅ ${url} → ${result}`);
      passed++;
    } else {
      console.log(`❌ ${url} → ${result} (expected: ${expected})`);
      failed++;
    }
  });

  // Test edge cases
  console.log("\n🔍 Testing edge cases:");
  edgeCaseUrls.forEach((url) => {
    const result = getYoutubeId(url);
    const isValid = result && result.length === 11;
    if (isValid || result === null) {
      console.log(`✅ ${url} → ${result}`);
      passed++;
    } else {
      console.log(`❌ ${url} → ${result} (invalid result)`);
      failed++;
    }
  });

  // Test isYoutubeUrl
  console.log("\n🌐 Testing isYoutubeUrl:");
  const youtubeUrls = testUrls.slice(0, 3);
  const nonYoutubeUrls = ["https://vimeo.com/123", "https://example.com", "invalid"];
  
  [...youtubeUrls, ...nonYoutubeUrls].forEach((url) => {
    const result = isYoutubeUrl(url);
    const expected = youtubeUrls.includes(url);
    if (result === expected) {
      console.log(`✅ ${url} → ${result}`);
      passed++;
    } else {
      console.log(`❌ ${url} → ${result} (expected: ${expected})`);
      failed++;
    }
  });

  // Test getYoutubeThumbnail
  console.log("\n🖼️ Testing getYoutubeThumbnail:");
  testUrls.slice(0, 3).forEach((url) => {
    const result = getYoutubeThumbnail(url);
    const expectedPattern = /^https:\/\/i\.ytimg\.com\/vi\/[a-zA-Z0-9_-]{11}\/maxresdefault\.jpg$/;
    if (result && expectedPattern.test(result)) {
      console.log(`✅ ${url} → ${result}`);
      passed++;
    } else {
      console.log(`❌ ${url} → ${result} (invalid thumbnail URL)`);
      failed++;
    }
  });

  // Test createYoutubeThumbnailProps
  console.log("\n🎬 Testing createYoutubeThumbnailProps:");
  testUrls.slice(0, 2).forEach((url) => {
    const result = createYoutubeThumbnailProps(url, "Test Project");
    if (result && result.src && result.alt && result.isYoutube === true) {
      console.log(`✅ ${url} → props created`);
      passed++;
    } else {
      console.log(`❌ ${url} → invalid props`);
      failed++;
    }
  });

  // Summary
  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log("🎉 All tests passed!");
  } else {
    console.log("⚠️ Some tests failed. Check the implementation.");
  }

  return { passed, failed };
}

// Export test data for manual testing
export { testUrls, edgeCaseUrls, expectedIds };
