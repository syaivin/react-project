import React from "react";
import ReactDom from "react-dom";
import { Button, Switch } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Routes from './routes'
import styles from './index.less'
import Pic from './assets/g.jpg'

// console.log(22)
const Div = document.createElement("div");
Div.setAttribute("id", "root")
document.body.appendChild(Div)
ReactDom.render(
  <div>

    <h1 className={styles.green}>hello, world!333</h1>
    <img src={Pic}></img>
    <Button type="primary">Primary</Button>
    <Switch defaultChecked />
    <Router>
      <Link to="/list">Topics</Link>
    </Router>
    <Router>
      <Routes />
    </Router>

  </div>,
  document.getElementById("root")
);
