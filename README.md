# Password Generator

A simple and customizable password generator built with React, Vite, and Tailwind CSS.

## Features

- **Adjustable Length**: Generate passwords from 6 to 100 characters using a range slider
- **Include Numbers**: Toggle to add numeric characters (0-9)
- **Include Special Characters**: Toggle to add special characters (!@#$%^&*()_+)
- **Copy to Clipboard**: One-click copy functionality with visual selection feedback
- **Real-time Generation**: Password automatically regenerates when settings change

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## React Hooks Used

- `useState` - Managing password, length, and toggle states
- `useCallback` - Memoizing the password generation function
- `useEffect` - Auto-regenerating password when dependencies change
- `useRef` - Referencing the password input for clipboard selection

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository or navigate to the project directory
cd 05passwordgenerator

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
05passwordgenerator/
├── src/
│   ├── App.jsx        # Main password generator component
│   ├── App.css        # Component styles
│   ├── main.jsx       # React entry point
│   ├── index.css      # Global styles
│   └── assets/        # Static assets
├── public/            # Public assets
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
└── eslint.config.js   # ESLint configuration
```

## Usage

1. Use the **range slider** to set your desired password length
2. Check **Numbers** to include digits in your password
3. Check **Character** to include special characters
4. Click **Copy** to copy the generated password to your clipboard

## License

This project is for educational purposes.
