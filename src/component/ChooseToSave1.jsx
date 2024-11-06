import React from "react";
import splitLine2 from "../../public/assets/editSave/split-line2.png";
import nosaveButton from "../../public/assets/editSave/noSave-button.png";
import saveButton from "../../public/assets/editSave/save-button.png";
import saveboxBackground from "../../public/assets/editSave/savebox-background.png";
import "../styles/ChooseToSave1.css";
export const Box = () => {
  return (
    <div className="box">
      <div className="chosetosave-box">
        <div className="overlap-group">
          <img
            className="savebox-background"
            alt="Savebox background"
            src={saveboxBackground}
          />
          <div className="question-text">保留此次编辑？</div>
          <img
            className="nosave-button"
            alt="Nosave button"
            src={nosaveButton}
          />
          <img className="save-button" alt="Save button" src={saveButton} />
          <img className="split" alt="Split" src={splitLine2} />
        </div>
      </div>
    </div>
  );
};
export default Box;
