import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/bg.png";
import styles from "./Installations.module.css";

export const Installations = () => {
    return (
        <div className={styles["installations-page"]}>
            {/* Background and Overlay */}
            <div className={styles["background-overlay"]}>
                <img
                    className={styles["background-image"]}
                    alt="Background"
                    src={bgImage}
                    onError={(e) => {
                        e.target.style.display = "none"; // Hide the image if it fails to load
                        e.target.parentElement.style.backgroundColor = "#000"; // Black fallback
                    }}
                />
                <div className={styles["overlay"]} />
            </div>

            {/* Title */}
            <div className={styles["title-text"]}>INSTALLATIONS</div>

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
            <div className={styles["locations"]}>
                Edappally<br />
                Vyttila<br />
                Kalamassery<br />
                Aluva<br />
                Kakkanad<br />
                Marine Drive<br />
                High Court Junction<br />
                Palarivattom<br />
                Thrippunithura<br />
                Angamaly
            </div>
        </div>
    );
};

export default Installations;
