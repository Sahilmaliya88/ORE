import React from 'react'
import ring1 from '../assets/imgs/ring1.jpg'
import ring2 from '../assets/imgs/ring2.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Slider1 from '../components/Slider1'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
const Second = ():React.ReactNode => {
  useGSAP(()=>{
      gsap.from("#p1",{duration:2.5,opacity:0,x:500,ease:"power1.out",scrollTrigger:{trigger:".page2",start:"top 60%",end:"top 90%"}})
      gsap.from("#p2",{duration:2.5,opacity:0,ease:"power1.out",x:-500,scrollTrigger:{trigger:".page2",start:"top 60%",end:"top 90%"}})
      gsap.from(".line1,.line2,.line3",{duration:1,y:200,opacity:.5,scrollTrigger:{trigger:".pl3",scroller:"body",start:"top 70%"}})
  },[])
  return (
    <div className='page2 min-h-screen px-4 pb-4'>
        <div className="sphead">
            <p id='p1'>Bespoke Diamond Jewellry.</p>
            <p id='p2'>The ultimatee experienece</p>
        </div>
        <div className='rings flex h-[450px]'>
            <img src={ring1} className='w-1/2' alt="ring1" loading='lazy' />
            <img src={ring2} loading='lazy' className='w-1/2' alt="ring2" />
        </div>
        <div className="pl3">
            <div className="line1">
            <p>Timeless heirlooms crafted with <br></br>
            premier diamantaires</p>
            <h1>bridal</h1>
          <h4>1</h4>
            </div>
            <div className="line2">
          <p>customize with prestingious details and no <br></br>
          comparable the ultimate luxury experience</p>
          <h1>custom</h1>
          <h4>2</h4>
          </div>
          <div className="line3">
          
          <p>unattainable access to a limited few that<br></br>
          have only been available to those grandfathered<br></br>
          into the global network,begin your search with<br></br>
          one and access the unattainable find the <br></br>
          impossible</p>
          <h1>sourcing</h1>
          <h4>3</h4>
          </div>
        </div>
        <Slider1 />
    </div>
  )
}

export default Second