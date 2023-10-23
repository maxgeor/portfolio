export const toUrlSafeKebabCase = (s: string) => 
  s.replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, "-").toLowerCase();

export const stripExtension = (src: string) => src.replace(/\..*$/, ""); // video.mp4 -> video