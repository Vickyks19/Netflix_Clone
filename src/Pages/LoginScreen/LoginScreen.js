import React, { useState } from "react";
import SingInScreen from "../SignInScreen/SignInScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button className="loginscreen__button" onClick={() => setSignIn(true)}>
          signIn
        </button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginscreen__body">
        {signIn ? (
          <SingInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginscreen__input">
              <form>
                <input type="Email" placeholder="Email address" />
                <button
                  className="loginscreen__get Started"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
