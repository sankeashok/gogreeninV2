# GoGreenIn V3 - Cycling Revolution 🚴♂️🌱

> Bangalore's largest cycling community website with 17+ years of environmental impact

## 🌟 Live Website
- **Main Site**: https://sankeashok.github.io/gogreeninV2/v3/
- **Original V2**: https://sankeashok.github.io/gogreeninV2/

## ✨ Features

### 🎨 Modern UI/UX
- **Bento Grid Layout** - Asymmetric, Apple-inspired image galleries
- **Gradient Overlays** - Interactive hover effects on all images
- **Lightbox Gallery** - Click to zoom with keyboard navigation (←/→/Esc)
- **Mobile-First Design** - Responsive across all devices
- **Dark Theme** - Modern glassmorphism effects

### 📱 Progressive Web App (PWA)
- **Installable** - Add to home screen on mobile/desktop
- **Offline Support** - Service worker caching
- **Fast Loading** - Optimized performance

### 🔗 Dynamic Ride Pages
- **Individual URLs** - Each ride has its own shareable link
- **Social Media Ready** - Custom preview cards for Facebook/Twitter
- **SEO Optimized** - Dynamic meta tags
- **Example**: `/v3/ride.html?year=2026&month=Jan&ride=5`

### 📊 Google Sheets Integration
- **Automated Sync** - Daily updates at midnight UTC
- **Manual Trigger** - Run workflow anytime
- **No Duplicates** - Smart merge with historical data
- **Easy Updates** - Add rides via Google Sheets

### 🖼️ Cloudinary CDN
- **Fast Loading** - Global CDN delivery
- **Optimized Images** - Automatic compression
- **No GitHub Limits** - Unlimited media storage
- **Responsive Images** - Multiple sizes served

## 🚀 Quick Start

### Adding New Rides
1. **Update Google Sheet** with ride details
2. **Run GitHub Actions** workflow to sync
3. **Automatic deployment** to live site

### Sharing Rides
- **Timeline Modal**: Click "🔗 View Full Ride Page"
- **Direct Link**: `v3/ride.html?year=YYYY&month=MMM&ride=N`
- **Social Sharing**: Built-in share button with preview cards

## 📁 Project Structure

```
v3/
├── index.html              # Main V3 homepage
├── ride.html               # Dynamic ride viewer
├── admin.html              # Admin dashboard
├── assets/
│   ├── css/
│   │   └── main.css        # Modern styling with Bento Grid
│   └── js/
│       ├── main.js         # Core functionality
│       └── yearData.js     # Ride data (auto-synced)
├── config/
│   └── manifest.json       # PWA configuration
└── docs/                   # Documentation
```

## 🔧 Technical Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Inter (Google Fonts)
- **Images**: Cloudinary CDN
- **Data**: Google Sheets API
- **Deployment**: GitHub Pages
- **Automation**: GitHub Actions

## 🎯 Key Improvements Over V2

| Feature | V2 | V3 |
|---------|----|----|
| **Image Layout** | Basic grid | Bento Grid 2.0 |
| **Image Storage** | Local files | Cloudinary CDN |
| **Data Management** | Manual updates | Google Sheets sync |
| **Sharing** | Basic links | Dynamic social cards |
| **Mobile UX** | Responsive | Mobile-first PWA |
| **Performance** | Standard | Optimized + offline |

## 📈 Analytics & Sharing

### Social Media Preview
Each ride page generates custom preview cards with:
- **Dynamic thumbnails** from ride photos
- **Custom titles** with ride names and dates
- **Descriptions** with cyclist count and photo count
- **Professional branding** for GoGreenIn

### SEO Optimization
- Dynamic meta tags for each ride
- Open Graph and Twitter Card support
- Structured data for better search visibility

## 🔄 Automated Workflows

### Daily Sync (Midnight UTC)
```
Google Sheets → GitHub Actions → yearData.js → Live Website
```

### Manual Updates
1. **GitHub Actions**: Trigger workflow manually
2. **Admin Dashboard**: Add rides via web interface
3. **Direct Edit**: Modify yearData.js (advanced users)

## 🌍 Environmental Impact

**17 Years of Data (2008-2026)**
- 5000+ Active Cyclists
- 2500+ Trees Planted
- 300+ Events Organized
- 15+ Lakes Cleaned
- 50,000+ KM Cycled

## 👥 Community

- **Facebook**: [GoGreenIn.org](https://www.facebook.com/GoGreenIn.org/)
- **Instagram**: [@gogreenrao](https://www.instagram.com/gogreenrao/)
- **Contact**: prabhakarrao.cm@gmail.com

## 📝 License

© 2025 GoGreenIn • Cycling Revolution • V3.0

---

**Built with ❤️ for Bangalore's cycling community**