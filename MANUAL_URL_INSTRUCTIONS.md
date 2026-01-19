# Manual Cloudinary URL Mapping Instructions

Since the API has SSL issues, please manually get the URLs from Cloudinary:

## Option 1: Export from Cloudinary (Easiest)

1. Go to: https://console.cloudinary.com/console/dv6y9ykt9/media_library
2. Select all files (Ctrl+A)
3. Click "..." menu → "Export" → "Export as CSV"
4. Save the CSV file to this folder as `cloudinary_export.csv`
5. Run: `python process_csv.py`

## Option 2: Use Browser Console (Quick)

1. Go to: https://console.cloudinary.com/console/dv6y9ykt9/media_library
2. Open all folders (2025, 2026)
3. Press F12 (open browser console)
4. Paste this JavaScript code:

```javascript
// Get all image elements
const images = document.querySelectorAll('img[src*="res.cloudinary.com"]');
const urls = [];

images.forEach(img => {
    const src = img.src;
    if (src.includes('/image/upload/') || src.includes('/video/upload/')) {
        urls.push(src);
    }
});

// Copy to clipboard
copy(JSON.stringify(urls, null, 2));
console.log('Copied', urls.length, 'URLs to clipboard');
```

5. Paste the result here and I'll process it

## Option 3: I'll create a template

Tell me and I'll create a template based on the URL pattern you showed.
