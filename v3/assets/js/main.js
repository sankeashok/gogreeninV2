// V3 Main JavaScript
// Load timeline with click handlers
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');
    if (timeline && window.yearData) {
        const years = Object.keys(window.yearData).sort((a, b) => b - a);
        timeline.innerHTML = years.map(year => `
            <div class="timeline-item" data-year="${year}" onclick="openYearModal('${year}')" style="cursor: pointer;">
                <div class="timeline-year">${year}</div>
                <div class="timeline-content">
                    <h3>${window.yearData[year].title}</h3>
                    <p>${window.yearData[year].description}</p>
                    <ul>${(window.yearData[year].events || []).slice(0, 3).map(e => `<li>${typeof e === 'string' ? e : e.name || e}</li>`).join('')}</ul>
                    <button class="view-details-btn">View Details →</button>
                </div>
            </div>
        `).join('');
    }
});

// Modal functions
function openYearModal(year) {
    const data = window.yearData[year];
    if (!data) return;
    
    document.getElementById('modalYear').textContent = year;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    
    const eventsContainer = document.getElementById('modalEvents');
    let eventsHTML = '<div class="modal-event-list">';
    
    if (data.monthlyData && data.monthlyData.length > 0) {
        eventsHTML += '<h4>Monthly Breakdown:</h4>';
        data.monthlyData.forEach((monthData, index) => {
            eventsHTML += `
                <div class="modal-month-item">
                    <div class="month-header" onclick="toggleMonthEvents(${index})">
                        <span>${monthData.month}: ${monthData.rides} rides, ${monthData.cyclists} cyclists</span>
                        <span class="expand-arrow" id="arrow-${index}">▶</span>
                    </div>
                    <div class="month-events collapsed" id="month-events-${index}">
                        ${monthData.events.map(event => {
                            const eventName = typeof event === 'string' ? event : event.name;
                            const eventUrl = typeof event === 'object' ? event.url : '';
                            const eventPhotos = typeof event === 'object' ? (event.photos || []) : [];
                            
                            let html = '<div class="event-detail">';
                            if (eventUrl) {
                                html += `<a href="${eventUrl}" target="_blank" style="color: #00ff88;">${eventName}</a>`;
                            } else {
                                html += eventName;
                            }
                            
                            if (eventPhotos.length > 0) {
                                html += `<div class="event-photos" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">`;
                                eventPhotos.slice(0, 6).forEach(photo => {
                                    html += `<img src="${photo}" onclick="openImageFullscreen('${photo}')" style="width: 100%; height: 100px; object-fit: cover; cursor: pointer; border-radius: 8px;">`;
                                });
                                html += '</div>';
                            }
                            html += '</div>';
                            return html;
                        }).join('')}
                    </div>
                </div>
            `;
        });
    } else {
        eventsHTML += data.events.map(e => `<div class="modal-event-item">${e}</div>`).join('');
    }
    
    eventsHTML += '</div>';
    eventsContainer.innerHTML = eventsHTML;
    
    document.getElementById('yearModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeYearModal() {
    document.getElementById('yearModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openImageFullscreen(src) {
    document.getElementById('fullscreenImage').src = src;
    document.getElementById('imageModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function toggleMonthEvents(index) {
    const events = document.getElementById(`month-events-${index}`);
    const arrow = document.getElementById(`arrow-${index}`);
    if (events.classList.contains('collapsed')) {
        events.classList.remove('collapsed');
        arrow.textContent = '▼';
    } else {
        events.classList.add('collapsed');
        arrow.textContent = '►';
    }
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-icon');
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        icon.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'light');
        icon.textContent = '☀️';
    }
}

// Nav toggle
function toggleNav() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// Video modal
function openVideo(url) {
    const modal = document.getElementById('video-modal');
    const frame = document.getElementById('video-frame');
    const videoId = url.includes('youtube.com') ? url.split('v=')[1]?.split('&')[0] : url.split('/').pop();
    frame.src = `https://www.youtube.com/embed/${videoId}`;
    modal.classList.add('active');
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const frame = document.getElementById('video-frame');
    frame.src = '';
    modal.classList.remove('active');
}

// Tab switching
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });
});

// Impact calculator
function calculateImpact() {
    const distance = document.getElementById('distance').value;
    const result = document.getElementById('calculator-result');
    if (distance) {
        const co2 = (distance * 0.2).toFixed(2);
        const calories = (distance * 50).toFixed(0);
        result.innerHTML = `<p>🌍 CO2 Saved: <strong>${co2} kg</strong></p><p>🔥 Calories Burned: <strong>${calories} kcal</strong></p>`;
    }
}

// Newsletter
function subscribeNewsletter(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
}

// Counter animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
        });
    });
    document.querySelectorAll('.stat-number, .impact-number').forEach(el => observer.observe(el));
});

function animateCounter(el, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 30);
}

// Loading screen
window.addEventListener('load', () => {
    document.getElementById('loading-screen').classList.add('hidden');
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/gogreeninV2/v3/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker registration failed:', err));
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.textContent = '📱 Install App';
    installBtn.className = 'install-btn';
    installBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 12px 24px; background: var(--gradient); color: var(--dark); border: none; border-radius: 25px; font-weight: 600; cursor: pointer; z-index: 1000; box-shadow: 0 4px 12px rgba(0,255,136,0.3);';
    installBtn.onclick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
            installBtn.remove();
        }
    };
    document.body.appendChild(installBtn);
}

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
});
