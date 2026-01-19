import cloudinary
import cloudinary.api
import json

# Configure Cloudinary
cloudinary.config(
    cloud_name="dv6y9ykt9",
    api_key="741985875772112",
    api_secret="mFIe7WaqPsb6E9wPsn7gw01x9O0"
)

def get_all_cloudinary_urls():
    """Fetch all uploaded files from Cloudinary"""
    url_mapping = {}
    
    try:
        # Get all resources (images and videos)
        print("Fetching images...")
        images = cloudinary.api.resources(type="upload", max_results=500, resource_type="image")
        
        for resource in images['resources']:
            public_id = resource['public_id']
            secure_url = resource['secure_url']
            
            # Try to map back to local path
            local_path = f"data/{public_id}"
            url_mapping[local_path] = secure_url
            print(f"{public_id} -> {secure_url}")
        
        print("\nFetching videos...")
        videos = cloudinary.api.resources(type="upload", max_results=500, resource_type="video")
        
        for resource in videos['resources']:
            public_id = resource['public_id']
            secure_url = resource['secure_url']
            
            local_path = f"data/{public_id}"
            url_mapping[local_path] = secure_url
            print(f"{public_id} -> {secure_url}")
        
        # Save mapping
        with open('cloudinary_url_mapping.json', 'w') as f:
            json.dump(url_mapping, f, indent=2)
        
        print(f"\nOK Generated {len(url_mapping)} URL mappings")
        print("OK Saved to: cloudinary_url_mapping.json")
        
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == "__main__":
    get_all_cloudinary_urls()
