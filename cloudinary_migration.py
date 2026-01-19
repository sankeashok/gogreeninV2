import os
import json
import certifi
import cloudinary
import cloudinary.uploader
from pathlib import Path

# Configure Cloudinary
cloudinary.config(
    cloud_name="dv6y9ykt9",
    api_key="741985875772112",
    api_secret="mFIe7WaqPsb6E9wPsn7gw01x9O0",
    secure=True
)

# Set SSL certificate path
os.environ['SSL_CERT_FILE'] = certifi.where()
os.environ['REQUESTS_CA_BUNDLE'] = certifi.where()

def upload_media_to_cloudinary():
    """Upload all media files and create URL mapping"""
    data_dir = Path("data")
    url_mapping = {}
    
    # Find all media files
    media_extensions = {'.jpg', '.jpeg', '.png', '.mp4', '.mov'}
    
    for file_path in data_dir.rglob('*'):
        if file_path.suffix.lower() in media_extensions:
            relative_path = str(file_path.relative_to(data_dir)).replace('\\', '/')
            
            # Create organized folder structure in Cloudinary
            folder_name = f"gogreenin/{file_path.parent.relative_to(data_dir)}".replace('\\', '/')
            
            try:
                print(f"Uploading: {relative_path}")
                
                # Upload to Cloudinary
                result = cloudinary.uploader.upload(
                    str(file_path),
                    folder=folder_name,
                    resource_type="auto",  # auto-detect image/video
                    use_filename=True,
                    unique_filename=False
                )
                
                # Store mapping
                url_mapping[f"data/{relative_path}"] = result['secure_url']
                print(f"OK Uploaded: {result['secure_url']}")
                
            except Exception as e:
                print(f"ERROR uploading {relative_path}: {e}")
    
    # Save mapping to JSON
    with open('cloudinary_url_mapping.json', 'w') as f:
        json.dump(url_mapping, f, indent=2)
    
    print(f"\nOK Migration complete! {len(url_mapping)} files uploaded.")
    print("OK URL mapping saved to: cloudinary_url_mapping.json")
    
    return url_mapping

if __name__ == "__main__":
    upload_media_to_cloudinary()
