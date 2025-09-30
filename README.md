# 🎓 CollegeConnect

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.9.3-CA4245.svg)](https://reactrouter.com/)

A modern, responsive college dashboard built with React that allows users to explore colleges, manage favorites, and share reviews. This project provides an intuitive interface for students and parents to discover educational institutions based on various criteria.

## 🌟 Features

- **🏠 Home Page**: Welcome screen with navigation to explore colleges
- **🏫 Colleges Page**: Browse and filter colleges by:
  - Search by name
  - Location
  - Course type
  - Fee range (min/max)
  - Sort by fee (ascending/descending)
- **⭐ Favorites Management**: Add/remove colleges to/from favorites list
- **📝 Reviews System**: Submit reviews with star ratings and comments, view latest reviews
- **🚪 Logout Page**: Simple logout confirmation
- **📱 Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **⚡ Fast Loading**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.3
- **HTTP Client**: Axios 1.12.2
- **Linting**: ESLint with React hooks and refresh plugins
- **Development Tools**: PostCSS, Autoprefixer

## 📁 Project Structure

```
college-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CollegeCard/
│   │   │   ├── CollegeCard.css
│   │   │   └── CollegeCard.jsx
│   │   └── Navbar/
│   │       ├── Navbar.css
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── CollegesPage/
│   │   │   ├── CollegesPage.css
│   │   │   └── CollegesPage.jsx
│   │   ├── FavoritesPage/
│   │   │   ├── FavoritesPage.css
│   │   │   └── FavoritesPage.jsx
│   │   ├── HomePage/
│   │   │   ├── HomePage.css
│   │   │   └── HomePage.jsx
│   │   ├── LogoutPage/
│   │   │   ├── LogoutPage.css
│   │   │   └── LogoutPage.jsx
│   │   └── ReviewsPage/
│   │       ├── ReviewsPage.css
│   │       └── ReviewsPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.tsx
├── data/
│   ├── colleges.json
│   ├── favorites.json
│   └── reviews.json
├── api/
│   ├── colleges.js
│   ├── favorites.js
│   └── reviews.js
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── index.html
└── README.md
```

### Key Components & Pages

#### Pages
- **HomePage**: Landing page with welcome message and navigation button
- **CollegesPage**: Main page with college filtering and grid display
- **FavoritesPage**: Displays user's favorite colleges with remove functionality
- **ReviewsPage**: Form to submit reviews and list of latest reviews
- **LogoutPage**: Simple logout confirmation page

#### Components
- **Navbar**: Navigation bar with links to all pages
- **CollegeCard**: Reusable card component displaying college information (name, location, course, fee, rating) and favorite button

#### Data Files
- **colleges.json**: Contains college data (id, name, location, course, fee, rating)
- **favorites.json**: Array of favorite college IDs
- **reviews.json**: Array of review objects (id, collegeId, collegeName, rating, comment, author, date)

#### API Files
- **colleges.js**: API handler for college data (GET)
- **favorites.js**: API handler for favorites data (GET, POST, DELETE)
- **reviews.js**: API handler for reviews data (GET, POST)

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LEKKALAGANESH/college-dashboard.git
   cd college-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

## 📖 Usage

1. **Home**: Start from the home page and click "Get Started" to explore colleges.

2. **Browse Colleges**: Use the filters on the Colleges page to search and sort colleges by various criteria.

3. **Add Favorites**: Click the "⭐ Add to Favorites" button on any college card to save it to your favorites.

4. **View Favorites**: Navigate to the Favorites page to see your saved colleges and remove them if needed.

5. **Submit Reviews**: Go to the Reviews page, select a college, give a rating, and write a comment.

6. **View Reviews**: See the latest reviews submitted by users on the Reviews page.

## 🌐 Deployment

The application is deployed on Vercel and can be accessed at: [https://college-dashboard.vercel.app](https://college-dashboard.vercel.app)

## 📂 Repository

Find the source code on GitHub: [https://github.com/LEKKALAGANESH/college-dashboard](https://github.com/LEKKALAGANESH/college-dashboard)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📝 Additional Notes

- The application uses local JSON files for data storage, making it suitable for demonstration purposes.
- API files are included for potential backend integration.
- The app is built with modern React patterns including hooks and functional components.
- Responsive design ensures compatibility across devices.
- TypeScript provides type safety and better development experience.

---

Built with ❤️ using React and Vite
