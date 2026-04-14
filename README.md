# 📦 Products API (Express.js + MVC)

## 🚀 Project Overview

This project is a simple **RESTful API** built using Express.js following the MVC (Model-View-Controller) architecture.
It performs CRUD (Create, Read, Update, Delete) operations on products using an in-memory array (no database).

---

## 🧱 Tech Stack

* Node.js
* Express.js
* Nodemon (for development)

---

## 📁 Folder Structure

```
my-app/
│── server.js
│── package.json
│── src/
│   ├── routes/
│   │   └── product.routes.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd my-app
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the server

```
npm run dev
```

👉 Server runs on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔹 Get All Products

* **GET** `/api/products`

### 🔹 Get Product by ID

* **GET** `/api/products/:id`

### 🔹 Create Product

* **POST** `/api/products`

**Request Body:**

```json
{
  "name": "Laptop",
  "price": 50000
}
```

---

### 🔹 Update Product

* **PUT** `/api/products/:id`

**Request Body:**

```json
{
  "name": "Updated Laptop",
  "price": 60000
}
```

---

### 🔹 Delete Product

* **DELETE** `/api/products/:id`

---

## 🔄 How It Works

1. Client sends request
2. Route receives request
3. Controller processes logic
4. Response is sent back as JSON

---

## ⚠️ Important Notes

* Data is stored in an **in-memory array**, so it resets when the server restarts.
* `express.json()` middleware is used to parse JSON request bodies.

---

## 🚀 Future Improvements

* Add MongoDB database
* Implement validation (Joi / express-validator)
* Add authentication (JWT)
* Use UUID for unique IDs

---

## 🎯 Learning Outcomes

* Built REST APIs using Express.js
* Understood MVC architecture
* Learned routing and middleware
* Handled HTTP requests & responses

---
