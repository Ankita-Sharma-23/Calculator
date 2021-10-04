import React from "react";
import { connect, useDispatch } from "react-redux";
import AppState from "../Interfaces/state.interface"
import { addElem, clear, equal} from '../Actions/calcAction'
import { expression } from "mathjs";

const Calculator = (props: any) => {
  const dispatch = useDispatch();
  const { value } = props;
  console.log("hlloo",value)

  const handleButton = (event: any) => {
    if(event.target.value === "Clc"){
      dispatch(clear())
    } else if(event.target.name === "="){
      dispatch(equal(props.value))
    } else {
      dispatch(addElem(event.target.value))
    } 
  };

  return (
    <div className="App">
      <div className="display">{value}</div>
      <div className="display1">{props.expressions}</div>
      <div className="buttons">
        <button name="c"  className="equal-clc" type="button" onClick={handleButton} value="Clc">Clc</button>  
        <button name="*" className="operator"  type="button" onClick={handleButton} value="*">*</button>
        <button name="+" className="operator" type="button" onClick={handleButton} value="+">+</button>
        <button name="-" className="operator" type="button" onClick={handleButton} value="-">-</button>
        <button name="7" type="button" onClick={handleButton} value="7">7</button>
        <button name="8" type="button" onClick={handleButton} value="8">8</button>
        <button name="9" type="button" onClick={handleButton} value="9">9</button>   
        <button name="4" type="button" onClick={handleButton} value="4">4</button>
        <button name="5" type="button" onClick={handleButton} value="5">5</button>
        <button name="6" type="button" onClick={handleButton} value="6">6</button> 
        <button name="1" type="button" onClick={handleButton} value="1">1</button>
        <button name="2" type="button" onClick={handleButton} value="2">2</button>
        <button name="3" type="button" onClick={handleButton} value="3">3</button>
        <button name="%" className="operator" type="button" onClick={handleButton} value="%">%</button>
        <button name="0" type="button" onClick={handleButton} value="0">0</button>
        <button name="/" className="operator" type="button" onClick={handleButton} value="/">/</button>
        <button name="=" className="equal-sign" type="button" onClick={handleButton} value="=" >=</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  value: state.calcReducer.value,
  expressions:state.calcReducer.expressions,
})

export default connect(mapStateToProps, null)(Calculator);


