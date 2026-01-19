import json
import re

# Load Cloudinary URLs
with open('cloudinary_urls.json', 'r') as f:
    cloudinary_urls = json.load(f)

# Create filename to URL mapping (without the unique ID suffix)
url_map = {}
for public_id, url in cloudinary_urls.items():
    # Extract base filename (remove the _xxxxx suffix)
    if '_' in public_id and not public_id.startswith('samples'):
        base_name = '_'.join(public_id.split('_')[:-1])
        url_map[base_name] = url
    else:
        url_map[public_id] = url

# Read JavaScript file
with open('script-reimagined-v2.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Replace all local paths with Cloudinary URLs
replacements = 0
for filename, cloudinary_url in url_map.items():
    # Try different path patterns
    patterns = [
        f"data/2026/01-January/Ride03 - 18-Jan-2025 -  KBDA Cycle Ride - Powered by HCL Cyclothon/{filename}",
        f"data/2026/01-January/Ride02 - 11-Jan-2025 - gogreenin.org website launch day/{filename}",
        f"data/2026/01-January/04-January-2026 - Chikka Tirupathi/{filename}",
        f"data/2025/12-December/24-Dec-2025 WednesDay/{filename}",
        f"data/2025/12-December/28-Dec-2025 Sunday/{filename}",
        f"data/2025/{filename}"
    ]
    
    for pattern in patterns:
        if pattern in js_content:
            js_content = js_content.replace(f"'{pattern}.jpg'", f"'{cloudinary_url}'")
            js_content = js_content.replace(f"'{pattern}.mp4'", f"'{cloudinary_url}'")
            js_content = js_content.replace(f'"{pattern}.jpg"', f'"{cloudinary_url}"')
            js_content = js_content.replace(f'"{pattern}.mp4"', f'"{cloudinary_url}"')
            replacements += 1
            print(f"Replaced: {filename}")

# Save updated JavaScript
with open('script-reimagined-v2.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\nTotal replacements: {replacements}")
print("Updated script-reimagined-v2.js")
