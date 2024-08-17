import React, { useState } from 'react'
import '../styles/App.css'
import model1 from '../assets/imgs/model1.jpg'
import model2 from '../assets/imgs/model2.jpg'
import model3 from '../assets/imgs/model3.jpg'
import model4 from '../assets/imgs/model4.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
let texts:string[] = ['model1','model2','model3','model4']
const RoundedSlide = ():React.ReactNode => {
    const [currentindex,setcurrentindex] = useState<number>(0)
    function decrease(){
        if(currentindex>0){
            setcurrentindex(prev=>prev-1)
        }else{
            setcurrentindex(3)
        }
    }
    function increase(){
        if(currentindex<3){
            setcurrentindex(prev=>prev+1)
        }else{
            setcurrentindex(0)
        }
    }
    useGSAP(()=>{
        gsap.from(".rounded-slider",{y:-200,opacity:0,duration:2,border:"5px solid gray",scrollTrigger:{trigger:"fourth"}})
    },[])
    useGSAP(()=>{
        gsap.to(".rounded-slider",{rotate:currentindex*-90,duration:1,ease:"power3.inOut"})
        gsap.to("#model1,#model2,#model3,#model4",{rotate:currentindex*90,duration:1})
        gsap.from("#roundpara",{y:100,opacity:0,duration:.8})
    },[currentindex])
  return (
    <>
     <div className='rounded-slider'>
        <img src={model1} id='model1' loading='lazy'  alt="" /><img src={model2} loading='lazy' id='model2' alt="" /><img src={model3} loading='lazy' id='model3' alt="" /><img src={model4} loading='lazy' id='model4' alt="" />
    </div>
    <p id='roundpara'>{texts[currentindex]}</p>
    <button className='btn-2 text-white' onClick={decrease}>prev</button>
    <button className='btn-1 text-white' onClick={increase}>next</button>
    </>
   
  )
}

export default RoundedSlide