const fs = require('fs');

const yearTemplates = {
  2011: { title: "Environmental Focus", theme: "Lake", cyclists: 80 },
  2012: { title: "Tree Plantation", theme: "Green", cyclists: 100 },
  2013: { title: "5 Years Strong", theme: "Anniversary", cyclists: 120 },
  2014: { title: "Community Outreach", theme: "Outreach", cyclists: 140 },
  2015: { title: "Sustainability Focus", theme: "Sustainable", cyclists: 160 },
  2016: { title: "Digital Presence", theme: "Digital", cyclists: 180 },
  2017: { title: "Milestone Year", theme: "Milestone", cyclists: 200 },
  2019: { title: "Recognition", theme: "Recognition", cyclists: 240 },
  2020: { title: "Pandemic Resilience", theme: "Resilience", cyclists: 120 },
  2021: { title: "Recovery & Growth", theme: "Recovery", cyclists: 180 },
  2022: { title: "Innovation", theme: "Innovation", cyclists: 220 }
};

function generateJSON(year, data) {
  const months = {};
  for (let m = 12; m >= 1; m--) {
    const monthKey = m.toString().padStart(2, '0');
    const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const rides = m === 8 ? 5 : (m === 7 ? 3 : 4);
    const cyclists = Math.floor(data.cyclists * (0.8 + Math.random() * 0.4));
    
    const events = [];
    for (let e = rides; e >= 1; e--) {
      events.push({
        name: `Event ${e} - ${data.theme} ${monthNames[m]}`,
        url: "",
        photos: [],
        description: ""
      });
    }
    
    months[monthKey] = {
      name: monthNames[m],
      rides: rides,
      cyclists: cyclists,
      events: events
    };
  }
  
  return {
    year: year,
    title: data.title,
    months: months
  };
}

Object.keys(yearTemplates).forEach(year => {
  const jsonData = generateJSON(parseInt(year), yearTemplates[year]);
  const jsonString = JSON.stringify(jsonData, null, 2);
  console.log(`Creating ${year}/events.json`);
  console.log(jsonString.substring(0, 200) + '...');
});