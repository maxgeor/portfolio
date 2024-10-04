export default function previewifyImagePath(imagePath: string, previewSuffix: string = '-preview'): string {
  // Check if the input is a non-empty string
  if (typeof imagePath !== 'string' || imagePath.trim() === '') {
    throw new Error('Invalid image path: must be a non-empty string');
  }

  // Regular expression to match the file name and extension
  const regex = /^(.+)(\.[^.]+)$/;
  const match = imagePath.match(regex);

  if (!match) {
    throw new Error('Invalid image path: unable to identify file name and extension');
  }

  const [, pathWithoutExtension, extension] = match;

  // Check if the extension is a common image format
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  if (!validExtensions.includes(extension.toLowerCase())) {
    throw new Error(`Invalid image extension: ${extension}. Supported formats are: ${validExtensions.join(', ')}`);
  }

  // Construct the preview path
  return `${pathWithoutExtension}${previewSuffix}${extension}`;
}