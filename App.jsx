import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import SplashScreen from "./SplashScreen.jsx";
import ComA from "./ComA.jsx";
import ComB from "./ComB.jsx";
import ComC from "./ComC.jsx";
import ComD from "./ComD.jsx";
import ComE from "./ComE.jsx";
import Signup from "./Signup.jsx";
import Profile from "./Profile.jsx";
import Card from "./Card.jsx";
import Arogya from "./Arogya.jsx";
import Hsection from "./Hsection.jsx";
import Csection from "./Csection.jsx";
import Voice from "./Voice.jsx";

// This is the Home component, which is correctly placed within the Router context.
function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => navigate("/comA")}>
        User Section
      </button>
      <button className={styles.btn} onClick={() => navigate("/comB")}>
        Hospital Section
      </button>
      <button className={styles.btn} onClick={() => navigate("/comC")}>
        Ambulance <br />(On Process)
      </button>
      <button className={styles.btn} onClick={() => navigate("/comD")}>
        Emergency
        <br />(On Process)
      </button>
      <button className={styles.btn} onClick={() => navigate("/comE")}>
        Civics
      </button>
    </div>
  );
}

// MainApp is a wrapper component that correctly uses the useNavigate hook.
// It is a child of the <Router> in the main App component.
function MainApp() {
  const navigate = useNavigate();
  const [voiceCommand, setVoiceCommand] = useState(null);

  const handleVoiceCommand = (command) => {
    const lowerCommand = command.toLowerCase();
    console.log("Voice Command Received:", lowerCommand);

    if (lowerCommand.includes("user section")) {
      navigate("/comA");
    } else if (lowerCommand.includes("hospital section")) {
      navigate("/comB");
    } else if (lowerCommand.includes("ambulance")) {
      navigate("/comC");
    } else if (lowerCommand.includes("emergency")) {
      navigate("/comD");
    } else if (lowerCommand.includes("civics")) {
      navigate("/comE");
    } else if (lowerCommand.includes("go home") || lowerCommand.includes("home")) {
      navigate("/");
    } else if (lowerCommand.includes("card") || lowerCommand.includes("open card")) {
      navigate("/Card");
    } else if (lowerCommand.includes("arogya") || lowerCommand.includes("open arogya")) {
      navigate("/Arogya");
    } else if (lowerCommand.includes("login") || lowerCommand.includes("sign up")) {
      setVoiceCommand(lowerCommand);
      navigate("/profile");
    }
  };

  return (
    <>
      <Voice onCommand={handleVoiceCommand} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comA" element={<ComA />} />
        <Route path="/comB" element={<ComB />} />
        <Route path="/comC" element={<ComC />} />
        <Route path="/comD" element={<ComD />} />
        <Route path="/comE" element={<ComE />} />
        <Route path="/signup" element={<Signup voiceCommand={voiceCommand} />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Arogya" element={<Arogya />} />
        <Route path="/Hsection" element={<Hsection />} />
        <Route path="/Csection" element={<Csection />} />
      </Routes>
    </>
  );
}

// The root App component manages the splash screen and the Router.
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          {/* MainApp is a child of Router, allowing it to use useNavigate */}
          <MainApp />
        </Router>
      )}
    </>
  );
}

export default App;