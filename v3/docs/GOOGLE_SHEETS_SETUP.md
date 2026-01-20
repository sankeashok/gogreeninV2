# Google Sheets Setup Guide

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "GoGreenIn Rides Data"

## Step 2: Set Up Columns

Create these column headers in Row 1:

| Year | Month | RideName | Cyclists | VideoURL | PhotoURLs |
|------|-------|----------|----------|----------|-----------|
| 2026 | Jan | Ride 1 - New Year Kickoff | 50 | https://youtube.com/... | https://res.cloudinary.com/..., https://res.cloudinary.com/... |

## Step 3: Make Sheet Public

1. Click "Share" button (top right)
2. Click "Change to anyone with the link"
3. Set to "Viewer"
4. Click "Done"

## Step 4: Get Sheet ID

From your sheet URL:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit
                                      ^^^^^^^^^^^^^^^^
                                      This is your Sheet ID
```

## Step 5: Create API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: "GoGreenIn Website"
3. Enable "Google Sheets API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy the API key

## Step 6: Configure Admin Dashboard

1. Open: `https://sankeashok.github.io/gogreeninV2/v3/admin.html`
2. Login with password: `gogreenin2026`
3. Go to "Sync with Google Sheets" tab
4. Paste Sheet ID and API Key
5. Click "Save Configuration"
6. Click "Sync Now"

## Step 7: Update Website

1. Go to "Preview Data" tab
2. Click "Download yearData.js"
3. Replace `v3/assets/js/yearData.js` with downloaded file
4. Commit and push to GitHub

## Example Sheet Data

```
Year | Month | RideName                              | Cyclists | VideoURL                          | PhotoURLs
-----|-------|---------------------------------------|----------|-----------------------------------|------------------
2026 | Jan   | Ride 1 - New Year Kickoff            | 50       | https://youtube.com/shorts/abc    | https://res.cloudinary.com/img1.jpg, https://res.cloudinary.com/img2.jpg
2026 | Jan   | Ride 2 - Website Launch Day          | 30       | https://youtube.com/shorts/xyz    | https://res.cloudinary.com/img3.jpg
2025 | Dec   | Ride 5 - Year End Celebration        | 300      | https://youtu.be/MEbBPBkV_rM      | https://res.cloudinary.com/img4.jpg
```

## Tips

- **PhotoURLs**: Separate multiple URLs with commas
- **VideoURL**: Use full YouTube URL
- **Month**: Use 3-letter abbreviation (Jan, Feb, Mar, etc.)
- **Cyclists**: Enter number only
- Keep sheet organized by Year (descending) and Month

## Automation (Optional)

Use GitHub Actions to auto-sync every day:

1. Create `.github/workflows/sync-sheets.yml`
2. Add Google Sheets API credentials as GitHub Secrets
3. Schedule daily sync at midnight

## Security

- **Change admin password** in `admin.html` (line 122)
- **Don't commit API keys** to GitHub
- Use environment variables for production

## Troubleshooting

**"Sync failed" error:**
- Check Sheet ID is correct
- Verify API key is valid
- Ensure sheet is publicly viewable
- Check Google Sheets API is enabled

**"No data found" error:**
- Verify column headers match exactly
- Check sheet name is "Sheet1"
- Ensure there's data in rows below headers

## Support

For issues, contact: prabhakarrao.cm@gmail.com
