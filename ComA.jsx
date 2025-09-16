import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ComA.module.css";

function ComA() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Arogya" && password === "Arogya") {
      navigate("/Profile");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        <h1 className={styles.title}>Arogya User</h1>
        <p className={styles.subtitle}>Login to your account to continue</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className={styles.button}
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <p className={styles.signupText}>
          Don’t have an account?{" "}
          <span
            className={styles.signupLink}
            onClick={() => navigate("/Signup")}
          >
            Sign Up now
          </span>
        </p>
      </div>
    </div>
  );
}

export default ComA;
