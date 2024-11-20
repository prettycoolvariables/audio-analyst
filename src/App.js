// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/WelcomePage"; // Import WelcomePage
import LoginPage from "./Components/LoginPage/LoginPage"; // Import LoginPage

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />  {/* Route for WelcomePage */}
                <Route path="/login" element={<LoginPage />} /> {/* Route for LoginPage */}
            </Routes>
        </Router>
    );
}

export default App;
