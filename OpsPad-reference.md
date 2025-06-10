# OpsPad - Project Reference

--- --- ---

##1. 📁 File Structure

/OpsPad
|   .babelrc
|   .gitignore
|   babel.config.cjs
|   eslint.config.js
|   index.html
|   package-lock.json
|   package.json
|   README.md
|   structure.txt
|   vite.config.js
|   
+---b_end
|   |   app.js
|   |   
|   +---db
|   |       db.js
|   |       shift_notes_db.js
|   |       sites_db.js
|   |       tasks_db.js
|   |       users_db.js
|   |       
|   \---pets
|       +---controllers
|       |       notes.controllers.js
|       |       pets.controllers.js
|       |       tasks.controllers.js
|       |       
|       +---models
|       |       notes.models.js
|       |       pets.models.js
|       |       shiftNotes.models.js
|       |       tasks.models.js
|       |       
|       \---routes
|               notes.routes.js
|               pets.routes.js
|               pets.test.js
|               tasks.routes.js
|               
+
+---pets
+---public
|       vite.svg
|       
\---src
    |   App.css
    |   App.jsx
    |   main.jsx
    |   _index.css
    |   
    +---assets
    |       circle-user-solid.svg
    |       react.svg
    |       
    +---components
    |   |   FeatureCard.jsx
    |   |   Footer.jsx
    |   |   Hero.jsx
    |   |   navbar.css
    |   |   Navbar.jsx
    |   |   
    |   +---app_core
    |   |       AppFooter.jsx
    |   |       AppHeader.jsx
    |   |       
    |   +---dashboard
    |   |       DashboardFooter.jsx
    |   |       DashboardHeader.jsx
    |   |       OpenIssuesCard.jsx
    |   |       ShiftNotesCard.jsx
    |   |       TaskChecklistCard.jsx
    |   |       
    |   +---layouts
    |   |       AppLayout.jsx
    |   |       LandingLayout.jsx
    |   |       
    |   +---modals
    |   |       EditNoteModal.jsx
    |   |       NewNoteModal.jsx
    |   |       
    |   \---ui
    |           Badge.jsx
    |           Card.jsx
    |           
    \---pages
            AddPet.jsx
            DashboardPage.jsx
            EditPet.jsx
            LandingPage.jsx
            NewNotePage.jsx
            NotFoundPage.jsx
            OpenTheDayPage.jsx
            PetDetail.jsx
            PetList.jsx
            ShiftNotesPage.jsx
            TaskListPage.jsx




  ## 2. ⚙️ Tech Stack

- Frontend: React
- Styling: Vanilla CSS (mobile-first, iPad-prioritised)
- State Management: [e.g. useState / Context API / Zustand]
- Backend: [JSON server / Express (planned) / None yet]
- Data: [Currentlyu Local JSON / REST API endpoint / Placeholder. Will look to build SQL based (PostGres likely) when I've got basic understanding of functionality down]


## 3. 🧩 Key Components (Summary)

| Component        | Purpose                                      |
|------------------|----------------------------------------------|
| `DashboardPage`  | Central hub after login                      |
| `ShiftNotesCard` | Displays ongoing notes                       |
| `AddNoteModal`   | Popup modal to add a new note                |
| `FABButton`      | Floating Action Button to trigger modal      |
| `AppHeader`      | Top navbar with weather, logo, and site name |
| `BottomNavbar`   | Mobile nav at bottom                         |

---

## 4. 🎨 Design System

- **Palette:**
  - Primary: `#574b60` (English Violet)
  - Accent: `#3f334d` (Dark Violet)
  - Neutrals: `#c0c5c1` (Silver), `#f0e6df` (Beige)
  - Success: `#309689` (Teal-Green)
- **Typography:**
  - Main Font: `Inter`, fallback: `sans-serif`
- **Layout:**
  - Mobile-first
  - Optimised for iPad landscape
  - Responsive with Flexbox and media queries

---

## 5. 🐛 Current Issues / Open Questions

- [ ] Modal: Doesn't pass trimmed input text correctly
- [ ] Bottom navbar: Needs to switch between landing & app views
- [ ] Notes: Add timestamp and tag fields to each entry
- [ ] FAB: Needs "notch" styling on the container
- [ ] Weather API: Working, but want location auto-detected from browser

---

## 6. 🛣️ Roadmap / Next Steps

- [ ] Build proper backend using Express (Phase 2)
- [ ] Add user authentication
- [ ] Create ‘Open the Day’ and ‘Close the Day’ flows
- [ ] Structure data storage with clear models (e.g. notes, users, handovers)

---

## 7. ✅ Last Updated

**Date:** YYYY-MM-DD  
**By:** Greg Walsh  
**Changes:** [e.g. Added ShiftNotesCard.jsx and restructured App layout]


## 8. 🧠 Key Features & User Stories

### ✅ Features (Built or Planned)

| Feature                      | Status     | Notes                                               |
|------------------------------|------------|-----------------------------------------------------|
| "Open the Day" flow          | 🚧 Planned | Start-of-day confirmation + view yesterday’s notes  |
| Daily dashboard              | ✅ Done     | Shows date, site name, notes, weather               |
| Ongoing Shift Notes          | ✅ Done     | Add / view notes with tags                          |
| Add Note modal               | ✅ Done     | Triggered by FAB, saves note w/ timestamp & tag     |
| Weather API integration      | ✅ Done     | Displays current weather from browser location      |
| Tag system for notes         | 🛠 In Progress | Dropdown to assign type of note (e.g. incident)  |
| Floating Action Button (FAB) | ✅ Done     | Positioned in bottom bar with styling tweaks        |
| Note timestamping            | 🛠 In Progress | Auto timestamp when saving a note                 |
| Role-based views             | 🚧 Planned | Admin vs Manager vs Staff content                   |
| Bottom navigation bar        | ✅ Done     | Shows only inside the app                           |
| “Close the Day” handover     | 🚧 Planned | End-of-day checklist & handover to next user        |

---

### 👤 User Stories

#### 1. As a **manager**, I want to view all shift notes for today so I can monitor ongoing issues.

- ✅ **Acceptance Criteria:**
  - Notes display in chronological order
  - Only today's notes are shown
  - Tags are clearly visible

---

#### 2. As a **team member**, I want to add a quick note with a tag and timestamp, so I can log shift activity fast.

- ✅ Acceptance Criteria:
  - Note input is fast and mobile-friendly
  - Tag is selected before saving
  - Timestamp is automatically captured

---

#### 3. As a **user**, I want to “open the day” so that I acknowledge yesterday’s notes before beginning my shift.

- 🚧 Acceptance Criteria:
  - Requires user to view/acknowledge yesterday’s notes
  - Then navigates to today’s dashboard

---

#### 4. As a **manager**, I want to hand over at the end of day with a checklist, so the next shift is prepared.

- 🚧 Acceptance Criteria:
  - Checklist includes tasks, events, unresolved issues
  - Requires confirmation before “closing the day”

---

#### 5. As a **user**, I want to see today's weather and date on the dashboard, so I can plan accordingly.

- ✅ Acceptance Criteria:
  - Weather auto-loads via browser location
  - Fallback value if weather API fails

---

#### 6. As a **product owner**, I want to keep styling consistent and responsive across iPad and mobile so it feels polished.

- 🛠 Acceptance Criteria:
  - Layout adjusts between tablet and phone
  - Elements are touch-friendly and readable




