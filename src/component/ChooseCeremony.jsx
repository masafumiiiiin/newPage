import React from "react";
import laststepIcon from "../../public/assets/editContent/laststep-icon.png";
import exiteditIcon from "../../public/assets/editName/exitEdit-icon.png";
import beginceremonyButton from "../../public/assets/ChooseCeremony/beginCeremony-button.png";
import introductionCard1 from "../../public/assets/ChooseCeremony/introduction-card1.png";
import introductionCard2 from "../../public/assets/ChooseCeremony/introduction-card22.png";
import orderIcon4 from "../../public/assets/ChooseCeremony/order-icon4.png";
import "../styles/ChooseCeremony.css";
export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="div">
        <div className="text-wrapper">与ta的告别仪式</div>
        <div className="text-wrapper-2">纸船逐流</div>
        <div className="text-wrapper-3">左右滑动卡片切换场景</div>
        <div className="text-wrapper-4">选择你想为ta举行的葬礼形式</div>
        <div className="cards">
          <img
            className="introduction"
            alt="Introduction"
            src={introductionCard1}
          />
          <img
            className="introduction-card"
            alt="Introduction"
            src={introductionCard2}
          />
        </div>
        <img className="laststep-icon" alt="Laststep icon" src={laststepIcon} />
        <img className="order" alt="Order" src={orderIcon4} />
        <img className="exitedit-icon" alt="Exitedit icon" src={exiteditIcon} />
        <img
          className="beginceremony-button"
          alt="Beginceremony button"
          src={beginceremonyButton}
        />
      </div>
    </div>
  );
};
export default DivWrapper;
