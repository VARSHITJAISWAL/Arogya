import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nominees, setNominees] = useState([{ name: "", mobile: "", aadhaar: "" }]);

  const addNominee = () => {
    setNominees([...nominees, { name: "", mobile: "", aadhaar: "" }]);
  };

  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000); // ✅ 4-digit OTP
  };

  const handleOtp = (type) => {
    const otp = generateOtp();
    alert(`${type} OTP: ${otp}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("⚠️ Passwords do not match!");
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          📝 Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className={styles.label}>User Name</label>
            <input type="text" className={styles.input} required />
          </div>

          {/* Name Proof */}
          <div>
            <label className={styles.label}>Name Proof</label>
            <input type="file" className={styles.input} required />
          </div>

          {/* Mobile */}
          <div>
            <label className={styles.label}>Mobile Number</label>
            <div className="input-group flex gap-2">
              <input type="text" className={styles.input} placeholder="Mobile No" required />
              <button
                type="button"
                onClick={() => handleOtp("📱 Mobile")}
                className={styles.btn}
              >
                Send OTP
              </button>
            </div>
            <input type="text" className={styles.input} placeholder="Enter OTP" required />
          </div>

          {/* Aadhaar */}
          <div>
            <label className={styles.label}>Aadhaar Number</label>
            <div className="flex gap-2">
              <input type="text" className={styles.input} placeholder="Aadhaar No" required />
              <button
                type="button"
                onClick={() => handleOtp("🆔 Aadhaar")}
                className={styles.btn}
              >
                Send OTP
              </button>
            </div>
            <input type="text" className={styles.input} placeholder="Enter OTP" required />
          </div>

          {/* Profile Photo */}
          <div>
            <label className={styles.label}>Profile Photo</label>
            <input type="file" className={styles.input} required />
          </div>

          {/* Parents */}
          <div>
            <label className={styles.label}>Father Name & Proof</label>
            <input type="text" className={styles.input} placeholder="Father Name" required />
            <input type="file" className={styles.input} required />
          </div>
          <div>
            <label className={styles.label}>Mother Name & Proof</label>
            <input type="text" className={styles.input} placeholder="Mother Name" required />
            <input type="file" className={styles.input} required />
          </div>

          {/* Nominee */}
          <h4 className="text-lg font-semibold text-blue-700 mt-4">👥 Nominees</h4>
          {nominees.map((_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-blue-50 mb-3 shadow-sm">
              <input type="text" className={styles.input} placeholder="Nominee Name" required />
              <div className="flex gap-2 mt-2">
                <input type="text" className={styles.input} placeholder="Nominee Mobile" required />
                <button
                  type="button"
                  onClick={() => handleOtp("📱 Nominee Mobile")}
                  className={styles.btn}
                >
                  Send OTP
                </button>
              </div>
              <input type="text" className={styles.input} placeholder="Enter OTP" required />
              <div className="flex gap-2 mt-2">
                <input type="text" className={styles.input} placeholder="Nominee Aadhaar" required />
                <button
                  type="button"
                  onClick={() => handleOtp("🆔 Nominee Aadhaar")}
                  className={styles.btn}
                >
                  Send OTP
                </button>
              </div>
              <input type="text" className={styles.input} placeholder="Enter OTP" required />
            </div>
          ))}
          <button type="button" onClick={addNominee} className={`${styles.btn} w-full`}>
            + Add Another Nominee
          </button>

          {/* Address */}
          <div>
            <label className={styles.label}>Address Proof</label>
            <input type="file" className={styles.input} required />
          </div>

          {/* Password */}
          <div className="flex gap-2">
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

          {/* Register */}
          <button type="submit" className={`${styles.btn} w-full py-3 text-lg font-semibold`}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
