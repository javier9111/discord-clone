import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import DiscordLogo from "./Images/Discord_LogoHD.png";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = (e) => {
    // do clever google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__log">
        <img src={DiscordLogo} alt="" />
      </div>

      <Button onClick={signIn}>Sing in</Button>
    </div>
  );
}

export default Login;
