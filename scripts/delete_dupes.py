import os
import re

def delete_duplicate_preview_images(directory):
    # Compile a regex pattern to match files ending with "-preview-preview" before the extension
    pattern = re.compile(r'-preview-preview\.[^.]+$')

    # Counter for deleted files
    deleted_count = 0

    # Walk through the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            if pattern.search(file):
                file_path = os.path.join(root, file)
                try:
                    os.remove(file_path)
                    print(f"Deleted: {file_path}")
                    deleted_count += 1
                except OSError as e:
                    print(f"Error deleting {file_path}: {e}")

    print(f"\nTotal files deleted: {deleted_count}")

# Example usage
if __name__ == "__main__":
    import sys

    if len(sys.argv) != 2:
        print("Usage: python clean_preview_images.py <directory_path>")
        sys.exit(1)

    directory_path = sys.argv[1]

    if not os.path.isdir(directory_path):
        print(f"Error: {directory_path} is not a valid directory")
        sys.exit(1)

    print(f"Scanning directory: {directory_path}")
    delete_duplicate_preview_images(directory_path)