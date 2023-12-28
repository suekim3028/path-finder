export const WINDOW_MAX_WIDTH = 500;
export const WINDOW_MIN_WIDTH = 320;

const SCREEN_WIDTH =
  typeof window !== "undefined"
    ? Math.max(Math.min(window.innerWidth, WINDOW_MAX_WIDTH), WINDOW_MIN_WIDTH)
    : 0;
const SCREEN_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 0;

export { SCREEN_WIDTH, SCREEN_HEIGHT };

export const IMAGE_SIZE = 256;
