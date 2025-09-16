import React, { useState } from "react";
import styles from "./Card.module.css";
import { FaHeart, FaUser, FaIdCard, FaMapMarkerAlt, FaCalendarAlt, FaTint, FaSignature, FaQrcode } from "react-icons/fa";

const Card = () => {
  const [isDonating, setIsDonating] = useState(false);

  const handleDonateToggle = () => {
    setIsDonating(!isDonating);
    console.log(`Donation status changed to: ${!isDonating}`);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        {/* Main Card */}
        <div className={styles.mainCard}>
          {/* Header */}
          <div className={styles.cardHeader}>
            <div className={styles.headerText}>AROGYA CARD</div>
          </div>

          <div className={styles.cardBody}>
            {/* LEFT SECTION (IMAGE + NAME) */}
            <div className={styles.leftSection}>
              <div className={styles.photoFrame}>
                <img
                  src="./ujjwal-removebg-preview.png"
                  alt="User"
                  className={styles.userImage}
                />
              </div>
              <h2 className={styles.userName}>Ujjwal Deshmusk</h2>
              <div className={styles.userIdContainer}>
                <FaIdCard className={styles.idIcon} />
                <p className={styles.userId}>ACIN20050603</p>
              </div>
            </div>

            {/* RIGHT SECTION (DETAILS) */}
            <div className={styles.rightSection}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <FaUser className={styles.detailIcon} />
                  <div>
                    <p className={styles.label}>Father's Name</p>
                    <p className={styles.value}>Dinesh Deshmukh</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <FaCalendarAlt className={styles.detailIcon} />
                  <div>
                    <p className={styles.label}>Date of Birth</p>
                    <p className={styles.value}>03 - 06 - 2005</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <FaUser className={styles.detailIcon} />
                  <div>
                    <p className={styles.label}>Mother's Name</p>
                    <p className={styles.value}>Devika Deshmukh</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <FaMapMarkerAlt className={styles.detailIcon} />
                  <div>
                    <p className={styles.label}>Address</p>
                    <p className={styles.value}>123 Anywhere st., Any city</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <FaTint className={styles.detailIcon} />
                  <div>
                    <p className={styles.label}>Blood Group</p>
                    <p className={styles.value}>B+</p>
                  </div>
                </div>
              </div>

              {/* QR & Signature section */}
              <div className={styles.qrSignatureSection}>
                <div className={styles.qrCodeContainer}>
                  <FaQrcode className={styles.qrIcon} />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                    alt="QR Code"
                    className={styles.qrCode}
                  />
                </div>
                <div className={styles.signatureContainer}>
                  <FaSignature className={styles.signatureIcon} />
                  <img
                    
                    alt="Signature"
                    className={styles.signature}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className={styles.toggleContainer}>
        <span className={styles.toggleLabel}>Willing to donate blood?</span>
        <button
          className={`${styles.toggleButton} ${isDonating ? styles.toggleOn : ""}`}
          onClick={handleDonateToggle}
        >
          <span className={styles.toggleSwitch}></span>
          {isDonating && <FaHeart className={styles.heartIcon} />}
        </button>
      </div>
    </div>
  );
};

export default Card;