import React from "react";
import "../styles/LoginStyle.css"; // 引入样式文件
import loginBackground from "../../public/assets/login/login-background.png";
import loginButton from "../../public/assets/login/login-button.png";
import logo from "../../public/assets/login/logo.png";
import qq from "../../public/assets/login/qq.png";
import weibo from "../../public/assets/login/weibo.png";
import weixin from "../../public/assets/login/weixin.png";
import line from "../../public/assets/login/line.png";
import textBackground from "../../public/assets/login/text-background.png";
import { useNavigate } from "react-router-dom";

// Login组件的主结构
const Newcount = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    // 登录逻辑
    console.log("登录按钮被点击");
    navigate("/Scene1");
    // 这里可以添加登录的逻辑，例如验证用户输入等
  };
  return (
    <div className="screen">
      {/* 背景文字“告别” */}
      <Label />

      {/* 容纳所有内容的最外层容器 */}
      <div className="overlap-wrapper">
        <div className="overlap">
          {/* 背景图和Logo */}
          <Background />
          {/* Slogan和欢迎文本 */}
          <Header />
          {/* 输入框容器 */}
          <InputContainer onLogin={handleLogin} />
          {/* 用户协议与社交图标 */}
          <Footer />
        </div>
      </div>
      {/* 添加一个按钮用于跳转 */}
    </div>
  );
};

// 背景文字部分的组件
const Label = () => (
  <div className="label">
    <div className="gaobie">告别</div>
  </div>
);

// 背景图和Logo部分的组件
const Background = () => (
  <>
    <img className="login-background" src={loginBackground} alt="背景" />
    <img className="logo" src={logo} alt="Logo" />
  </>
);

// Slogan和欢迎文本部分的组件
const Header = () => (
  <div>
    <div className="slogan">这是一句slogan</div>
    <div className="welcome">欢迎注册</div>
  </div>
);

// 输入框和按钮部分的组件
const InputContainer = ({ onLogin }) => (
  <div className="view">
    <img className="text-background" src={textBackground} alt="输入背景" />
    {/* 手机号输入框 */}
    <input
      type="text"
      className="input-phonenumber"
      placeholder="请输入用户名"
    />
    <img className="line" src={line} alt="分割线" />
    {/* 密码输入框 */}
    <input
      type="password"
      className="input-password"
      placeholder="请输入密码"
    />
    <img className="line" src={line} alt="分割线" />
    {/* 登录按钮 */}
    <img
      className="login-button"
      src={loginButton}
      alt="注册按钮"
      onClick={onLogin}
    />
    {/* 注册链接 */}
    <div className="signup">登录</div>
    <button />
    {/* 逛逛和忘记密码链接 */}
    <div className="linkword">
      <span className="guangguang">我先逛逛</span>
      <span className="forgetpassword">忘记密码？</span>
    </div>
  </div>
);

// 页脚部分，包括用户协议和社交图标
const Footer = () => (
  <>
    {/* 用户协议提示 */}
    <p className="p">
      <span className="span">登录即代表已阅读并同意</span>
      <span className="xieyi">《用户协议》</span>
    </p>
    {/* 社交平台图标 */}
    <div className="otherapp">
      <img className="qq" src={qq} alt="QQ" />
      <img className="weibo" src={weibo} alt="微博" />
      <img className="weixin" src={weixin} alt="微信" />
    </div>
  </>
);

export default Newcount;
