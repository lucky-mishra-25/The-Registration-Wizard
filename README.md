# Multi-Step Registration Wizard (React)

A simple multi-step registration form built using React with a dynamic progress bar and step navigation.

---

## Features

- Multi-step form
- Progress bar
- React Hooks (useState)
- Form validation
- Responsive design
- Clean and minimal UI

---

## Tech Stack

- React
- JavaScript (ES6+)
- CSS

---

## Project Structure

```
src/
│
├── components/
│   ├── StepOne.jsx
│   ├── StepTwo.jsx
│   ├── StepThree.jsx
│   └── ProgressBar.jsx
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

## How It Works

- `useState` manages:
  - Current step
  - Form data
- Components render conditionally based on the current step.
- The progress bar updates dynamically as the user navigates.

Example:

```js
const [step, setStep] = useState(1);

const nextStep = () => {
  setStep(step + 1);
};
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/registration-wizard.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

If using Vite:
```bash
npm run dev
```

If using Create React App:
```bash
npm start
```

---

## Deployment

You can deploy using:

- Vercel
- Netlify
- GitHub Pages

---

## License

MIT License

---

## Author

Lucky Mishra
GitHub: [https://github.com/your-username](https://github.com/lucky-mishra-25/The-Registration-Wizard.git)
