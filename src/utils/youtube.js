/**
 * YouTube utility functions for extracting video IDs and generating thumbnail URLs
 */

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} - Video ID or null if not found/invalid
 */
export function getYoutubeId(url) {
  if (!url || typeof url !== 'string') {
    return null;
  }

  // Clean the URL
  const cleanUrl = url.trim();

  // Patterns for different YouTube URL formats
  const patterns = [
    // Standard watch URLs: https://www.youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.*&v=)([a-zA-Z0-9_-]{11})/,
    
    // Short URLs: https://youtu.be/VIDEO_ID
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    
    // Shorts URLs: https://www.youtube.com/shorts/VIDEO_ID
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    
    // Embed URLs: https://www.youtube.com/embed/VIDEO_ID
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    
    // YouTube nocookie URLs: https://www.youtube-nocookie.com/embed/VIDEO_ID
    /youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    
    // Playlist URLs with video parameter: https://www.youtube.com/watch?v=VIDEO_ID&list=...
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = cleanUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Generates YouTube thumbnail URL for a given video ID
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality ('maxresdefault' | 'hqdefault' | 'mqdefault' | 'default')
 * @returns {string|null} - Thumbnail URL or null if invalid ID
 */
export function getYoutubeThumbnailUrl(videoId, quality = 'maxresdefault') {
  if (!videoId || typeof videoId !== 'string') {
    return null;
  }

  // Validate video ID format (YouTube IDs are 11 characters)
  if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
    return null;
  }

  const validQualities = ['maxresdefault', 'hqdefault', 'mqdefault', 'default'];
  const selectedQuality = validQualities.includes(quality) ? quality : 'maxresdefault';

  return `https://i.ytimg.com/vi/${videoId}/${selectedQuality}.jpg`;
}

/**
 * Gets YouTube thumbnail URL from a YouTube URL with fallback quality
 * @param {string} url - YouTube URL
 * @param {string} fallbackQuality - Quality to use if maxresdefault fails
 * @returns {string|null} - Thumbnail URL or null if invalid
 */
export function getYoutubeThumbnail(url, fallbackQuality = 'hqdefault') {
  const videoId = getYoutubeId(url);
  if (!videoId) {
    return null;
  }

  return getYoutubeThumbnailUrl(videoId, 'maxresdefault');
}

/**
 * Checks if a URL is a valid YouTube URL
 * @param {string} url - URL to check
 * @returns {boolean} - True if valid YouTube URL
 */
export function isYoutubeUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const youtubeDomains = [
    'youtube.com',
    'youtu.be',
    'youtube-nocookie.com',
    'm.youtube.com',
    'www.youtube.com'
  ];

  try {
    const urlObj = new URL(url);
    return youtubeDomains.some(domain => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
}

/**
 * Gets the best available thumbnail URL for a YouTube video
 * This function tries maxresdefault first, then falls back to hqdefault
 * @param {string} url - YouTube URL
 * @returns {Promise<string|null>} - Best available thumbnail URL
 */
export async function getBestYoutubeThumbnail(url) {
  const videoId = getYoutubeId(url);
  if (!videoId) {
    return null;
  }

  // Try maxresdefault first
  const maxresUrl = getYoutubeThumbnailUrl(videoId, 'maxresdefault');
  
  try {
    const response = await fetch(maxresUrl, { method: 'HEAD' });
    if (response.ok) {
      return maxresUrl;
    }
  } catch {
    // If maxres fails, fall back to hqdefault
  }

  // Fallback to hqdefault
  return getYoutubeThumbnailUrl(videoId, 'hqdefault');
}

/**
 * Creates a thumbnail component props object for YouTube videos
 * @param {string} url - YouTube URL
 * @param {string} title - Project title for alt text
 * @returns {object|null} - Props object with src, alt, and fallback info
 */
export function createYoutubeThumbnailProps(url, title) {
  const videoId = getYoutubeId(url);
  if (!videoId) {
    return null;
  }

  const maxresUrl = getYoutubeThumbnailUrl(videoId, 'maxresdefault');
  const fallbackUrl = getYoutubeThumbnailUrl(videoId, 'hqdefault');

  return {
    src: maxresUrl,
    fallbackSrc: fallbackUrl,
    alt: `Miniaturbild: ${title}`,
    isYoutube: true,
    videoId
  };
}
