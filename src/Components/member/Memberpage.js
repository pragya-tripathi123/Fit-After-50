import React from 'react'
import Plans from '../home/homepages/Plans'
import Footer from '../home/homepages/Footer'

export default function Memberpage() {
  return (
    <div>
      <div className='mt-5'><Plans></Plans></div>
      <div style={{marginTop:"120px"}}>
        <Footer></Footer>
      </div>
      
    </div>
  )
}

