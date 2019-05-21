import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App/App.container";
import store from "./App/store/store";
import { Provider } from "react-redux";
import Result from "./App/Component/Result";
import F0F from "./App/Component/F0F";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
console.log("store1", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/result" component={Result} />
        <Route component={F0F} />
      </Switch>
    </Router>
  </Provider>,
  rootElement
);
