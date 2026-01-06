// Google Apps Script Code (Deploy as Web App)
// 1. Go to script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy as Web App with "Anyone" access

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Store in Google Sheets
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.location,
      data.interests.join(', ')
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'prabhakarrao.cm@gmail.com',
      subject: 'New GoGreenIn Newsletter Signup',
      body: `New member joined:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nLocation: ${data.location}\nInterests: ${data.interests.join(', ')}\n\nTime: ${new Date()}`
    });
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}