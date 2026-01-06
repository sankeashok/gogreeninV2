# GoGreenIn - Cycling Revolution Website

> **Don't Wait, Be the Change.**  
> Transform Bangalore through cycling. Join India's most impactful environmental community.

## 🌟 About GoGreenIn
GoGreenIn is Bangalore's oldest and largest cycling community, founded in 2008 with a mission to transform the city through cycling and environmental awareness. With 17+ years of legacy, 5000+ cyclists, and 300+ events, we're India's most impactful environmental community dedicated to sustainability.

## 🚀 Live Website Features
- **Interactive 17-Year Timeline**: Complete journey from 2008-2025 with clickable year modals
- **Monthly Event Breakdowns**: Each year shows detailed monthly ride data with expandable events
- **Clickable Event Links**: Direct access to YouTube videos, Facebook posts, and Google Drive folders
- **Anniversary Celebrations**: Special links to milestone celebrations (1st, 2nd, 10th, 15th, 17th anniversaries)
- **Mobile-First Design**: Fully responsive with optimized mobile navigation and layouts
- **Dark/Light Theme Toggle**: Seamless theme switching with improved text visibility
- **Real-time Statistics**: Animated counters showing community impact over the years
- **Event Gallery**: Filterable events by category (Sunday rides, Anniversary, Special events)
- **Full-Screen Image Viewer**: Click any image to view in full-screen modal with smooth animations
- **Dual Join Options**: WhatsApp group and Google form registration choices
- **Newsletter System**: Google Sheets integration with email notifications

## 📁 Clean Project Structure
```
gogreenin/
├── index.html                    # Main website (ACTIVE)
├── styles-reimagined-v2.css      # Active stylesheet with mobile optimization
├── script-reimagined-v2.js       # Active JavaScript with dynamic event loading
├── google-apps-script.js         # 📊 Google Apps Script for form handling
├── GOOGLE_SHEETS_SETUP.md        # 🔧 Setup guide for Google Sheets integration
├── data/                         # 📊 Organized events data (2008-2025)
│   ├── 2008/events.json          # Foundation year events
│   ├── 2009/events.json          # 1st Anniversary with YouTube links
│   ├── 2010/events.json          # 2nd Anniversary with YouTube links
│   ├── 2013/events.json          # 5 Years Strong milestone
│   ├── 2018/events.json          # 10th Anniversary milestone
│   ├── 2020/events.json          # Pandemic resilience year
│   ├── 2023/events.json          # 15th Anniversary milestone
│   ├── 2024/events.json          # Recent impact year
│   └── 2025/                     # 17th Anniversary year
│       ├── events.json           # Complete 12-month data with URLs
│       └── 17th Anniversary-2025 Year.jpg
├── admin.html                    # Content management interface
├── events-manager.html           # Event editing interface
├── statistics.html               # Impact dashboard (commented out)
├── test-json.html                # JSON loading test utility
├── CONTENT_MANAGEMENT.md         # Non-technical editing guide
├── Summary-GoGreenIn.md          # Project overview
├── temp_unused_files/            # 🗃️ Archived unused variations
│   ├── index-*.html              # Alternative website versions
│   ├── styles-*.css              # Alternative stylesheets
│   └── script-*.js               # Alternative JavaScript files
└── README.md                     # This comprehensive guide
```

## 🎯 Website Sections
1. **Hero Section**: "Don't Wait, Be the Change" with animated statistics (17 Years, 5000+ Cyclists, 300+ Events, 50K+ KM)
2. **Our Core Stories**: Video testimonials and community impact stories
3. **Our Journey**: Interactive 17-year timeline (2008-2025) with:
   - Clickable year modals showing detailed monthly breakdowns
   - Expandable month sections with individual event listings
   - Direct links to YouTube videos, Facebook posts, Google Drive folders
   - Anniversary celebrations with special multimedia content
4. **Events Gallery**: Filterable gallery with categories:
   - Sunday Rides, Anniversary Celebrations, Special Events, Endurance Challenges
5. **What We Do**: Core activities showcase
6. **Environmental Impact**: Real-time animated counters
7. **Join Community**: Multiple engagement options and contact forms

## 📊 Advanced Data Management System

### **JSON-Based Event Structure**
- **Complete 17-Year Data**: All years from 2008-2025 with detailed monthly breakdowns
- **Event Object Format**: Each event supports `name`, `url`, `photos`, `description`
- **Multimedia Integration**: Direct links to YouTube videos, Facebook reels, Google Drive folders
- **Anniversary Milestones**: Special events for 1st, 2nd, 10th, 15th, and 17th anniversaries

### **Content Management Options**
1. **Direct JSON Editing**: Update `data/YEAR/events.json` files for immediate changes
2. **Admin Interface**: Use `admin.html` for visual event management
3. **Events Manager**: Use `events-manager.html` for bulk event editing
4. **Test Interface**: Use `test-json.html` to verify JSON loading

### **Event URL Examples**
- **2009**: 1st Anniversary Celebrations → YouTube video
- **2010**: 2nd Anniversary Celebration → YouTube video  
- **2025 September**: Tour-De-Mysore 2025 → Facebook reel
- **2025 December**: 17th Anniversary Celebration → Google Drive folder
- **2025 December**: Sunday ride → YouTube Shorts

## 🔗 Multimedia Integrations

### **YouTube Integration**
- **Anniversary Videos**: 1st and 2nd anniversary celebration videos
- **YouTube Shorts**: Recent ride highlights and quick updates
- **Event Documentation**: Comprehensive ride coverage and community stories

### **Facebook Integration**
- **Facebook Reels**: Tour-De-Mysore 2025 and other special events
- **Community Posts**: Regular updates and engagement content
- **Live Coverage**: Real-time event updates and community interaction

### **Google Drive Integration**
- **Photo Galleries**: 17th Anniversary celebration photos and event albums
- **Document Storage**: Event planning documents and community resources
- **Shared Resources**: Community guidelines and participation materials

### **Interactive Features**
- **Full-Screen Image Viewer**: Click any image for immersive viewing experience
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Mobile Touch Optimization**: Gesture-friendly navigation and interactions

## 🚀 Getting Started

### **For Users (Viewing the Website)**
1. **Open `index.html`** in any modern web browser
2. **Navigate the timeline** by clicking on any year (2008-2025)
3. **Expand monthly details** by clicking the arrow (▶) next to each month
4. **Click event links** to view YouTube videos, Facebook posts, or photo galleries
5. **Toggle themes** using the theme switcher in the top navigation
6. **Use mobile-optimized layout** on phones and tablets

### **For Content Managers (Non-Technical)**
1. **Edit Events**: Open `data/YEAR/events.json` files to update event names and URLs
2. **Add Photos**: Place images in respective year folders and reference in JSON
3. **Use Admin Panel**: Open `admin.html` for visual event management interface
4. **Test Changes**: Use `test-json.html` to verify JSON file loading
5. **Follow Guide**: Refer to `CONTENT_MANAGEMENT.md` for detailed instructions

### **For Developers**
1. **Main Files**: `index.html`, `styles-reimagined-v2.css`, `script-reimagined-v2.js`
2. **Data Structure**: JSON files in `data/` folder with year-wise organization
3. **Mobile Optimization**: Responsive design with mobile-first approach
4. **Theme System**: CSS variables for easy theme customization
5. **Event System**: Dynamic loading with fallback for local development

## 🛠️ Technical Features

### **Mobile Optimization**
- **Responsive Timeline**: Adapts from 6 columns (desktop) to 1 column (mobile)
- **Touch-Friendly Navigation**: Optimized button sizes and spacing for mobile
- **Mobile Header**: Organized layout with visible join button and navigation
- **Content Spacing**: Proper padding to prevent header overlap on mobile devices

### **Theme System**
- **Dark Theme**: Default with green accents and optimal contrast
- **Light Theme**: Clean white background with dark green gradients for better text visibility
- **Automatic Persistence**: Theme preference saved in localStorage
- **Improved Contrast**: Special styling for stats and modal text in light theme

### **Performance Features**
- **Optimized Loading**: Minimal JavaScript for fast initial page load
- **Smooth Animations**: CSS-based transitions and hover effects
- **Image Optimization**: Properly sized images with lazy loading concepts
- **Clean Code Structure**: Organized CSS and JavaScript for maintainability

## 📞 Contact & Community
- **Email**: prabhakarrao.cm@gmail.com
- **Facebook**: [GoGreenIn.org](https://www.facebook.com/GoGreenIn.org/)
- **WhatsApp**: [Join Community Group](https://chat.whatsapp.com/EEZAWjvonFW3oMoGP8C1id)
- **YouTube**: [GoGreenIn Channel](https://youtu.be/kojDjqbusYs)
- **Join Community**: Use the "🚴 Upcoming Ride" button on the website

## 🎯 Recent Updates (January 2025)
- ✅ **Complete 17-year timeline** with all years from 2008-2025
- ✅ **Mobile-first responsive design** with optimized layouts
- ✅ **Multimedia event links** to YouTube, Facebook, and Google Drive
- ✅ **Anniversary milestone celebrations** with special content
- ✅ **Improved light theme visibility** with dark green gradients
- ✅ **Clean project structure** with organized data folder
- ✅ **Full-screen image viewer** with smooth modal interactions
- ✅ **Comprehensive content management** system for easy updates
- ✅ **Dual join community options** (WhatsApp + Google Form)
- ✅ **Google Sheets integration** for newsletter data storage
- ✅ **Automated email notifications** for admin alerts
- ✅ **Updated Facebook page** link to GoGreenIn.org

---

**GoGreenIn** - Don't Wait, Be the Change. Pedaling towards a sustainable future since 2008 🚴‍♂️🌱

*Transform Bangalore through cycling. Join India's most impactful environmental community.*