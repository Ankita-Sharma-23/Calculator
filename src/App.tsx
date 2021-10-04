import React from "react";
import "./App.css";
import "./Style/Button.css";
import { connect } from "react-redux";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="Top">
      <Calculator />
      <div className="bottom"></div>
    </div>
  );
}
export default connect()(App);
