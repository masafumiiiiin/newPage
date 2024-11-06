import React from "react";
import iconGroup from "../../public/assets/editPhoto/iconGroup.png";
import photouploadIcon from "../../public/assets/editPhoto/photoUpload-icon.png";
import laststepIcon from "../../public/assets/editContent/laststep-icon.png";
import exiteditIcon from "../../public/assets/editName/exitEdit-icon.png";
import nextstepIcon from "../../public/assets/editName/nextstep-icon.png";
import orderIcon2 from "../../public/assets/editPhoto/order-icon2.png";
import textBoard from "../../public/assets/editName/text-board.png";
import "../styles/EditPhoto.css";
export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="div">
        <img className="text-board" alt="Text board" src={textBoard} />
        <div className="taphoto-title">ta的影像</div>
        <div className="overlap-group">
          <div className="photo-text">请上传ta的图片/视频叭......</div>
          <div className="photo">*没有影像也可以选一个图标代替噢~</div>
          <div className="photo-board" />
          <img
            className="photoupload-icon"
            alt="Photoupload icon"
            src={photouploadIcon}
          />
          <img className="icon-group" alt="Icon group" src={iconGroup} />
        </div>
        <img className="exitedit-icon" alt="Exitedit icon" src={exiteditIcon} />
        <img className="order" alt="Order" src={orderIcon2} />
        <img className="laststep-icon" alt="Laststep icon" src={laststepIcon} />
        <img className="nextstep-icon" alt="Nextstep icon" src={nextstepIcon} />
      </div>
    </div>
  );
};
export default DivWrapper; //这一行记得加，首位呼应
