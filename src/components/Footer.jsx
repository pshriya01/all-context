import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div
      style={{
        border: "1px solid black",
        height: "30px",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      {isLoggedIn ? "Welcome User!" : "Please Log In!"}
    </div>
  );
};

export default Footer;
