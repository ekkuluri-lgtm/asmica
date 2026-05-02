/**
 * Prepends the Vite base URL to asset paths for correct subdirectory deployment
 * @param path - Relative asset path (e.g., './images/photo.jpg')
 * @returns Full asset path with base URL prepended
 */
export const assetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Remove leading ./ or / from the path for consistent joining
  const cleanPath = path.replace(/^(\.\/|\/)/,'');
  return `${base}${cleanPath}`;
};
