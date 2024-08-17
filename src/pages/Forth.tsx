import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import RoundedSlide from '../components/RoundedSlide'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Forth = ():React.ReactNode => {
    useGSAP(()=>{
        gsap.from(".projects span",{x:800,duration:1,ease:"back",stagger:.2,scrollTrigger:{trigger:".fourth"}})
    },[])
  return (
    <div className='fourth p-4 h-[100vh] overflow-hidden relative'>
        <div className="projects">
            {
                "PROJECTS".split("").map((ele,index)=>(
                    <span key={index}>{ele}</span>
                ))
            }
        </div>
        <div className='flex justify-center'>
        <RoundedSlide></RoundedSlide>
        </div>
       
    </div>
  )
}

export default Forth