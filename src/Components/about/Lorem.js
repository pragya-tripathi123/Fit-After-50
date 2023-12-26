import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img2 from './../../images/lore.png'
export default function Lorem() {
  return (
    <>
      <section className='lorem'>           
       <div className='lorem-contain'>
            <div className='loremmmm'>
                <div className='lorem-img'>
                   <div className='overlay-lor'>
                    
                   </div>
                    <span><img src={img2} alt=""/></span>
                </div>
            </div>  
            <div className='aboutus-text commontext abouth4'>
                <div className='dibba'>
                    <h3 className="about">Lorem</h3>
                    <h4>Some words about</h4>
                    <p>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>    
      </section>
    </>
  )
}
