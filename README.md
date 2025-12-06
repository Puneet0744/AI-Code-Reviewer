# 🔑 Codeify - AI-Powered Code Reviewer

<div align="center">

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/65d7a9c3-646a-44ec-933b-23dfe4c1c865" />


**A modern, AI-powered code review tool that provides expert-level feedback on your code**

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Gemini-2.0-4285F4?logo=google)](https://ai.google.dev/)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Features

- 🤖 **AI-Powered Reviews** - Get comprehensive code reviews powered by Google Gemini 2.0 Flash
- 🎨 **Modern Dark UI** - Beautiful, responsive dark-mode interface with smooth animations
- 💻 **Multi-Language Support** - Review code in 20+ programming languages
- 📝 **Monaco Editor** - Professional code editor with syntax highlighting
- 📊 **Detailed Analysis** - Receive quality ratings, bug detection, and improvement suggestions
- 🎯 **Best Practices** - Get recommendations for code optimization and advanced alternatives
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Smooth** - Optimized performance with modern React and Vite

## 🚀 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Google Gemini API key ([Get one here](https://ai.google.dev/))

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AI-Powered-Code-Reviewer.git
   cd AI-Powered-Code-Reviewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

1. **Select a Programming Language**
   - Choose from 20+ supported languages using the dropdown menu

2. **Write or Paste Your Code**
   - Use the Monaco Editor on the left panel to write or paste your code

3. **Review Your Code**
   - Click the "Review Code" button to get AI-powered feedback
   - Wait for the analysis (usually takes a few seconds)

4. **Review the Feedback**
   - Check the right panel for detailed analysis including:
     - Quality rating (Better, Good, Normal, or Bad)
     - Step-by-step code explanation
     - Bug detection and logical errors
     - Improvement suggestions and best practices
     - Solutions and recommendations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite 6** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Monaco Editor** - VS Code's editor component
- **Lucide React** - Beautiful icon library

### AI & APIs
- **Google Gemini 2.0 Flash** - AI model for code analysis
- **@google/genai** - Official Gemini API client

### UI Components
- **React Select** - Customizable select component
- **React Markdown** - Markdown rendering for AI responses
- **React Spinners** - Loading indicators

## 📁 Project Structure

```
AI-Powered-Code-Reviewer/
├── public/
│   └── favicon.svg          # Custom favicon
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Navigation component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md               # This file
```

## 🎨 Supported Languages

- JavaScript
- Python
- Java
- C#
- C++
- PHP
- Ruby
- Go
- Swift
- Kotlin
- TypeScript
- Rust
- Dart
- Scala
- Perl
- Haskell
- Elixir
- R
- MATLAB
- Bash

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### AI Code Review
- **Quality Assessment** - Get ratings on code quality
- **Bug Detection** - Identify potential bugs and logical errors
- **Best Practices** - Receive recommendations for code improvements
- **Code Explanation** - Understand what your code does step-by-step
- **Error Identification** - Find syntax and runtime errors
- **Solutions** - Get actionable recommendations to fix issues

### User Interface
- **Dark Mode First** - Optimized for dark theme with beautiful gradients
- **Smooth Animations** - Polished transitions and hover effects
- **Responsive Design** - Works on all screen sizes
- **Modern Typography** - Clean, readable text hierarchy
- **Accessible** - Keyboard navigation and focus states

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Google Gemini](https://ai.google.dev/) - For the powerful AI model
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - For the excellent code editor
- [Lucide](https://lucide.dev/) - For beautiful icons
- [Vite](https://vitejs.dev/) - For the amazing build tool

## 📧 Contact

If you have any questions or suggestions, please open an issue on GitHub.

---

<div align="center">

**Made with ❤️ using React**

⭐ Star this repo if you find it helpful!

</div>
