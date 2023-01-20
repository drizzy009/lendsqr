import React, { useState } from "react";
import styles from "../Onboarding/LoginPage.module.css";
import lendsqr_logo from "./assets/Group.svg";
import login_creative from "./assets/pablo.svg";

const LoginPage = (onLogin: (arg0: string, arg1: string) => void) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  // const handleEmailChange = (e: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setPassword(e.target.value);
  // };

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.col_1}>
          <img src={lendsqr_logo} alt="lendsqr logo" />
          <img src={login_creative} alt="creative" />
        </div>
        <div>
          <h2>Welcome</h2>
          <p>Enter details to login.</p>

          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
function setUser(user: any) {
  throw new Error("Function not implemented.");
}
