# 🚀 DevStack

A modern and responsive web application where users can explore different technologies and build their own development stack.

## 🔗 Live Website

Add your live website link here.

---

## 📖 Project Description

DevStack is a technology exploration platform where users can browse different technologies and create their own development stack.

Users can add technologies to their stack, remove individual technologies, or remove all technologies at once.

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

---

## ✨ Features

### 1. Explore Technologies

Users can explore different technologies from multiple categories. Each technology card includes an icon, badge, name, description, category, difficulty level, rating, and an Add to Stack button.

### 2. Build Your Stack

Users can add technologies to the **Your Stack** section. The same technology cannot be added twice, and the button becomes disabled after adding a technology.

### 3. Manage Your Stack

Users can remove individual technologies using the ✕ button or remove all technologies at once using the **Remove All** button. Toast notifications are shown for different actions.

---

## 📱 Responsive Design

The website is fully responsive and works on:

- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript. It makes React code easier to write and understand.

---

## 2. What is the difference between props and state?

Props are used to pass data from a parent to a child component. State stores data that can change inside a component.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores and updates changing data. I used it to store the selected technologies in `selectedLanguages`.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used for side effects like fetching data. In this project, I used React `use()` and `Suspense` to load the JSON data instead.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify and update each item correctly.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in **Your Stack** to show an empty message when no technology is selected.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data and functions to a child through props. A child can call the received function to send an action or data back to the parent.
