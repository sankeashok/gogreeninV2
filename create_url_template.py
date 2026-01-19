import os
from pathlib import Path

# Generate list of all media files
data_dir = Path("data")
media_files = []

for file_path in data_dir.rglob('*'):
    if file_path.suffix.lower() in ['.jpg', '.jpeg', '.png', '.mp4', '.mov']:
        relative_path = str(file_path.relative_to(data_dir)).replace('\\', '/')
        media_files.append(f"data/{relative_path}")

# Save to text file for manual mapping
with open('media_files_list.txt', 'w') as f:
    f.write("INSTRUCTIONS:\n")
    f.write("1. Open Cloudinary Media Library: https://console.cloudinary.com/console/dv6y9ykt9/media_library\n")
    f.write("2. For each file below, find it in Cloudinary and copy its URL\n")
    f.write("3. Paste the URL next to the filename (after the = sign)\n\n")
    f.write("=" * 80 + "\n\n")
    
    for file in media_files:
        filename = file.split('/')[-1]
        f.write(f"{file} = \n")

print(f"Created media_files_list.txt with {len(media_files)} files")
print("\nNext steps:")
print("1. Open media_files_list.txt")
print("2. For each file, find it in Cloudinary and paste its URL")
print("3. Save the file")
print("4. Run: python process_manual_urls.py")
