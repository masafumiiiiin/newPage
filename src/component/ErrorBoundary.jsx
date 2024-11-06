import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // 这里可以添加错误日志上报逻辑
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>出错了，请稍后再试。</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
