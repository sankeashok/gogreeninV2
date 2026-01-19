import json
from pathlib import Path

# Base Cloudinary URL
BASE_URL = "https://res.cloudinary.com/dv6y9ykt9/image/upload"
VIDEO_URL = "https://res.cloudinary.com/dv6y9ykt9/video/upload"

def generate_cloudinary_urls():
    """Generate Cloudinary URLs for all uploaded files"""
    data_dir = Path("data")
    url_mapping = {}
    
    media_extensions = {'.jpg', '.jpeg', '.png', '.mp4', '.mov'}
    
    for file_path in data_dir.rglob('*'):
        if file_path.suffix.lower() in media_extensions:
            relative_path = str(file_path.relative_to(data_dir)).replace('\\', '/')
            
            # Cloudinary path (spaces replaced with %20 or underscores)
            cloudinary_path = relative_path.replace(' ', '_').replace('(', '').replace(')', '')
            
            # Determine if image or video
            if file_path.suffix.lower() in ['.mp4', '.mov']:
                cloudinary_url = f"{VIDEO_URL}/{cloudinary_path}"
            else:
                cloudinary_url = f"{BASE_URL}/{cloudinary_path}"
            
            # Store mapping
            url_mapping[f"data/{relative_path}"] = cloudinary_url
            print(f"{relative_path} -> {cloudinary_url}")
    
    # Save mapping
    with open('cloudinary_url_mapping.json', 'w') as f:
        json.dump(url_mapping, f, indent=2)
    
    print(f"\n✓ Generated {len(url_mapping)} URL mappings")
    print("✓ Saved to: cloudinary_url_mapping.json")
    
    return url_mapping

if __name__ == "__main__":
    generate_cloudinary_urls()
