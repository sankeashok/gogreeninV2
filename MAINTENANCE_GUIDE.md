# GoGreenIn V2 - Event Maintenance Guide

## Quick Steps to Add New Events

### Step 1: Upload Media to Cloudinary (2 minutes)

1. Go to: https://console.cloudinary.com/console/dv6y9ykt9/media_library
2. Click **"Upload"** button
3. Drag & drop your event photos/videos
4. Wait for upload to complete

### Step 2: Get Cloudinary URLs (1 minute)

1. Click on each uploaded file
2. Copy the **URL** (looks like: `https://res.cloudinary.com/dv6y9ykt9/image/upload/v.../filename.jpg`)
3. Save URLs in a text file temporarily

### Step 3: Update JavaScript File (3 minutes)

1. Open: `script-reimagined-v2.js`
2. Find the year section (e.g., `'2026':`)
3. Find the month (e.g., `{month: 'Feb', rides: 1, cyclists: 20, events: [`)
4. Add your new event:

```javascript
{
    name: 'Ride 4 - Your Event Name',
    url: 'https://youtube.com/shorts/YOUR_VIDEO_ID',  // Optional YouTube link
    photos: [
        'https://res.cloudinary.com/dv6y9ykt9/image/upload/v.../photo1.jpg',
        'https://res.cloudinary.com/dv6y9ykt9/image/upload/v.../photo2.jpg'
    ],
    videos: [
        'https://res.cloudinary.com/dv6y9ykt9/video/upload/v.../video1.mp4'
    ],
    description: 'Brief description'
}
```

5. Update ride count: `{month: 'Feb', rides: 2, cyclists: 25, events: [`

### Step 4: Push to GitHub (1 minute)

```bash
cd C:\Users\ASanke\Documents\AKS\GGI_Prod_backup
git add script-reimagined-v2.js
git commit -m "Added [Event Name] - [Date]"
git push origin main
git push origin gh-pages
```

### Step 5: Verify (1 minute)

- Wait 1-2 minutes
- Visit: https://sankeashok.github.io/gogreeninV2/
- Check your new event appears

---

## Template for New Event

```javascript
{
    name: 'Ride X - Event Name',
    url: 'YOUTUBE_LINK_OR_EMPTY',
    photos: [
        'CLOUDINARY_URL_1',
        'CLOUDINARY_URL_2',
        'CLOUDINARY_URL_3'
    ],
    videos: [
        'CLOUDINARY_VIDEO_URL_1'
    ],
    description: 'Event description'
}
```

---

## Tips

- **Photos**: Upload all at once to Cloudinary
- **Naming**: Keep filenames simple (no special characters)
- **Testing**: Test locally first by opening `index.html`
- **Backup**: Keep original photos on your computer

---

## Common Tasks

### Add New Month
```javascript
{month: 'Mar', rides: 0, cyclists: 0, events: []}
```

### Add New Year
```javascript
'2027': {
    title: '19 Years Legacy',
    description: 'Description',
    image: 'CLOUDINARY_IMAGE_URL',
    events: ['Key highlights'],
    monthlyData: [
        {month: 'Jan', rides: 0, cyclists: 0, events: []}
    ],
    url: '#2027-details'
}
```

### Update Ride Count
Change: `{month: 'Jan', rides: 3, cyclists: 45, events: [`
To: `{month: 'Jan', rides: 4, cyclists: 60, events: [`

---

## Need Help?

- Cloudinary Dashboard: https://console.cloudinary.com/console/dv6y9ykt9
- GitHub Repository: https://github.com/sankeashok/gogreeninV2
- Live Website: https://sankeashok.github.io/gogreeninV2/

---

**Total Time per Event: ~8 minutes**
