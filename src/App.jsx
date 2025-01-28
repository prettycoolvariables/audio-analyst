import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/Welcomepage"; // Import WelcomePage
import LoginPage from "./Components/LoginPage/LoginPage"; // Import LoginPage
import Installations from "./Components/Installations/Installations"; 
import History from "./Components/History/History";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />  {/* Route for WelcomePage */}
                <Route path="/login" element={<LoginPage />} /> {/* Route for LoginPage */}
                <Route path="/installation" element={<Installations />} /> {/* Route for Installations */}
                <Route path="/history" element={<History />} />
                <Route path="/dashboard" element={<Dashboard />} />
                

                
            </Routes>
        </Router>
    );
}

export default App;