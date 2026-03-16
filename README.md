# 🚀 AI Satellite Error Prediction & Monitoring System

An **AI/ML based system to predict satellite clock and ephemeris errors** using machine learning.
The project includes a **real-time monitoring dashboard** built with **FastAPI (backend)** and **React.js (frontend)** to visualize satellite error trends and detect anomalies.

---

# 📌 Project Overview

Satellite navigation systems depend on accurate **satellite clock and ephemeris parameters**.
Small deviations can lead to **navigation errors**.

This project builds an **AI-based prediction system** that:

* Predicts satellite clock errors
* Detects abnormal satellite behavior
* Visualizes satellite error trends
* Allows dataset testing through CSV upload
* Provides a monitoring dashboard for satellite health

---

# ⚙️ Tech Stack

### Frontend

* React.js
* Recharts (for graphs)
* Axios (API communication)

### Backend

* FastAPI
* Python
* Pandas
* Joblib

### Machine Learning

* Scikit-learn
* Satellite error dataset

---

# 📊 Features

✔ Satellite clock error prediction using AI/ML
✔ CSV dataset testing for bulk predictions
✔ Real-time satellite error trend visualization
✔ Satellite health monitoring dashboard
✔ Dark theme monitoring interface
✔ Interactive graphs for error analysis

---

# 🛰 System Architecture

```
User (React Dashboard)
        │
        ▼
FastAPI Backend (API)
        │
        ▼
Machine Learning Model
        │
        ▼
Satellite Error Prediction
        │
        ▼
Graph & Dashboard Visualization
```

---

# 📂 Project Structure

```
satellite-error-prediction-ai

backend
│
├── main.py
├── satellite_model.pkl
├── dataset
│   └── clean_satellite_data.csv
└── requirements.txt

frontend
│
├── src
│   ├── components
│   │   ├── PredictionForm.jsx
│   │   ├── ErrorGraph.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── OrbitAnimation.jsx
│   │
│   ├── App.js
│   └── App.css
```

---

# 🚀 Installation Guide

## 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/satellite-error-prediction-ai.git
```

```
cd satellite-error-prediction-ai
```

---

# 2️⃣ Backend Setup

```
cd backend
```

Install dependencies:

```
pip install -r requirements.txt
```

Run backend:

```
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

# 3️⃣ Frontend Setup

```
cd frontend
```

Install dependencies:

```
npm install
```

Run frontend:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 📈 Dashboard Features

The dashboard provides:

* Satellite error prediction
* CSV dataset testing
* Error trend visualization
* Satellite health monitoring
* Interactive UI

---

# 🧠 Machine Learning Model

The model predicts **satellite clock errors** using parameters such as:

* X-axis error
* Y-axis error
* Z-axis error

Output:

```
Predicted Satellite Clock Error
System Health Status
```

---

# 🎯 Future Improvements

* Real-time satellite monitoring
* Satellite anomaly detection
* Time-series prediction for future errors
* 3D satellite orbit visualization

---


---

# 👨‍💻 Author

Vinit Chaubey

---

# ⭐ If you like this project

Give this repository a **star ⭐ on GitHub**.

