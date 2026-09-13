# 🚀 Dev Stack Builder

A modern, interactive web application designed to help developers explore, curate, and customize their own ideal development tech stack seamlessly.

---

## 📌 Project Overview
Dev Stack Builder is a simple and interactive single-page application where developers can explore various web technologies from different categories. Users can pick tools to build their own custom dev stack, view their selections in a live sidebar, prevent duplicate picks, and manage their stack with instant toast alerts.

---

## 🛠️ Technologies Used
- **Frontend Framework:** React (with TypeScript)
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Devicon CDN
- **Feedback & Notifications:** React-Toastify

---

## ✨ Key Features
1. **Interactive Stack Management:** Add or remove technologies dynamically to build your custom toolset in real-time.
2. **Duplicate Prevention & Alerts:** Prevents adding the same technology twice and provides clear feedback via custom toast alerts.
3. **Responsive Grid & Sticky Panel:** A 3-column responsive layout with a sticky sidebar that tracks your selected stack status at all times.

---

## 💡 React Concept Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like code directly inside JavaScript. It makes writing and understanding React UI code much easier and faster.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component, and they cannot be changed by the child (read-only). State is internal data managed within the component itself that can change over time based on user interactions.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets functional components store and update their own local data. In this project, it was used to store the list of technologies fetched from the JSON file (`technologies`) and to keep track of user-selected items (`myStack`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects like fetching data or setting timers. It was needed here to run the `loadTechnologies()` fetch request once right after the component mounted on the screen.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the unique `key` prop to identify which items have changed, been added, or been removed. It helps React update the Virtual DOM accurately and efficiently without re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it?
Conditional rendering means showing different UI elements based on certain conditions or state values. In this project, it was used to display the "No technology selected yet" empty message when `myStack.length === 0`, and the list of selected items when the stack was not empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down to a child using **props**. A child sends data back up to the parent by calling a **callback function** that was passed down to it from the parent as a prop.

---

## 📄 License
This project is open-source and available under the MIT License.
