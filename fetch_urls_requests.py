import requests
import json
from requests.auth import HTTPBasicAuth

# Cloudinary credentials
CLOUD_NAME = "dv6y9ykt9"
API_KEY = "741985875772112"
API_SECRET = "mFIe7WaqPsb6E9wPsn7gw01x9O0"

def get_cloudinary_resources():
    """Fetch all resources using requests library"""
    url_mapping = {}
    
    # Get images
    print("Fetching images...")
    url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/resources/image"
    
    try:
        response = requests.get(
            url,
            auth=HTTPBasicAuth(API_KEY, API_SECRET),
            params={'max_results': 500},
            verify=False  # Skip SSL verification
        )
        
        if response.status_code == 200:
            data = response.json()
            for resource in data.get('resources', []):
                public_id = resource['public_id']
                secure_url = resource['secure_url']
                print(f"Image: {public_id}")
                url_mapping[public_id] = secure_url
        else:
            print(f"Error: {response.status_code}")
            print(response.text)
    except Exception as e:
        print(f"Error fetching images: {e}")
    
    # Get videos
    print("\nFetching videos...")
    url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/resources/video"
    
    try:
        response = requests.get(
            url,
            auth=HTTPBasicAuth(API_KEY, API_SECRET),
            params={'max_results': 500},
            verify=False
        )
        
        if response.status_code == 200:
            data = response.json()
            for resource in data.get('resources', []):
                public_id = resource['public_id']
                secure_url = resource['secure_url']
                print(f"Video: {public_id}")
                url_mapping[public_id] = secure_url
        else:
            print(f"Error: {response.status_code}")
    except Exception as e:
        print(f"Error fetching videos: {e}")
    
    # Save mapping
    with open('cloudinary_urls.json', 'w') as f:
        json.dump(url_mapping, f, indent=2)
    
    print(f"\nSaved {len(url_mapping)} URLs to cloudinary_urls.json")
    return url_mapping

if __name__ == "__main__":
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    get_cloudinary_resources()
