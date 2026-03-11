import { YOUTUBE_CONFIG, YOUTUBE_API_BASE, CACHE_TIME } from "../config/youtube";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  views?: number;
  publishedAt?: string;
}

// Simple cache system
const cache: {
  [key: string]: { data: YouTubeVideo[] | any; timestamp: number };
} = {};

let channelId: string | null = null;

export const youtubeService = {
  /**
   * Get channel ID from handle
   */
  async getChannelId(): Promise<string | null> {
    if (channelId) return channelId;

    const cacheKey = "channelId";
    if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < CACHE_TIME) {
      channelId = cache[cacheKey].data;
      return channelId;
    }

    try {
      // Search for channel by handle
      const response = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&q=UHCF&type=channel&key=${YOUTUBE_CONFIG.API_KEY}&maxResults=1`
      );

      if (!response.ok) {
        console.error("Failed to search for channel");
        return null;
      }

      const data = await response.json();
      channelId = data.items?.[0]?.snippet?.channelId;

      if (channelId) {
        cache[cacheKey] = { data: channelId, timestamp: Date.now() };
      }

      return channelId;
    } catch (error) {
      console.error("Error getting channel ID:", error);
      return null;
    }
  },

  /**
   * Get latest videos from the channel using search
   */
  async getLatestVideos(maxResults: number = 3): Promise<YouTubeVideo[]> {
    const cacheKey = "latestVideos";

    // Check cache
    if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < CACHE_TIME) {
      return cache[cacheKey].data;
    }

    try {
      const chId = await this.getChannelId();
      
      if (!chId) {
        console.error("Could not find channel ID");
        return getDefaultVideos();
      }

      // Search for recent videos from channel
      const response = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${chId}&type=video&order=date&maxResults=${maxResults}&key=${YOUTUBE_CONFIG.API_KEY}`
      );

      if (!response.ok) {
        console.error("Failed to fetch videos");
        return getDefaultVideos();
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        console.warn("No videos found");
        return getDefaultVideos();
      }

      const videos: YouTubeVideo[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          "",
        publishedAt: item.snippet.publishedAt,
      }));

      // Cache the result
      cache[cacheKey] = { data: videos, timestamp: Date.now() };
      return videos;
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      return getDefaultVideos();
    }
  },

  /**
   * Get popular videos (by viewCount)
   */
  async getPopularVideos(maxResults: number = 6): Promise<YouTubeVideo[]> {
    const cacheKey = "popularVideos";

    if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < CACHE_TIME) {
      return cache[cacheKey].data;
    }

    try {
      const chId = await this.getChannelId();
      
      if (!chId) {
        return getDefaultVideos(6);
      }

      const response = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${chId}&type=video&order=viewCount&maxResults=${maxResults}&key=${YOUTUBE_CONFIG.API_KEY}`
      );

      if (!response.ok) {
        console.error("Failed to fetch popular videos");
        return getDefaultVideos(6);
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        return getDefaultVideos(6);
      }

      const videos: YouTubeVideo[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          "",
        publishedAt: item.snippet.publishedAt,
      }));

      cache[cacheKey] = { data: videos, timestamp: Date.now() };
      return videos;
    } catch (error) {
      console.error("Error fetching popular videos:", error);
      return getDefaultVideos(6);
    }
  },

  /**
   * Search videos
   */
  async searchVideos(query: string, maxResults: number = 10): Promise<YouTubeVideo[]> {
    try {
      const chId = await this.getChannelId();
      
      if (!chId) {
        return [];
      }

      const response = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${chId}&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=${maxResults}&key=${YOUTUBE_CONFIG.API_KEY}`
      );

      if (!response.ok) {
        console.error("Failed to search videos");
        return [];
      }

      const data = await response.json();
      
      if (!data.items) {
        return [];
      }

      const videos: YouTubeVideo[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          "",
        publishedAt: item.snippet.publishedAt,
      }));

      return videos;
    } catch (error) {
      console.error("Error searching videos:", error);
      return [];
    }
  },
};

/**
 * Default videos (fallback)
 */
function getDefaultVideos(count: number = 3): YouTubeVideo[] {
  const defaultVideos = [
    {
      id: "jvwF0xKYHrc",
      title: "Sunday Worship Service",
      description: "Join us for our weekly worship in Urdu and Hindi",
      thumbnail: "https://img.youtube.com/vi/jvwF0xKYHrc/maxresdefault.jpg",
    },
    {
      id: "3sHZO3eqXJw",
      title: "Christmas Special Service",
      description: "Celebrating the birth of our Lord Jesus Christ",
      thumbnail: "https://img.youtube.com/vi/3sHZO3eqXJw/maxresdefault.jpg",
    },
    {
      id: "p6qJKuqQ2xo",
      title: "Bible Study Session",
      description: "Exploring the Word of God together",
      thumbnail: "https://img.youtube.com/vi/p6qJKuqQ2xo/maxresdefault.jpg",
    },
    {
      id: "wN5yRQAqCb4",
      title: "Youth Fellowship Program",
      description: "Connect with young believers in our community",
      thumbnail: "https://img.youtube.com/vi/wN5yRQAqCb4/maxresdefault.jpg",
    },
    {
      id: "X2kZW9QM5kk",
      title: "Prayer & Praise Night",
      description: "An evening dedicated to worship and intercession",
      thumbnail: "https://img.youtube.com/vi/X2kZW9QM5kk/maxresdefault.jpg",
    },
    {
      id: "DfJpZs3c8kQ",
      title: "Community Service Highlights",
      description: "Serving our community with God's love",
      thumbnail: "https://img.youtube.com/vi/DfJpZs3c8kQ/maxresdefault.jpg",
    },
  ];

  return defaultVideos.slice(0, count);
}
