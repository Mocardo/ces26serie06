import React from "react"
import { useSelector } from "react-redux"
import styles from "../styles/Calc.module.css"

export default function CalcDisplay() {
  let exprStr = useSelector(state => state.exprStr)
  
  if(exprStr === "") {
    exprStr = "0"
  }
  
  return <div className={styles.calcDisplay}>
    <span>{exprStr}</span>
  </div>
}