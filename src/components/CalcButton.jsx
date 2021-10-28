import React from "react"
import { useDispatch } from "react-redux";
import {
  numPressed,
  opPressed,
  evalPressed,
  deletePressed,
  clearPressed
} from "./calcReducer"

export default function CalcButton({role, symbol}) {
  const dispatch = useDispatch()
  let clickHandler
  
  switch(role) {
    case 'num':
      clickHandler = function() {
        // console.log(numPressed(symbol))
        dispatch(numPressed(symbol))
      }; break;
    case 'op':
      clickHandler = function() { 
        dispatch(opPressed(symbol))
      }; break;
    case 'eval':
      clickHandler = function() {
        dispatch(evalPressed())
      }; break;
    case 'delete':
      clickHandler = function() {
        dispatch(deletePressed())
      }; break;
    case 'clear':
      clickHandler = function() {
        dispatch(clearPressed())
      }; break;
    default:
      break;
  }
  
  //console.log(clickHandler)
  return <button type='button' onClick={clickHandler}>{symbol}</button>
}