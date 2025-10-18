<div align="center">
  <img src="public/logo.svg" alt="Life Goals Tracker Logo" width="200"/>
  <h1>🎯 Life Goals Tracker</h1>
  <p><strong>Transform your dreams into achievable milestones</strong></p>

  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-10.x-orange.svg)](https://firebase.google.com/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/23f3004176/life-goals-tracker/graphs/commit-activity)
  [![GitHub issues](https://img.shields.io/github/issues/23f3004176/life-goals-tracker)](https://github.com/23f3004176/life-goals-tracker/issues)
  [![GitHub stars](https://img.shields.io/github/stars/23f3004176/life-goals-tracker)](https://github.com/23f3004176/life-goals-tracker/stargazers)

  <p>
    <a href="#features">Features</a> •
    <a href="#demo">Demo</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#roadmap">Roadmap</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#license">License</a>
  </p>
</div>

---

## 📖 About

**Life Goals Tracker** is a comprehensive, modern web application designed to help you set, track, and achieve your personal and professional goals. Built with cutting-edge technologies, it offers an intuitive interface for managing your aspirations with powerful administrative capabilities.

Whether you're planning career milestones, fitness objectives, or personal development goals, Life Goals Tracker provides the structure and insights you need to stay on track and motivated.

## ✨ Features

### 🎯 Core Functionality
- **Goal Creation & Management** - Create, edit, and delete goals with detailed descriptions and deadlines
- **Progress Tracking** - Visual progress indicators and completion percentages
- **Category Organization** - Organize goals by life areas (Career, Health, Personal, Finance, etc.)
- **Milestone Tracking** - Break down large goals into manageable milestones
- **Priority Levels** - Set and sort goals by priority (High, Medium, Low)

### 👥 User Experience
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Firebase Authentication** - Secure user authentication with email/password and social login
- **Real-time Updates** - Instant synchronization across all your devices
- **Dark Mode Support** - Easy on the eyes during late-night planning sessions
- **Intuitive Dashboard** - Clean, modern UI with easy navigation

### 🔐 Admin Features
- **User Management Dashboard** - Comprehensive admin panel for user oversight
- **Analytics & Insights** - Track user engagement and goal completion rates
- **Role-based Access Control** - Secure permission system for different user roles
- **Activity Monitoring** - View user activity logs and system health

### 🚀 Technical Highlights
- Built with **React 18** for optimal performance
- **Firebase** backend for scalability and real-time data
- Modern **ES6+** JavaScript
- Responsive **CSS** with mobile-first approach
- **Progressive Web App (PWA)** capabilities

## 📸 Screenshots

<div align="center">
  <img src="public/og-image.png" alt="Life Goals Tracker Dashboard" width="800"/>
  <p><em>Dashboard view showing goal overview and progress tracking</em></p>
</div>

## 🎥 Demo

🌐 **Live Demo**: [View Demo](https://life-goals-tracker.vercel.app)

> 💡 **Quick Start**: Sign up with your email or use the guest demo account to explore all features

## 🛠️ Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**
- A **Firebase** account ([Create one free](https://firebase.google.com/))

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/23f3004176/life-goals-tracker.git
   cd life-goals-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

### 🐳 Docker Installation (Optional)

```bash
docker build -t life-goals-tracker .
docker run -p 3000:3000 life-goals-tracker
```

## 📚 Usage

### Creating Your First Goal

1. **Sign up** or log in to your account
2. Click the **"New Goal"** button on the dashboard
3. Fill in the goal details:
   - Title and description
   - Category and priority
   - Target completion date
   - Optional milestones
4. Click **"Save"** to create your goal

### Tracking Progress

- Update progress percentage as you work toward your goal
- Mark milestones as complete
- Add notes and reflections
- View analytics on your progress over time

### Admin Functions

For admin users:
- Access the admin dashboard from the navigation menu
- View all registered users
- Monitor system activity and goal completion statistics
- Manage user permissions and roles

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|----------|
| **React** | Frontend framework |
| **Firebase Authentication** | User authentication |
| **Firestore** | Real-time database |
| **Firebase Storage** | File storage |
| **React Router** | Navigation |
| **CSS3** | Styling |
| **Vercel** | Deployment |

## 📁 Project Structure

```
life-goals-tracker/
├── public/              # Public assets
│   ├── index.html       # Main HTML file
│   ├── logo.svg         # Application logo
│   ├── favicon.ico      # Favicon
│   └── og-image.png     # Open Graph image
├── src/                 # Source code
│   ├── components/      # React components
│   ├── services/        # Firebase services
│   ├── styles/          # CSS styles
│   └── utils/           # Utility functions
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
└── README.md            # This file
```

## 🗺️ Roadmap

### Version 1.1 (Current)
- [x] Core goal tracking functionality
- [x] Firebase authentication
- [x] Admin dashboard
- [x] Responsive design

### Version 1.2 (Next Release - Q4 2025)
- [ ] **Goal Templates** - Pre-built templates for common goals
- [ ] **Collaboration** - Share goals with friends or accountability partners
- [ ] **Notifications** - Email and push notifications for deadlines
- [ ] **Data Export** - Export your goals to PDF or CSV
- [ ] **Goal Visualization** - Charts and graphs for progress insights

### Version 2.0 (Future)
- [ ] **Mobile Apps** - Native iOS and Android applications
- [ ] **AI Suggestions** - Smart goal recommendations based on your history
- [ ] **Habit Tracking** - Integrate daily habit tracking with goals
- [ ] **Social Features** - Connect with others working on similar goals
- [ ] **Gamification** - Badges, streaks, and rewards system
- [ ] **Integration APIs** - Connect with calendar, fitness apps, etc.

[View full roadmap →](https://github.com/23f3004176/life-goals-tracker/projects)

## 📝 Changelog

### [1.1.0] - 2025-10-18

#### Added
- Professional README with comprehensive documentation
- Public folder with branding assets
- Open Graph meta tags for social sharing
- Responsive navigation improvements

#### Changed
- Enhanced UI/UX across all pages
- Improved Firebase configuration handling
- Updated dependencies to latest stable versions

#### Fixed
- Mobile menu responsiveness issues
- Authentication state persistence
- Minor styling inconsistencies

### [1.0.0] - 2025-09-15

#### Added
- Initial release
- Goal creation and management
- Firebase authentication
- Admin dashboard
- Responsive design

[View full changelog →](CHANGELOG.md)

## 🤝 Contributing

We love contributions! Whether it's bug reports, feature requests, or code contributions, all are welcome.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive in discussions

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed information.

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

### Our Standards

- **Be respectful** - Treat everyone with respect and kindness
- **Be inclusive** - Welcome diverse perspectives and experiences
- **Be collaborative** - Work together toward common goals
- **Be professional** - Maintain professional conduct in all interactions

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? We'd love to hear from you!

- **Bug Reports**: [Open an issue](https://github.com/23f3004176/life-goals-tracker/issues/new?template=bug_report.md)
- **Feature Requests**: [Submit a request](https://github.com/23f3004176/life-goals-tracker/issues/new?template=feature_request.md)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Life Goals Tracker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

## 👥 Authors & Acknowledgments

**Maintainer**: [@23f3004176](https://github.com/23f3004176)

### Special Thanks

- All contributors who have helped improve this project
- The React and Firebase teams for excellent documentation
- The open-source community for inspiration and support

## 💬 Support & Community

- **Documentation**: [Wiki](https://github.com/23f3004176/life-goals-tracker/wiki)
- **Issues**: [GitHub Issues](https://github.com/23f3004176/life-goals-tracker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/23f3004176/life-goals-tracker/discussions)

## 🌟 Show Your Support

If you find this project helpful, please consider:
- ⭐ **Starring** the repository
- 🐛 **Reporting bugs** or suggesting features
- 💻 **Contributing** code or documentation
- 📢 **Sharing** with others who might benefit

---

<div align="center">
  <p><strong>Made with ❤️ by developers, for dreamers</strong></p>
  <p>
    <a href="https://github.com/23f3004176/life-goals-tracker">GitHub</a> •
    <a href="https://life-goals-tracker.vercel.app">Live Demo</a> •
    <a href="https://github.com/23f3004176/life-goals-tracker/issues">Report Bug</a> •
    <a href="https://github.com/23f3004176/life-goals-tracker/issues">Request Feature</a>
  </p>
</div>
