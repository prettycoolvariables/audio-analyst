import React from "react";
import { Link } from "react-router-dom";
import styles from "./History.module.css";
import bgImage from "../../assets/bg.png";

const History = () => {
    const incidentData = [
        {
            location: "Edappally",
            details: "2023-02-10, 08:15 AM - Collision at Edappally Junction; two cars involved, minor injuries.",
        },
        
        {
            location: "Kalamassery",
            details: "2024-03-15, 11:05 AM - Two-wheeler skid in Kalamassery; rider sustained fractures.",
        },
        
        {
            location: "Marine Drive",
            details: "2024-04-27, 09:20 PM - Pedestrian struck near Marine Drive; fatality reported.\n2024-06-01, 09:30 PM - Rear-end collision on Marine Drive; no injuries, traffic delayed.",
        },
        {
            location: "High Court Junction",
            details: "2024-02-18, 08:45 PM - Hit-and-run at High Court Junction; pedestrian critically injured.",
        },
        
        {
            location: "Thrippunithura",
            details: "2023-11-25, 02:10 PM - Car accident at Thrippunithura; minor injuries reported.",
        },
        {
            location: "Angamaly",
            details: "(No incidents reported)",
        },
    ];

    return (
        <div className={styles["history-page"]}>
            {/* Background and Overlay */}
            <div className={styles["background-overlay"]}>
                <img
                    className={styles["background-image"]}
                    alt="History Background"
                    src={bgImage}
                    onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.style.backgroundColor = "#000";
                    }}
                />
                <div className={styles["overlay"]} />
            </div>

            {/* Title */}
            <div className={styles["title-text"]}>HISTORY</div>

            {/* Navigation Bar */}
            <div className={styles["nav"]}>
                <Link to="/installations" className={styles["nav-item"]}>
                    INSTALLATIONS
                </Link>
                <Link to="/history" className={styles["nav-item"]}>
                    HISTORY
                </Link>
                <Link to="/dashboard" className={styles["nav-item"]}>
                    DASHBOARD
                </Link>
            </div>

            {/* Locations List */}
            <div className={styles["history"]}>
                {incidentData.map((incident, index) => (
                    <div key={index}>
                        <strong>{incident.location}</strong><br />
                        {incident.details}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
