# 🧠 Project Prompt – Multi-Step Registration Wizard

## 📌 Objective

Build a fully functional and stylish **Multi-Step Registration Form** with a dynamic progress bar using:

- HTML
- CSS
- Vanilla JavaScript

The form should guide users through multiple levels and visually indicate their progress.

---

## 🎯 Requirements

### 1️⃣ Multi-Step Form Structure

The form must contain **three levels**:

### 🔹 Level 1 – Personal Information
- Full Name
- Email Address
- Password

### 🔹 Level 2 – Address Information
- Address
- City
- Country

### 🔹 Level 3 – Confirmation
- Display entered data
- Submit button

Only one level should be visible at a time.

---

### 2️⃣ Navigation Controls

- Next button
- Previous button
- Submit button (on final step)
- Prevent skipping steps
- Basic input validation before proceeding

---

### 3️⃣ Progress Bar

- Must visually show current progress
- Should update dynamically when clicking:
  - Next
  - Previous
- Smooth animation required
- Active step indicator

Progress width formula:

```
(currentStep / totalSteps) * 100
```

---

### 4️⃣ Styling Requirements

- Modern card layout
- Rounded corners
- Soft shadows
- Responsive design
- Centered form on screen
- Smooth transitions between steps
- Clean and professional UI

---

### 5️⃣ JavaScript Logic

Your script must:

- Track current step
- Add/remove `active` class
- Control button visibility
- Validate inputs
- Update progress bar width dynamically

---

## 🛠 Technical Constraints

- No frameworks (No React, Vue, Bootstrap, etc.)
- Pure HTML, CSS, JavaScript
- Code must be clean and readable
- Organized into separate files:
  - index.html
  - style.css
  - script.js

---

## ⭐ Bonus (Optional Enhancements)

- Add step indicators (1, 2, 3 circles)
- Animate transitions
- Show error messages
- Add success message after submission
- Add dark mode toggle

---

## 🧩 Expected Outcome

A professional-looking, fully functional multi-step registration wizard with:

- Clean UI
- Working navigation
- Animated progress bar
- Responsive design
- Proper validation

---

## 📦 Deliverables

- Source code files
- README.md
- prompt.md
- Screenshot or GIF preview (optional)

---

## 🚀 Goal

Create a production-ready multi-step form that demonstrates:

- DOM manipulation
- Event handling
- UI/UX design skills
- Clean code structure
- Basic front-end engineering practices

---

Happy Coding 💻✨
