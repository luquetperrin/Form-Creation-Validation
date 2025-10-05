# 🧠 Deep Dive into JavaScript

Welcome to the **Deep Dive into JavaScript** project!  
In this project, you will build multiple JavaScript mini-applications to strengthen your understanding of **form validation**, **DOM manipulation**, and **asynchronous JavaScript**.

---

## 📚 Learning Objectives

By the end of this project, you should be able to:

- ✅ Validate form inputs using JavaScript  
- ✅ Manipulate HTML elements dynamically using the DOM  
- ✅ Fetch and display data asynchronously from a public API  
- ✅ Handle errors and provide real-time feedback to users  
- ✅ Store data persistently using local storage  

---

## 🧩 Tasks Overview

### 0. Form Creation and Validation
**Repository:** `Form-Creation-Validation`  
**Files:** `index.html`, `style.css`, `script.js`

#### 🎯 Objective:
Create a **user registration form** with JavaScript validation.

#### 🧱 Requirements:
- Validate username (must be at least 3 characters)
- Validate email (must contain “@” and “.”)
- Validate password (must be at least 8 characters)
- Show success or error messages dynamically
- Use `DOMContentLoaded` event listener to ensure the script runs after the page loads

---

### 1. Simple Interactive Quiz
**Repository:** `ALX_Simple_Quiz`  
**Files:** `index.html`, `styles.css`, `quiz.js`

#### 🎯 Objective:
Implement a **quiz application** that checks the user’s answer and displays feedback.

#### 🧱 Requirements:
- Question: “What is 2 + 2?”
- Possible answers: 4, 22, 3
- Display “Correct! Well done.” or “That's incorrect. Try again!”
- Add an event listener to handle the “Submit Answer” button click
- Function: `checkAnswer()`

---

### 2. Build a Simple Calculator
**Repository:** `ALX_Simple_Quiz`  
**Files:** `calculator.html`, `calculator.css`, `calculator.js`

#### 🎯 Objective:
Create a **simple calculator** to perform basic arithmetic operations.

#### 🧱 Requirements:
- Operations: Addition, Subtraction, Multiplication, Division
- Each operation must have its own function (`add`, `subtract`, `multiply`, `divide`)
- Use `parseFloat()` to handle input values correctly
- Display results dynamically in the web page
- Handle empty input fields safely

---

### 3. Fetching Data from an API
**Repository:** `Form-Creation-Validation`  
**Files:** `fetch-data.html`, `fetch-data.css`, `fetch-data.js`

#### 🎯 Objective:
Fetch and display data from a public API using JavaScript.

#### 🧱 Requirements:
- API URL: `https://jsonplaceholder.typicode.com/users`
- Fetch data asynchronously using the Fetch API
- Display each user’s name in a list
- Handle fetch errors gracefully
- Use `DOMContentLoaded` to trigger the data fetching

---

## 🧰 Technologies Used

- **HTML5** – for structure  
- **CSS3** – for design and layout  
- **JavaScript (ES6)** – for interactivity and functionality  
- **Fetch API** – for retrieving external data  

---

## 🗂️ Folder Structure

Form-Creation-Validation/
│
├── index.html
├── style.css
├── script.js
├── fetch-data.html
├── fetch-data.css
└── fetch-data.js

ALX_Simple_Quiz/
│
├── index.html
├── styles.css
├── quiz.js
├── calculator.html
├── calculator.css
└── calculator.js

## 🚀 How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/luquetperrin/Form-Creation-Validation
