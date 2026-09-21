# Activity Points Management System

A React.js front-end application that helps a student view and manage
activity points earned through co-curricular, extra-curricular, technical,
professional, social and other approved activities. Built for a Web
Programming assignment. All data is read from local JSON files — there is
no backend server or database.

## Features

- **Login** – Student login validated against sample data in
  `src/data/students.json` (UID + password).
- **Dashboard** – Shows student name, UID, department, semester, total
  points earned, target points and remaining points.
- **Activity List** – Shows all activities with name, category, date,
  points claimed, points approved and status, with a category filter.
- **Add Activity** – Form to submit a new activity (title, category, date,
  description, points claimed). New activities are added with status
  "Pending".
- **Activity Categories** – Displays the available categories
  (technical/professional, sports, cultural, social service,
  entrepreneurship, leadership) with activity counts.
- **Student Profile** – Basic student info and an overall points summary.

## Tech Used

- React 18 (functional components, JSX, props)
- React Hooks: `useState`, `useEffect`, `useContext`
- React Router (`HashRouter`, used so routing works on GitHub Pages)
- Conditional rendering and controlled form handling
- Plain CSS (no UI framework)
- Vite as the build tool

## Project Structure

```
activity-points-app/
├── public/
├── src/
│   ├── components/       # Login, Dashboard, ActivityList, AddActivity,
│   │                      # Categories, Profile, Navbar, ProtectedRoute
│   ├── context/          # AppContext.jsx – shared login/activity state
│   ├── data/             # students.json, activities.json, categories.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Sample Login Credentials

| UID          | Password  |
|--------------|-----------|
| STU2023001   | pass123   |
| STU2023002   | pass456   |

## Running Locally

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this project to it.
2. In `vite.config.js`, set `base` to `/your-repo-name/`.
3. Install the deploy dependency (already listed in `package.json`) and
   build + deploy:
   ```
   npm install
   npm run build
   npm run deploy
   ```
4. In the repository settings on GitHub, under **Pages**, set the source
   to the `gh-pages` branch (this branch is created automatically by the
   deploy script).
5. Your app will be live at `https://your-username.github.io/your-repo-name/`.

## Notes

- This is a front-end-only project. Login and activity data are stored in
  JSON files inside `src/data/` and are read into memory when the app
  loads; there is no real backend or persistent database.
- The currently logged-in student is remembered using the browser's
  `localStorage` so a page refresh doesn't log the user out.
