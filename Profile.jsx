import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
// Importing icons from a library like React-Icons (e.g., Font Awesome)
import { FaUser, FaMapMarkerAlt, FaHome, FaSearch } from "react-icons/fa";
import { FaCalendarAlt, FaTint, FaCampground, FaAmbulance, FaFileContract, FaHandHoldingHeart, FaFileMedical, FaFileAlt } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const cardData = [
    { title: "Appointment", path: "/appointment", icon: FaCalendarAlt },
    { title: "Blood Availability", path: "/blood-availability", icon: FaTint },
    { title: "Blood Camp", path: "/blood-camp", icon: FaCampground },
    { title: "Emergency", path: "/emergency", icon: FaAmbulance },
    { title: "Govt Schemes", path: "/govt-schemes", icon: FaFileContract },
    { title: "Organ Donation", path: "/organ-donation", icon: FaHandHoldingHeart },
    { title: "Reports & Prescriptions", path: "/reports-prescriptions", icon: FaFileMedical },
    { title: "Death Certificate", path: "/death-certificate", icon: FaFileAlt },
  ];

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>Arogya Portal</div>
          <div className={styles.searchBar}>
            <input type="text" className={styles.searchInput} placeholder="Search..." />
            <button className={styles.searchButton}>
              <FaSearch />
            </button>
          </div>
        </div>
        <div className={styles.headerIcons}>
          <button className={styles.iconButton} onClick={() => handleNavigation("/Card")}>
            <FaUser />
          </button>
          <button className={styles.iconButton} onClick={() => handleNavigation("/location")}>
            <FaMapMarkerAlt />
          </button>
          <button className={styles.iconButton} onClick={() => handleNavigation("/")}>
            <FaHome />
          </button>
        </div>
      </header>
      
      {/* CARDS WRAPPER */}
      <div className={styles.cardsWrapper}>
        {cardData.map((item, index) => (
          <div key={index} className={styles.cardContainer}>
            <div
              className={`${styles.card} ${styles[`card-${index + 1}`]}`}
              onClick={() => handleNavigation(item.path)}
            >
              <div className={styles.cardIcon}>
                <item.icon />
              </div>
              <p className={styles.cardTitle}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span onClick={() => handleNavigation("/privacy")}>Privacy policy</span>
        <span onClick={() => handleNavigation("/about")}>About us</span>
        <span onClick={() => handleNavigation("/contact")}>Contact</span>
      </footer>
    </div>
  );
};

export default Profile;