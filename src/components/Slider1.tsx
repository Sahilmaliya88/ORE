import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import ring2 from '../assets/imgs/ringimg2.jpg'
import ring3 from '../assets/imgs/ringimg3.png'
import ring4 from '../assets/imgs/ringimg4.png'
import ring5 from '../assets/imgs/ringimg5.png'
import ring6 from '../assets/imgs/ringimg6.png'
import { Swiper,SwiperSlide } from 'swiper/react'
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const BelowSlider=(props:{currentIndex:number}):React.ReactNode=>{
    let p:string[] =  [
        'radient solitaire','Yello pinki ring','type ii flawless','diamond white','goldern diamond'
    ]
    useGSAP(()=>{
        gsap.from(".belowslider",{y:150,opacity:0,duration:1,scrollTrigger:{trigger:".swiper",start:"top 68%"}})
    },[])
    useGSAP(()=>{
        gsap.from(".para",{y:50,opacity:0,duration:.8})
    },[props.currentIndex])
    useEffect(()=>{
        let scroller = document.getElementsByClassName("scroll-change")[0]
        scroller.scrollTop = props.currentIndex *50;
    },[props.currentIndex])
    return(
        <div className='belowslider px-4'>
            <div className='scroller flex justify-center items-center text-center ml-[110px]'>
                <div className='scroll-change' draggable={false}>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                </div>
                <div className='h2-s'>/ 05</div>
            </div>
            <h1>Ourwork</h1>
            <p className='para'>{p[props.currentIndex]}</p>
        </div>
    )
}
const Slider1 = ():React.ReactNode => {
    const rings:string[] = [ring2,ring3,ring4,ring5,ring6]
    const [currentIndex,setCurrentIndex] = useState<number>(0)
    function classGenerator(index:number){
        if(index===currentIndex){
            return "current"
        }else if(index === currentIndex-1){
            return "prev"
        }else if (index === currentIndex+1){
            return "next"
        }else{
            return ""
        }
    }
    useGSAP(()=>{
        gsap.from(".swiper",{x:50,opacity:.3,duration:1,scrollTrigger:{trigger:".swiper",start:"top 68%"}})
    },[])
  return (
  <>
   <div className='flex w-full justify-center relative px-4'>
       <Swiper
       modules={[Navigation]}
       navigation={{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
       }}
       className='swiper w-full'
       speed={700}
        slidesPerView={3}
        spaceBetween={650}
        onSlideChange={(swiper)=>setCurrentIndex(swiper.activeIndex)}
        centeredSlides={true}>
            {
                rings.map((ele,index)=>(
                    <SwiperSlide>
                        <div className={`slides ${classGenerator(index)}`} key={index}>
                            <img src={ele} alt='ring'/>
                        </div>
                    </SwiperSlide>
                ))
            }
       </Swiper>
      
       <button className='swiper-button-prev'>Prev</button>
       <button className='swiper-button-next'>Next</button>
    </div>
    <BelowSlider currentIndex={currentIndex}/>
  </>
   
  )
}

export default Slider1