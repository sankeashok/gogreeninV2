# Manual Cloudinary Upload Guide

## Problem
Python SSL certificate verification failed. Use Cloudinary web interface instead.

## Solution: Upload via Web Interface

### Step 1: Login to Cloudinary
https://console.cloudinary.com/console/dv6y9ykt9/media_library

### Step 2: Create Folder Structure
1. Click "Create Folder" button
2. Create: `gogreenin/2025`
3. Create: `gogreenin/2026`

### Step 3: Upload Files

**For 2025 files:**
- Upload `data/2025/*.jpg` to `gogreenin/2025/`
- Upload `data/2025/12-December/24-Dec-2025 WednesDay/*` to `gogreenin/2025/dec24/`
- Upload `data/2025/12-December/28-Dec-2025 Sunday/*` to `gogreenin/2025/dec28/`

**For 2026 files:**
- Upload `data/2026/01-January/04-January-2026 - Chikka Tirupathi/*` to `gogreenin/2026/ride01/`
- Upload `data/2026/01-January/Ride02 - 11-Jan-2025 - gogreenin.org website launch day/*` to `gogreenin/2026/ride02/`
- Upload `data/2026/01-January/Ride03 - 18-Jan-2025 -  KBDA Cycle Ride - Powered by HCL Cyclothon/*` to `gogreenin/2026/ride03/`

### Step 4: Get URLs
After upload, click each file and copy the URL (format: `https://res.cloudinary.com/dv6y9ykt9/...`)

### Step 5: Update JavaScript
Replace local paths with Cloudinary URLs in `script-reimagined-v2.js`

## Alternative: Fix SSL Certificate

```bash
# Install certifi
python -m pip install --upgrade certifi

# Or download certificates
python -m pip install --upgrade pip certifi
```

Then retry: `python cloudinary_migration.py`
