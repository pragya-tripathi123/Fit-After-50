import React from 'react'
import { Container } from 'react-bootstrap'
import Fitness1 from '../fitness/Fitness1'
import Toolscards from './Toolscards'
import Nutritioncalc from './Nutritioncalc'
import Footer from '../home/homepages/Footer'

const data1 = [
 "BMI Calculator","BMR Calculator","Body Fat Calculator","Calorie Calculator","Calories Burned Calculator","Lean Body Mass Calculator","Healthy Weight Calculator", "Pace Calculator"]
const data2 = [
  "Carbohydrate Calculator", "Fat Intake Calculator", "Macro Calculator", "Protein Calculator", "Protein Calculator", "Lean Body Mass Calculator", "Protein Calculator"]
export default function Tools() {
  return (
    <>
        <section>
        <div className='tools-cal-sec'>
          <Container>
            <div className='top-name'>
              <span>Home</span>
              <span>.</span>
              <span className='active-about'>Tools & Calculator</span>
            </div>
          </Container>
        </div>
        <Fitness1 header={"Tools & Calculator"} para1={"Fitness & Health Calculators."} para2={"Fit after 50 provides a number of free tools and calculators to help you determine everything from your basal metabolic rate (BMR) to your ideal weight, your daily caloric needs, body fat composition, and more. Each of those tools will help you understand your present healthy and fitness status, which is critical information that helps you determine your exercise needs for your individual needs and goals, whether that's increasing your strength or losing weight, so you can get yourself into your best Fit after 50 shape."}></Fitness1>
        <Toolscards alldata ={data1}></Toolscards>
        <Nutritioncalc></Nutritioncalc>
        <Toolscards alldata ={data2}></Toolscards>
        <div className='mt-5'>
          <Footer></Footer>
        </div>
        </section>
    </>
  )
}
