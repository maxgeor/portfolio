export function toUrlSafeKebabCase(s: string) {
  return s.replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, "-").toLowerCase();
}