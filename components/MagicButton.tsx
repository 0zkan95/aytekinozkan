import React from "react";
import './styles/MagicButton.scss';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      className="MagicButton"
      onClick={handleClick}
    >
      <span id="button-span" />


      <span id="inner-span">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
