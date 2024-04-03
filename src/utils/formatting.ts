import { format } from 'date-fns';

const formatTime = (date: string) => {
  const dateObject = new Date(date);
  return format(dateObject, 'HH:mm:ss');
}

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  return format(dateObject, 'MM/dd/yyyy');
}

const toUrlSafeKebabCase = (s: string) => 
  s.replace(/[^a-z0-9\s-]/gi, '').replace(/\s+/g, "-").toLowerCase();

const stripExtension = (src: string) => src.replace(/\..*$/, ""); // video.mp4 -> video

export { formatTime, formatDate, toUrlSafeKebabCase, stripExtension }