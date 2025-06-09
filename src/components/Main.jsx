import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div style={{ height: "85vh" }}>
      <h3>
        {isLoggedIn ? "You are logged in! 🎉" : "Please log in to continue."}
      </h3>
    </div>
  );
};

export default Main;
