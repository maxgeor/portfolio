import { format } from 'date-fns';

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  return format(dateObject, 'MMM d, yyyy');
}

const toUrlSafeKebabCase = (s: string) => 
  s.replace(/[^a-z0-9\s-]/gi, '').replace(/\s+/g, "-").toLowerCase();

const stripExtension = (src: string) => src.replace(/\..*$/, ""); // video.mp4 -> video

export { formatDate, toUrlSafeKebabCase, stripExtension }