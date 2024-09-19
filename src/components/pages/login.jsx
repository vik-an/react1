import React, { useState } from "react";
import styles from "./LoginForm.module.css"; // Import the CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (just an example)
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // You can add authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear form
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
