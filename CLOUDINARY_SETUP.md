# Cloudinary Migration Guide

## Step 1: Create Cloudinary Account

1. Go to https://cloudinary.com/users/register_free
2. Sign up for free account (25GB storage + 25GB bandwidth/month)
3. After login, go to Dashboard
4. Copy your credentials:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

## Step 2: Install Cloudinary Python SDK

```bash
pip install cloudinary
```

## Step 3: Configure Credentials

Edit `cloudinary_migration.py` and replace:
```python
cloud_name="YOUR_CLOUD_NAME",
api_key="YOUR_API_KEY",
api_secret="YOUR_API_SECRET"
```

With your actual credentials from Cloudinary Dashboard.

## Step 4: Run Migration

```bash
cd C:\Users\ASanke\Documents\AKS\GGI_Prod_backup

# Upload all media to Cloudinary
python cloudinary_migration.py

# Update all URLs in JavaScript
python update_urls.py
```

## Step 5: Copy Updated File Back

After successful migration:
```bash
# Copy updated JavaScript file back to original
copy script-reimagined-v2.js ..\GGI_Prod\script-reimagined-v2.js
```

## What Gets Uploaded

- All `.jpg`, `.jpeg`, `.png` images
- All `.mp4`, `.mov` videos
- 58 media files from 2025-2026

## Benefits

✅ No GitHub size limits
✅ Faster loading (CDN)
✅ Automatic optimization
✅ Free 25GB storage
