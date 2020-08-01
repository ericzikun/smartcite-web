import React from "react";
import logo from "./logo.svg";
import "./assets/css/index.css";
import Home from "./components/Home";

import Result from "./components/Result";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { QqOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <div className="page-wrap">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Link to="/Result">Result</Link>
            </Menu.Item> */}
            <Menu.Item key="3">
              <a href={require("./assets/downloadTest.zip")} download>
                Download Test Case
              </a>
            </Menu.Item>
          </Menu>
        </Header>
        <div className="page-content">
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route path="/result">
            {" "}
            <Result />
          </Route>
        </div>
        <Footer className="page-footer">
          <div className="footer-content">
            <div className="footer-item one">
              <p className="footer-logo">SmartCiteCon</p>
              <div>
                {/* 语义相关的引文上下文抽取工具 */}
                <p>
                  Semantically relevant citation context extraction tools
                  <br />
                  The user can complete the extraction of all semantically
                  relevant citation contexts in SmartCiteCon, including explicit
                  and implicit contexts
                  <br />
                  Integrated Grobid tool that allows users to process pdf or xml
                  files
                </p>
                {/* 用户可以在
              smartcite中完成对引文的显式上下文,隐式上下文等所有语义相关的引文上下文的抽取 */}
                {/* <p>
            
            </p> */}
                {/* 集成Grobid工具,用户可以对pdf格式或者xml文件进行相关处理 */}
                {/* <p>
            </p> */}
              </div>
            </div>
            <div className="footer-item two">
              <p className="footer-logo">Contact Us</p>
              <div className="footer-icon">
                <div>
                  <MailOutlined style={{ fontSize: 70, color: "#fff" }} />
                </div>
              </div>
              <p>Email：chenruiguo@whu.edu.cn</p>
            </div>
          </div>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
