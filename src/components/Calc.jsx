import React from "react";
import CalcDisplay from "./CalcDisplay"
import CalcKeyboard from "./CalcKeyboard"
import styles from "../styles/Calc.module.css"
import {evaluate} from "mathjs"

export default function Calc() {
  return <div className={styles.calc}>
    <CalcDisplay/>
    <CalcKeyboard/>
  </div>
}

export function calcEval(exprStr) {
  //console.log(exprStr)
  if(exprStr === "") exprStr = '0';
  let ans = evaluate(exprStr)
  console.log(String(ans))
  return String(ans).substring(0, 9)
}