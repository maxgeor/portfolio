import os
import sys
from PIL import Image, UnidentifiedImageError

def get_preview_name(original_name):
    name, ext = os.path.splitext(original_name)
    return f"{name}-preview{ext}"

def resize_image(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            # Calculate the new width to maintain the aspect ratio
            aspect_ratio = img.width / img.height
            new_width = max(1, int(10 * aspect_ratio))

            # Resize the image
            resized_img = img.resize((new_width, 10), Image.Resampling.LANCZOS)

            # Save the resized image
            resized_img.save(output_path)
        print(f"Created preview: {output_path} ({new_width}x10)")
        return True
    except UnidentifiedImageError:
        print(f"Warning: {input_path} is not a valid image file. Skipping.")
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")
    return False

def resize_images_recursive(input_folder, output_folder):
    if not os.path.exists(input_folder):
        print(f"Error: Input folder '{input_folder}' does not exist.")
        return

    try:
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
    except Exception as e:
        print(f"Error creating output folder '{output_folder}': {str(e)}")
        return

    total_images = 0
    processed_images = 0
    skipped_images = 0

    for root, dirs, files in os.walk(input_folder):
        for item in files:
            if item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
                total_images += 1
                input_path = os.path.join(root, item)
                relative_path = os.path.relpath(root, input_folder)
                output_subfolder = os.path.join(output_folder, relative_path)
                
                try:
                    if not os.path.exists(output_subfolder):
                        os.makedirs(output_subfolder)
                except Exception as e:
                    print(f"Error creating subfolder '{output_subfolder}': {str(e)}")
                    continue

                preview_name = get_preview_name(item)
                output_path = os.path.join(output_subfolder, preview_name)
                
                if os.path.exists(output_path):
                    print(f"Preview already exists: {output_path}. Skipping.")
                    skipped_images += 1
                    continue

                if resize_image(input_path, output_path):
                    processed_images += 1

    print(f"Processed {processed_images} images, skipped {skipped_images} existing previews, out of {total_images} total images.")
    print(f"Complete! Processed folder: {input_folder}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_folder> <output_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]
    output_folder = sys.argv[2]
    resize_images_recursive(input_folder, output_folder)