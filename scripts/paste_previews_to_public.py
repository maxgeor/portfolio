import os
import shutil

def copy_files(src_folder, dest_folder):
    # Walk through the src_folder
    for root, dirs, files in os.walk(src_folder):
        # Get the relative path from src_folder
        relative_path = os.path.relpath(root, src_folder)
        
        # Determine the corresponding destination subfolder
        dest_subfolder = os.path.join(dest_folder, relative_path)

        # If there are files in the current directory
        for file in files:
            # Construct the full path to the source and destination files
            src_file = os.path.join(root, file)
            dest_file = os.path.join(dest_subfolder, file)

            # Create the destination subfolder if it doesn't exist
            if not os.path.exists(dest_subfolder):
                os.makedirs(dest_subfolder)

            # Copy the file from src_file to dest_file
            shutil.copy2(src_file, dest_file)
            print(f"Copied {src_file} to {dest_file}")

if __name__ == "__main__":
    src_folder = "./previews"
    dest_folder = "./public"
    
    copy_files(src_folder, dest_folder)
