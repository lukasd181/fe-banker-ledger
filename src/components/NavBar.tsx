import React from "react";

const NavBar = () => {
  const navBarStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0px",
    left: "0px",
    zIndex: 1000,
    width: "100%",
    background: "linear-gradient(135deg, #3c3a3a, #595757)",
    padding: "16px 0",
    borderBottom: "2px solid #f6c731",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: "5px",
  };

  const headingStyle: React.CSSProperties = {
    color: "#fff",
    fontSize: "26px",
    // fontWeight: "700",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "2px",
    display: "flex",
    alignItems: "center",
    // textTransform: "uppercase",
    // textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "30px",
    marginRight: "10px",
    color: "#f6c731",
    transform: "rotate(20deg)",
  };

  return (
    <div style={navBarStyle}>
      <h2 style={headingStyle}>
        <span style={iconStyle}>♠</span>
        POKER BUDDY
      </h2>
    </div>
  );
};

export default NavBar;
