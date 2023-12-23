import React from "react";

interface Props {
  children: string;
  // color? means optional
  // color will only work below item
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

// color = "primary" means default color is primary
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
