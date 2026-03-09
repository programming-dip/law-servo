# ⚖️ Lawyer Appointment Booking Application

A high-performance, React-based web application for browsing legal professionals and managing appointments. This project features dynamic routing, real-time data visualization, and persistent state management, built as part of a developer assessment.

## 🚀 Live Demo
[**Live Link Here**]

---

## ✨ Features

### 🏠 Homepage & Navigation
* **Dynamic Banner:** High-impact hero section with a center-aligned layout and background-integrated UI.
* **Lawyer Directory:** A responsive 3x2 grid showcasing specialized lawyers with detailed info cards.
* **Success Metrics:** Interactive "Success Section" featuring **Counting Animations** (`react-countup`) to visualize firm achievements.
* **Persistent Layout:** Consistent Navbar across all routes. The Footer intelligently hides on error pages to maintain a clean UX.

### 👨‍⚖️ Lawyer Details & Booking Logic
* **Availability Validation:** Logic to check if a lawyer is available on the current day; displays "Unavailable" badges where applicable.
* **Smart Booking:** Prevents duplicate bookings with automated validation and success/error toast notifications.
* **Dynamic SEO:** Page titles update dynamically based on the current route or lawyer's name using `useLocation()` without third-party packages.

### 📅 Appointment Management
* **Data Persistence:** Bookings are saved to `localStorage`, ensuring your appointments remain even after a page reload.
* **Management Dashboard:** View all appointments in a clean, single-column layout with real-time cancellation functionality.
* **Data Visualization:** **Recharts** integration that provides a visual breakdown of appointment fees. The chart updates dynamically as appointments are added or removed.

### 📚 Knowledge Base (Blog)
A custom-designed blog section covering essential React concepts:
* `useState` & `useEffect` deep dives.
* The power and use cases of **Custom Hooks**.
* **Controlled vs. Uncontrolled components**: Which is better?
* Exploring the new `useFormStatus()` hook in React.

### 🛠 Technical Excellence
* **404 Custom Error Page:** Branded error handling for invalid routes.
* **Loading States:** Smooth loading animations triggered on every route change and data fetch.
* **Robust Routing:** Handles invalid dynamic IDs (e.g., `/lawyerDetails/invalid-id`) gracefully.

---

## 🛠 Tech Stack

* **Frontend:** React.js
* **Routing:** React Router DOM
* **Charts:** Recharts
* **Animations:** React CountUp
* **State Management:** LocalStorage
* **Styling:** Tailwind CSS, DaisyUI

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/lawyer-booking-app.git](https://github.com/your-username/lawyer-booking-app.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

