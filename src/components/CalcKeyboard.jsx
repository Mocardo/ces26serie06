import React from "react"
import CalcButton from "./CalcButton"
import styles from '../styles/Calc.module.css'

export default function CalcKeyboard() {
  return <div className={styles.calcKeyboard}>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td><CalcButton role='clear'  symbol='C'/></td>
          <td><CalcButton role='delete' symbol='CE'/></td>
        </tr>
        <tr>
          <td><CalcButton role='num' symbol='7'/></td>
          <td><CalcButton role='num' symbol='8'/></td>
          <td><CalcButton role='num' symbol='9'/></td>
          <td><CalcButton role='op'  symbol='/'/></td>
        </tr>
        <tr>
          <td><CalcButton role='num' symbol='4'/></td>
          <td><CalcButton role='num' symbol='5'/></td>
          <td><CalcButton role='num' symbol='6'/></td>
          <td><CalcButton role='op'  symbol='*'/></td>
        </tr>
        <tr>
          <td><CalcButton role='num' symbol='1'/></td>
          <td><CalcButton role='num' symbol='2'/></td>
          <td><CalcButton role='num' symbol='3'/></td>
          <td><CalcButton role='op'  symbol='-'/></td>
        </tr>
        <tr>
          <td><CalcButton role='num'  symbol='0'/></td>
          <td><CalcButton role='op'   symbol='.'/></td>
          <td><CalcButton role='eval' symbol='='/></td>
          <td><CalcButton role='op'   symbol='+'/></td>
        </tr>
      </tbody>
    </table>
  </div>
}