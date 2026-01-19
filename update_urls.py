import json

def update_urls_in_js():
    """Update all local URLs to Cloudinary URLs in JavaScript file"""
    
    # Load URL mapping
    with open('cloudinary_url_mapping.json', 'r') as f:
        url_mapping = json.load(f)
    
    # Read JavaScript file
    with open('script-reimagined-v2.js', 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    # Replace all URLs
    for old_url, new_url in url_mapping.items():
        js_content = js_content.replace(f"'{old_url}'", f"'{new_url}'")
        js_content = js_content.replace(f'"{old_url}"', f'"{new_url}"')
    
    # Save updated file
    with open('script-reimagined-v2.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"✓ Updated {len(url_mapping)} URLs in script-reimagined-v2.js")

if __name__ == "__main__":
    update_urls_in_js()
