# Google Sheets Integration Setup Guide

## 📋 **Step 1: Create Google Sheet**

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet named "GoGreenIn Newsletter Signups"
3. Add headers in Row 1:
   ```
   A1: Timestamp
   B1: Name  
   C1: Email
   D1: Phone
   E1: Location
   F1: Interests
   ```
4. Copy the Sheet ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

## 🔧 **Step 2: Create Google Apps Script**

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace default code with content from `google-apps-script.js`
4. Replace `YOUR_SHEET_ID` with your actual Sheet ID
5. Save project as "GoGreenIn Newsletter Handler"

## 🚀 **Step 3: Deploy Web App**

1. Click "Deploy" → "New Deployment"
2. Choose "Web app" as type
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## 🔗 **Step 4: Update Website**

1. Open `script-reimagined-v2.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web App URL
3. Save and test the form

## 📧 **Email Notifications**

Emails will be sent to: `prabhakarrao.cm@gmail.com`

**Email Format:**
```
Subject: New GoGreenIn Newsletter Signup

New member joined:

Name: [User Name]
Email: [User Email]
Phone: [User Phone]
Location: [User Location]
Interests: [Selected Interests]

Time: [Submission Time]
```

## 📊 **Google Sheet Format**

| Timestamp | Name | Email | Phone | Location | Interests |
|-----------|------|-------|-------|----------|-----------|
| 2025-01-04 10:30 | John Doe | john@email.com | +91 9876543210 | North Bangalore | Sunday Rides, Environmental |

## 🔒 **Security Notes**

- Web App is accessible to anyone but only accepts POST requests
- Data is stored in your private Google Sheet
- Email notifications go only to specified admin email
- No sensitive data is exposed publicly

## 🧪 **Testing**

1. Fill out newsletter form on website
2. Check Google Sheet for new row
3. Check email for notification
4. Verify all data is captured correctly

## 🛠️ **Troubleshooting**

**Form not submitting:**
- Check Web App URL is correct
- Verify Apps Script permissions are granted
- Check browser console for errors

**No email notifications:**
- Verify email address in Apps Script
- Check spam folder
- Ensure Gmail account has necessary permissions

**Data not in sheet:**
- Verify Sheet ID is correct
- Check sheet permissions
- Ensure headers are in Row 1