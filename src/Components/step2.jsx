import { useState } from "react";

function Step2({ formData, handleChange, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Validation Rules
  const emailValid = /\S+@\S+\.\S+/.test(formData.email);
  const passwordValid = formData.password.length >= 8;
  const passwordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";

  const isFormValid = emailValid && passwordValid && passwordsMatch;

  return (
    <>
      <h2>Step 2: Account Details</h2>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {!emailValid && formData.email && (
        <p style={{ color: "red", fontSize: "12px" }}>
          Invalid email format
        </p>
      )}

      {/* Password */}
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password (min 8 characters)"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
            fontSize: "12px"
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </span>
      </div>

      {!passwordValid && formData.password && (
        <p style={{ color: "red", fontSize: "12px" }}>
          Password must be at least 8 characters
        </p>
      )}

      {/* Confirm Password */}
      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      {!passwordsMatch && formData.confirmPassword && (
        <p style={{ color: "red", fontSize: "12px" }}>
          Passwords do not match
        </p>
      )}

      <br />

      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep} disabled={!isFormValid}>
        Next
      </button>
    </>
  );
}

export default Step2;