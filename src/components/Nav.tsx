import React from 'react'
import gsap from 'gsap';
import '../styles/App.css'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)
const Nav = (props:{tl:gsap.core.Timeline,onClose:React.MouseEventHandler}):React.ReactNode => {
    let tl = props.tl;
    useGSAP(()=>{
      tl.to(".big-nav",{duration:.5,top:0,height:"100vh"}).from(".nav1 p,.nav1 h1",{duration:1,y:100,opacity:0},"-=.2s").from(".nav2 p,.nav2 h1",{duration:1,y:100,opacity:0},"-=1s").from(".nav3",{duration:1,opacity:0,y:100},"-=.6s").from("#close",{duration:.5,opacity:0},"-=1s")
  },[])
    
  return (  
    <div className='big-nav px-4'>
        <button onClick={props.onClose} id='close' className='absolute right-[16px]'>close</button>
        <div className='nav1'>
          <h1>bridal</h1>
          <p>Timeless heirlooms crafted with <br></br>
          premier diamantaires</p>
          <h4>1</h4>
        </div>
        <div className='nav2'>
          <p>customize with prestingious details and no <br></br>
          comparable the ultimate luxury experience</p>
          <h1>custom</h1>
          <h4>2</h4>
        </div>
        <div className='nav3'>
          <h1>sourcing</h1>
          <p>unattainable access to a limited few that<br></br>
          have only been available to those grandfathered<br></br>
          into the global network,begin your search with<br></br>
          one and access the unattainable find the <br></br>
          impossible</p>
          <h4>3</h4>
        </div>
    </div>
  )
}

export default Nav