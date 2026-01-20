# GitHub Actions Setup Guide

## What This Does

Automatically syncs your Google Sheet data to the website **every day at midnight** without any manual work!

---

## Step 1: Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project: "GoGreenIn Automation"
3. Enable **Google Sheets API**:
   - Click "Enable APIs and Services"
   - Search "Google Sheets API"
   - Click "Enable"
4. Create API Key:
   - Go to "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key (looks like: `AIzaSyABC123...`)

---

## Step 2: Get Your Sheet ID

From your Google Sheet URL:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit
                                      ^^^^^^^^^^^^^^^^
                                      This is your Sheet ID
```

---

## Step 3: Add Secrets to GitHub

1. Go to your GitHub repository: https://github.com/sankeashok/gogreeninV2
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret**

### Add Secret 1:
- **Name:** `GOOGLE_SHEET_ID`
- **Value:** Your Sheet ID (from Step 2)
- Click "Add secret"

### Add Secret 2:
- **Name:** `GOOGLE_API_KEY`
- **Value:** Your API Key (from Step 1)
- Click "Add secret"

---

## Step 4: Enable GitHub Actions

1. Go to **Actions** tab in your repository
2. If prompted, click "I understand my workflows, go ahead and enable them"
3. You should see "Sync Google Sheets to Website" workflow

---

## Step 5: Test It!

### Manual Test:
1. Go to **Actions** tab
2. Click "Sync Google Sheets to Website"
3. Click "Run workflow" → "Run workflow"
4. Wait 1-2 minutes
5. Check if `v3/assets/js/yearData.js` was updated

### Automatic Test:
1. Update your Google Sheet (add a new ride)
2. Wait until midnight (or run manually)
3. Check website - new ride should appear!

---

## How It Works

```
┌─────────────────┐
│  Google Sheet   │ ← You update this
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ GitHub Actions  │ ← Runs at midnight daily
│  (Robot Worker) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ yearData.js     │ ← Auto-updated
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Website      │ ← Shows new data
└─────────────────┘
```

---

## Schedule

- **Automatic:** Every day at 12:00 AM UTC (5:30 AM IST)
- **Manual:** Click "Run workflow" anytime

---

## What Gets Updated

- ✅ New rides added to Google Sheet
- ✅ Photo URLs
- ✅ Video URLs
- ✅ Cyclist counts
- ✅ All years and months

---

## Troubleshooting

### "Workflow failed" error:
- Check Sheet ID is correct
- Verify API key is valid
- Ensure Google Sheets API is enabled
- Check sheet is publicly viewable

### "No changes detected":
- Verify Google Sheet has new data
- Check column headers match exactly
- Ensure sheet name is "Sheet1"

### "Permission denied":
- Go to Settings → Actions → General
- Enable "Read and write permissions"
- Click "Save"

---

## Cost

**FREE!** GitHub Actions includes:
- 2,000 minutes/month free
- This workflow uses ~2 minutes/month
- Cost: $0

---

## Security

✅ API keys stored as encrypted secrets
✅ Not visible in code or logs
✅ Only GitHub Actions can access
✅ 100% secure

---

## Benefits

- ⏰ **Time Saved:** 10 minutes per update → 0 minutes
- 🤖 **Fully Automated:** Update sheet, forget about it
- 🆓 **Free Forever:** No costs
- 🔒 **Secure:** Encrypted secrets
- 📱 **No Technical Skills:** Just update Google Sheet

---

## Support

Issues? Contact: prabhakarrao.cm@gmail.com

---

**Created:** January 20, 2026
**Version:** 1.0
