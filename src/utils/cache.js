// Simple in-memory cache with TTL
const cache = new Map();

export const get = (key) => {
  const entry = cache.get(key);
  if (!entry) return null;
  
  // Check if expired
  if (entry.expiresAt < Date.now()) {
    cache.delete(key);
    return null;
  }
  
  return entry.value;
};

export const set = (key, value, ttlMs = 60000) => {
  cache.set(key, {
    value,
    expiresAt: Date.now() + ttlMs
  });
};

export const clear = () => {
  cache.clear();
};

// Clear expired entries periodically (optional, prevents memory leak)
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of cache.entries()) {
    if (entry.expiresAt < now) {
      cache.delete(key);
    }
  }
}, 60000); // Run every minute

