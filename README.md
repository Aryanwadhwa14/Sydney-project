# Sydney Events Aggregator

A dynamic web application that automatically lists upcoming events happening in **Sydney, Australia**. The project uses a Python-based scraper to gather data from public event websites and displays it via a responsive frontend built with TypeScript. Users can view event details, and when they click "Get Tickets," they are prompted for their email before being redirected to the official event page.

---

## Features

- ✅ Automated real-time event data collection via web scraping.
- 🖼️ Neatly presented event cards with title, date, and a ticket link.
- 📧 Collects user email before redirecting to the ticketing platform.
- ⚡ TypeScript-enhanced frontend for dynamic interaction.
- 🎯 Built for simplicity, responsiveness, and automation.

---

## Technologies Used

- **Backend**: Python, Requests, BeautifulSoup
- **Frontend**: TypeScript, HTML, CSS (Tailwind)
- **Bundler**: Vite
- **Data Handling**: JSON
- **Version Control**: Git & GitHub

---

## Project Structure
-Sydney-project/
-├── backend/
-│   ├── scraper.py       # Python scraper script
-│   └── events.json      # Stores latest scraped events
-│
-├── frontend/
-│   ├── index.html       # Main HTML structure
-│   ├── style.css        # Tailwind CSS styles
-│   ├── script.ts        # TypeScript logic
-│   └── script.js        # Generated JS from TS
-│
-├── package.json         # Node.js project configuration
-├── tsconfig.json        # TypeScript configuration
-└── vite.config.ts       # Vite build configuration



---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Aryanwadhwa14/Sydney-project.git
cd Sydney-project
