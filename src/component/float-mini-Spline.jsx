import React, { useEffect, useState } from "react";

const SplineScene = () => {
  const [viewerHeight, setViewerHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      const titleElement = document.querySelector(".header");
      const footerElement = document.querySelector(".footer");

      if (titleElement && footerElement) {
        const titleBottom = titleElement.getBoundingClientRect().bottom;
        const footerTop = footerElement.getBoundingClientRect().top;
        const availableHeight = footerTop - titleBottom;

        setViewerHeight(availableHeight); // 设置视图高度
      }
    };

    // 初始化计算
    calculateHeight();

    // 在窗口大小改变时重新计算高度
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <div
      className="spline-viewer-container"
      style={{ height: viewerHeight }} // 动态设置高度
    >
      <spline-viewer
        className="spline-viewer"
        url="https://prod.spline.design/aEGxXjRUudHWFuT0/scene.splinecode"
        // url="https://prod.spline.design/qADmPowuKrjU74jv/scene.splinecode"
      ></spline-viewer>
    </div>
  );
};

export default SplineScene;
