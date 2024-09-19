import os
import sys
from PIL import Image, UnidentifiedImageError

def get_preview_name(original_name):
    name, ext = os.path.splitext(original_name)
    return f"{name}-preview{ext}"

def resize_image(input_path):
    try:
        with Image.open(input_path) as img:
            # Maintain the aspect ratio
            aspect_ratio = img.width / img.height
            new_width = max(1, int(10 * aspect_ratio))

            # Resize and save directly
            resized_img = img.resize((new_width, 10), Image.Resampling.LANCZOS)

            # Get the output path as the same folder with "-preview" appended to the file name
            output_path = get_preview_name(input_path)
            resized_img.save(output_path)
            
        print(f"Created preview: {output_path} ({new_width}x10)")
        return True
    except UnidentifiedImageError:
        print(f"Warning: {input_path} is not a valid image file. Skipping.")
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")
    return False

def resize_images_in_place(folder):
    if not os.path.exists(folder):
        print(f"Error: Folder '{folder}' does not exist.")
        return

    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
                input_path = os.path.join(root, file)
                output_path = get_preview_name(input_path)

                if not os.path.exists(output_path):
                    if resize_image(input_path):
                        print(f"Processed {output_path}")
                else:
                    print(f"Preview already exists: {output_path}. Skipping.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <folder>")
        sys.exit(1)

    folder = sys.argv[1]
    resize_images_in_place(folder)
