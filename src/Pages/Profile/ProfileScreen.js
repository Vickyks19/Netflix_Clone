import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import { selectUser } from "../../features/userSlice";
import "./ProfileScreen.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://lucid-benz-6af4ca.netlify.app/netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__detils">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button className="profileScreen__signOut" onClick={logout}>
                Sign out
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
