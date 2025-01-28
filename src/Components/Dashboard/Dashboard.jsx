import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import bgImage from "../../assets/bg.png";

const Dashboard = () => {
    return (
        <div className={styles.dashboardPage}>
            <div className={styles.backgroundOverlay}>
                <img
                    className={styles.backgroundImage}
                    alt="Background"
                    src={bgImage}
                />
                <div className={styles.overlay} />

                <div className={styles.navigation}>
                    <Link to="/installations" className={styles.navItem}>
                        INSTALLATIONS
                    </Link>
                    <Link to="/history" className={styles.navItem}>
                        HISTORY
                    </Link>
                    <Link to="/dashboard" className={styles.navItem}>
                        DASHBOARD
                    </Link>
                </div>

                <div className={styles.content}>
                    <h1 className={styles.title}>Dashboard</h1>
                    <p className={styles.text}>
                        Dashboard details will appear here.
                        Map details.
                        

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
