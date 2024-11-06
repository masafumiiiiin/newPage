import React from "react";
import nextstepIcon from "../../public/assets/editName/nextstep-icon.png";
import exiteditIcon from "../../public/assets/editName/exitEdit-icon.png";
import orderIcon from "../../public/assets/editName/order-icon.png";
import textBoard from "../../public/assets/editName/text-board.png";
import "../styles/EditName.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="div">
        <img className="text-board" alt="Text board" src={textBoard} />
        <div className="taname-title">ta的名</div>
        <div className="overlap-group">
          <div className="name-text">请为ta取一个名字叭......</div>
        </div>
        <img className="exitedit-icon" alt="Exitedit icon" src={exiteditIcon} />
        <img className="nextstep-icon" alt="Nextstep icon" src={nextstepIcon} />
        <img className="order-icon" alt="Order icon" src={orderIcon} />
      </div>
    </div>
  );
};

export default DivWrapper; //这一行记得加，首位呼应
