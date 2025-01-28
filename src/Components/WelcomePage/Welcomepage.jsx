// src/components/WelcomePage/WelcomePage.js

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import bgImage from "../../assets/bg.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Welcomepage.module.css";

const WelcomePage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    return (
        <div className={styles.welcome}>
            <div className={styles.overlapGroupWrapper}>
                <div className={styles.overlapGroup}>
                    <img
                        className={styles.pikasoEditCandid}
                        alt="Pikaso edit candid"
                        src={bgImage}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className={styles.rectangle} />
                    <div className={styles.frame}>
                        <select
                            className={styles.language}
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                        <div className={styles.iconWrapper}>
                            <IoIosArrowDown className={styles.icon} />
                        </div>
                        <Link to="/login" className={styles.textWrapper2}>Log in</Link> {/* Link to login page */}
                    </div>
                    <p className={styles.welcomeTo}>
                        <span className={styles.span}>WELCOME TO</span>
                        <span className={styles.textWrapper3}> SOUNDTRACE</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;