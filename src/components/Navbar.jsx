import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { toggleAuth, isLoggedIn } = useContext(AuthContext);
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "teal",
        alignContent: "center",
        paddingLeft: 10,
      }}
    >
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
