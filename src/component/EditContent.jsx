import React from "react";
import laststepIcon from "../../public/assets/editContent/laststep-icon.png";
import exiteditIcon from "../../public/assets/editName/exitEdit-icon.png";
import nextstepIcon from "../../public/assets/editName/nextstep-icon.png";
import orderIcon3 from "../../public/assets/editContent/order-icon3.png";
import textBoard from "../../public/assets/editName/text-board.png";
import "../styles/EditContent.css";
export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="div">
        <img className="text-board" alt="Text board" src={textBoard} />
        <div className="feeling-title">话与情</div>
        <div className="overlap-group">
          <div className="feeling-text">
            请写下你想说的和ta有关的任何话叭.........
          </div>
        </div>
        <img className="nextstep-icon" alt="Nextstep icon" src={nextstepIcon} />
        <img className="exitedit-icon" alt="Exitedit icon" src={exiteditIcon} />
        <img className="order" alt="Order" src={orderIcon3} />
        <img className="laststep-icon" alt="Laststep icon" src={laststepIcon} />
      </div>
    </div>
  );
};
export default DivWrapper; //这一行记得加，首位呼应
