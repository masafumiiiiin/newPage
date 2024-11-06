import React, { useEffect, useRef } from "react";
import "../styles/miniStyle.css";
import gaobieluIcon from "../../public/assets/sceneSwitch/gaobielu-icon.png";
import leftSwitch from "../../public/assets/sceneSwitch/leftSwitch-button2.png";
import rightSwitch from "../../public/assets/sceneSwitch/rightSwitch-button2.png";
import musicIcon from "../../public/assets/sceneSwitch/music-icon.png";
import settingIcon from "../../public/assets/sceneSwitch/setting-icon.png";
import headerBG from "../../public/assets/sceneSwitch/desert-title.png";
import checkButton from "../../public/assets/sceneSwitch/check-button.png";
// import Spline from "@splinetool/viewer";
import SplineScene from "./float-mini-Spline"; // 导入 SplineScene

const Element = () => {
  return (
    <div className="element">
      {/* 容纳所有内容的最外层容器 */}
      <div className="container1">
        {/* 场景切换标题 */}
        <Header />
        {/* Spline
        这里需要跳转！！！！！！！！！！！！ */}
        <img className="check-button" src={checkButton} alt="进入查看按钮" />
        <SplineScene />
        {/* 底部菜单栏 */}
        <Footer />
      </div>
    </div>
  );
};

{
  /* 场景切换标题
  这里需要跳转！！！！！！！！！！！！！ */
}
const Header = () => (
  <>
    <div className="header">
      <div className="header-top">
        {/* <div className="title">标题</div> */}
        <img className="left-button" src={leftSwitch} alt="左箭头" />
        <img className="headerBG" src={headerBG} alt="标题" />
        <img className="right-button" src={rightSwitch} alt="右箭头" />
      </div>
      <div className="sub-title">有4件事物于此埋葬</div>
    </div>
  </>
);

{
  /* 底部菜单栏
  这里需要跳转！！！！！！！！！！！！ */
}
const Footer = () => (
  <>
    <div className="footer">
      <img className="setting-icon" src={settingIcon} alt="设置按钮" />
      <img className="gaobielu-icon" src={gaobieluIcon} alt="告别录按钮" />
      <img className="music-icon" src={musicIcon} alt="音乐按钮" />
    </div>
  </>
);

export default Element;
