import React from "react";

interface ButtonProps {
  readonly content: string;
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonStyles: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: "2px solid transparent",
  textAlign: "center",
  display: "inline-block",
  backgroundColor: "#f44336",
  color: "white",
  borderColor: "#c62828",
};

const Button = ({ content, onClick }: ButtonProps) => {
  const handleHover = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;
    target.style.transform = "scale(1.05)";
    target.style.backgroundColor = "#d32f2f";
    target.style.borderColor = "#b71c1c";
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;
    target.style.transform = "scale(1)";
    target.style.backgroundColor = "#f44336";
    target.style.borderColor = "#c62828";
  };
  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
