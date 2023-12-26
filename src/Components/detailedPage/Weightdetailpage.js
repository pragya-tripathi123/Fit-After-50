import React from 'react'
import Fitness1 from '../fitness/Fitness1'
import Author from '../weight_management/Author'
import Weightpara from '../weight_management/Weightpara'
import Author2 from '../weight_management/Author2'
import Footer from '../home/homepages/Footer'
export default function Weightdetailpage() {
    return (
        <>
            <section>
                <div className='readmore'></div>
                <Fitness1 header={"Weight management"} para1={"9 Ways to Spring into Fitness"} para2={"First, it’s important to understand that the immune system is a system, not a single entity, and according to Science Direct, it’s “arguably the most complex system in the human body.”(Ref)"}></Fitness1>
                <Author></Author>
                <Weightpara></Weightpara>
                <Author2></Author2>
                <div className='mt-5'>
                    <Footer></Footer>
                </div>
            </section>
        </>
    )
}