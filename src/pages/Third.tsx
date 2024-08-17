import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)
const Third = ():React.ReactNode => {
  const tl = gsap.timeline()
  useGSAP(()=>{
    gsap.from(".lines1,.lines2,.lines3",{y:400,duration:1.5,stagger:.5,scrollTrigger:{trigger:".third",start:"top 30%"}})
    gsap.from("#port>span",{x:100,scaleX:.99,duration:1,ease:"back",stagger:.1,scrollTrigger:{trigger:".third",start:"top 20%"}})
  },[])
  return (
    <div className='third min-h-screen px-4 py-4 flex flex-col justify-between'>
         <div className="pl3 pa3">
            <div className="lines1">
            <p>Timeless heirlooms crafted with <br></br>
            premier diamantaires</p>
            <h1>bridal</h1>
          <h4>1</h4>
            </div>
            <div className="lines2">
          <p>customize with prestingious details and no <br></br>
          comparable the ultimate luxury experience</p>
          <h1>custom</h1>
          <h4>2</h4>
          </div>
          <div className="lines3">
          
          <p>unattainable access to a limited few that<br></br>
          have only been available to those grandfathered<br></br>
          into the global network,begin your search with<br></br>
          one and access the unattainable find the <br></br>
          impossible</p>
          <h1>sourcing</h1>
          <h4>3</h4>
          </div>
        </div>
        <div id='port'>
            {
              "PORTFOLIO".split("").map((ele)=>(
                <span>{ele}</span>
              ))
            }
        </div>
    </div>
  )
}

export default Third