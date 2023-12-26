import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Goal from './gsmPages/Goal'
import Methodology from './gsmPages/Methodology'
import Strategy from './gsmPages/Strategy'
export default function Gsm() {
  let [goalactivate,setgoalactivate] = useState(true);
  let [strategyactivate, setstrategyactivate] = useState(false);
  let [methodologyactivate, setmethodologyactivate] = useState(false)
  function functioncall(){
    if(strategyactivate === true)setstrategyactivate(false)
    else if (methodologyactivate === true) setmethodologyactivate(false)
    setgoalactivate(true)
  }
  function functioncall1(){
    if (goalactivate === true) setgoalactivate(false)
    else if (methodologyactivate === true) setmethodologyactivate(false)
    setstrategyactivate(true)
  }
  function functioncall2(){
    if (goalactivate === true) setgoalactivate(false)
    else if (strategyactivate === true) setstrategyactivate(false)
    setmethodologyactivate(true)
  }
  return (
    <>
      <section className='gsm-section'>
        <div className='text-center all-btns'>
          <button type="button" onClick={functioncall} className={goalactivate ? 'activeted' : 'notactive'}>Goal</button>
          <button type="button" onClick={functioncall1} className={strategyactivate ? 'activeted' : 'notactive'}>Strategy</button>
          <button type="button" onClick={functioncall2} className={methodologyactivate ? 'activeted' : 'notactive'}>Methodology</button>
        </div>
        {goalactivate && <Goal></Goal>}
        {strategyactivate && <Strategy></Strategy>}
        {methodologyactivate && <Methodology></Methodology>}
      </section>
    </>
  )
}
