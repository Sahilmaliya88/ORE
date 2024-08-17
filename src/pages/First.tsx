import React from 'react'
import Logo from '../assets/imgs/diamond.png'
import video1 from '../assets/video/hero1.mp4'
import video2 from '../assets/video/hero2.mp4'
import '../styles/App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Nav from '../components/Nav'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
const First = ():React.ReactNode => {
    const tl = gsap.timeline()

    useGSAP(()=>{
        gsap.from(".pl1 p",{duration:1,y:200,opacity:0,stagger:.3,ease:"expo",scrollTrigger:{trigger:".pl1",start:"top 50%"}})
        gsap.from(".pl2 p",{duration:1.5,y:200,stagger:.3,scrollTrigger:{trigger:".pl1",start:"top 60%",end:"top 100%"}})
    },[])
    tl.pause()
    function shownav(){
        tl.restart()

    }
    function Close(){
        tl.timeScale(2).reverse()
    }
  return (
    <div className='page1 min-h-screen'>
        <header className='flex justify-between items-center px-4 py-4'>
            <img src={Logo} loading='lazy' className='w-[35px] h-[35px]' alt='logo'/>
            <button className='text-[#FFD09A] duration-100 p-2 rounded-md' onClick={shownav}>MENU</button>
        </header>
        <div className='videos px-4 flex justify-between mt-[50px]'>
            <video  className='video w-[49%] h-[400px] object-fill' muted  autoPlay loop>
                <source src={video1}></source>
            </video>
            <video  className='video w-[49%] h-[400px] object-fill' muted autoPlay loop>
                <source src={video2}></source>
            </video>
        </div>
        <div className='flex justify-center'>
            <h1 id='ore'>ORE</h1>
        </div>
        <div className='pl1 px-4'>
            <p className=''>Despoke Diamond Jewelry <br></br>
            diamond Jewelry created through ourlens of modern Design,With<br></br>
            no sacrifice to achieve our premium quality exclusive  diamond<br></br>
            House,specializing in beside timeless Jewelry
            </p>
            <p>
                we draw <br></br>
                purpose and inspiration <br></br>
                through  the art of  innovation
            </p>
            <p>
                diamond Jewelry <br></br>
                through ourlens of modern design<br></br>
                with no sacrifice to achieve our premium quality
            </p>
        </div>
        <div className='pl2 px-4'>
            <p>
                unattainable access,given to a limited few that have only<br></br>
                been available  to those grandfathered into global<br></br>
                network.begin your search with ore and access the <br></br>
                unattainable.find the impossible
            </p>
            <p>
                explore the posibilities of <br></br>
                tailored craftsmanship and <br></br>
                unlimited capabilities
            </p>
            <p>
                an atelier design firm with a focus in diamond Jewelry<br></br>
                a new standard of customization.
            </p>
        </div>
    <Nav tl={tl} onClose={Close}/>
    </div>
  )
}

export default First