# Quick Setup for Your Google Sheet

## Your Sheet Details
- **Sheet URL:** https://docs.google.com/spreadsheets/d/1IhOt_sMKeEQQ-VD9UE7Qk_3VHONV5Uvej615mym_WZw/edit
- **Sheet ID:** `1IhOt_sMKeEQQ-VD9UE7Qk_3VHONV5Uvej615mym_WZw`

---

## Step 1: Make Sheet Public ✅

1. Open your sheet
2. Click "Share" (top right)
3. Click "Change to anyone with the link"
4. Set to "Viewer"
5. Click "Done"

---

## Step 2: Create Google API Key (5 minutes)

### A. Create Project
1. Go to: https://console.cloud.google.com
2. Click "Select a project" → "New Project"
3. Name: "GoGreenIn Website"
4. Click "Create"

### B. Enable Google Sheets API
1. In search bar, type "Google Sheets API"
2. Click "Google Sheets API"
3. Click "Enable"

### C. Create API Key
1. Click "Credentials" (left sidebar)
2. Click "Create Credentials" → "API Key"
3. Copy the API key (looks like: `AIzaSyABC123...`)
4. Click "Close"

---

## Step 3: Add Secrets to GitHub (2 minutes)

1. Go to: https://github.com/sankeashok/gogreeninV2/settings/secrets/actions

2. Click "New repository secret"

### Secret 1:
- **Name:** `GOOGLE_SHEET_ID`
- **Value:** `1IhOt_sMKeEQQ-VD9UE7Qk_3VHONV5Uvej615mym_WZw`
- Click "Add secret"

### Secret 2:
- **Name:** `GOOGLE_API_KEY`
- **Value:** [Paste your API key from Step 2C]
- Click "Add secret"

---

## Step 4: Enable GitHub Actions (1 minute)

1. Go to: https://github.com/sankeashok/gogreeninV2/settings/actions
2. Under "Workflow permissions"
3. Select "Read and write permissions"
4. Click "Save"

---

## Step 5: Test It! (2 minutes)

1. Go to: https://github.com/sankeashok/gogreeninV2/actions
2. Click "Sync Google Sheets to Website"
3. Click "Run workflow" → "Run workflow"
4. Wait 1-2 minutes
5. Check if it succeeded ✅

---

## Step 6: Add Sample Data

Add this to your Google Sheet (Row 2):

| Year | Month | RideName | Cyclists | VideoURL | PhotoURLs |
|------|-------|----------|----------|----------|-----------|
| 2026 | Jan | Test Ride - Sample Data | 25 | https://youtube.com/shorts/test | https://res.cloudinary.com/dv6y9ykt9/image/upload/v1768845890/IMG-20260118-WA0041_czomzc.jpg |

Then run the workflow again to see it sync!

---

## Done! 🎉

From now on:
- Update Google Sheet anytime
- GitHub Actions syncs automatically at midnight
- Website updates with new data
- Zero manual work!

---

## Troubleshooting

**If workflow fails:**
1. Check sheet is publicly viewable
2. Verify API key is correct
3. Ensure Google Sheets API is enabled
4. Check sheet name is "Sheet1"

**Need help?**
Contact: prabhakarrao.cm@gmail.com
