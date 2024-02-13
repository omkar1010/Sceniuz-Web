import React from 'react'
import "../Home/Home.css"
import "../../index.css";
import Datadriven_1 from "../Assets/datadriven-left-1.svg"
import Datadriven_2 from "../Assets/Datadriven-left-2.svg"
import Datadriven_3 from "../Assets/Datadriven-left-3.svg"
import Datadriven_R1 from "../Assets/Datadriven-right-1.svg"
import Datadriven_R2 from "../Assets/Datadriven_right-2.svg"
import Datadriven_R3 from "../Assets/Datadriven-right-3.svg"
import Revolution from "../Assets/Revolution.svg"
import ThirdcompoImg from "../Assets/thirdcompoImg.svg"
import Processimg_1 from "../Assets/Processimg-1.svg"
import Processimg_2 from "../Assets/Processimg-2.svg"
import Processimg_3  from "../Assets/Processimg-3.svg"
import Advantageimg from "../Assets/Adantageimg.svg"
import Example from "../../Carousel/NewExample.js"
import Spectrum1 from "../Assets/Spectrum1.svg"
import Spectrum2 from "../Assets/Spectrum2.svg"
import Spectrum3 from "../Assets/Spectrum3.svg"
import Spectrum4 from "../Assets/Spectrum4.svg"
import Spectrum5 from "../Assets/Spectrum5.svg"
import Spectrum6 from "../Assets/Spectrum6.svg"
import Spectrum7 from "../Assets/Spectrum7.svg"
import Spectrum8 from "../Assets/Spectrum8.svg"
import Spectrum9 from "../Assets/Spectrum9.svg"
import ImageSlider from '../ImageSlider.js';
import {LARGE_IMAGES} from "../Data.js"
import Transform_Data from '../Services/Data-Analytics/Transform_Data.jsx';








const Home = () => {
  return (
    <div style={{}} className='main-compo'>
  
      <div style={{ backgroundColor: "#EEEEEE" }} className='data-driven-compo  gap-16 p-6 items-center grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 '>
        <div style={{}} className='main-left-data-driven max-w-[580px]'>
          <p style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "67px", color: "#000000", lineHeight:"69px"}} >Data-Driven</p>
          <p style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "67px", color: "#000000", lineHeight:"69px" }} >Decisions</p>
          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "22px", color: "#2B2B2B", lineHeight:"69px" }}>Unleash your data power.</p>
          <div className='div-for-button'>
            <button style={{ height: "57px", color: "#070B15", backgroundColor: "#070B15", color: "#FFFFFF", borderRadius: "8px", marginTop: "20px", fontFamily: "Inter", fontWeight: "700", fontSize: "18px" }} className='min-w-[350px] max-w-[380px]'>Discover More</button>
          </div>

        </div>
        <div style={{}} className='main-right-data-driven grid grid-cols-2 gap-3 mt-4 max-w-[580px] max-h-[704px]'>
          <div style={{}} className='left-datadriven-images max-w-[282px] max-h-[703]'>
            <div className='mt-10'><img src={Datadriven_1}></img></div>
            <div className='mt-3'><img src={Datadriven_2}></img></div>
            <div className='mt-3'><img src={Datadriven_3}></img></div>
          </div>
          <div style={{}} className='right-datadriven-images max-w-[282px] max-h-[668px]' >
            <div><img src={Datadriven_R1}></img></div>
            <div className='mt-3'><img src={Datadriven_R2}></img></div>
            <div className='mt-3'><img src={Datadriven_R3}></img></div>
          </div>
        </div>
      </div>

      {/* this is second contener */}
      <div style={{ height: "475px", backgroundPosition: 'center', backgroundImage: `url(${Revolution})`, backgroundSize: 'cover' }} className='Revolution  bg-cover bg-center flex items-center'>

        <div className='text-center mx-auto'>
          <p style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "67px", color: "#FFFFFF" }} className=''>Leading the Data Revolution.</p>
          <p style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "22px", color: "#FFFFFF" }} className=''>  Innovation through analytics.</p>
        </div>
      </div>


      {/* this is third container */}
  <div style={{ backgroundColor:"#FFFFFF"}} className='grid grid-cols-1 min-h-[630px]'>
 {/* this is first component */}
 <div  className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 pt-10 pl-10 pr-10'>
  <div className='for-img'>
  <img src={ThirdcompoImg}/>
  </div>
  <div className='for-txtbutton ml-5'>
  <h1 style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "51px", lineHeight: "61.2px", color: "#000000" }} className='mt-5'>Our Process</h1>
  <h1 style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "51px", lineHeight: "61.2px", color: "#000000"}} className='mb-5'>Explained</h1>
  <p  style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "18px", lineHeight: "25.2px", color: "#2B2B2B" }} className='mb-10'>Strategic steps to insight.</p>
  <button style={{ width: "215px", height: "53px", borderRadius: "8px", padding: "16px, 40px, 16px, 40px", backgroundColor: "#000000", color: "#FFFFFF", fontFamily:"Inter", fontWeight:"600", fontSize:"14px" }}> Start Your Journey</button>
  {/* <p className="font-bold text-4xl">What we do?</ */}
 </div>
 </div>
 


{/* this is second container */}
 <div  className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 p-10 gap-10'>
<div >
  <img className='mb-2' src={Processimg_1}/>
  <p style={{fontFamily:"Inter",fontWeight:"600", fontSize:"18px",lineHeight:"25px"}} className='mb-2'>Data Integration</p>
  <p style={{fontFamily:"Inter", fontWeight:"400",fontSize:"14px", lineHeight:"21px"}}>Seamless merging of business data.</p>
</div>
<div ><img className='mb-2' src={Processimg_2}/>
  <p style={{fontFamily:"Inter",fontWeight:"600", fontSize:"18px",lineHeight:"25px"}} className='mb-2'>Data Integration</p>
  <p style={{fontFamily:"Inter", fontWeight:"400",fontSize:"14px", lineHeight:"21px"}}>Seamless merging of business data.</p></div>
<div ><img className='mb-2' src={Processimg_3}/>
  <p style={{fontFamily:"Inter",fontWeight:"600", fontSize:"18px",lineHeight:"25px"}} className='mb-2'>Data Integration</p>
  <p style={{fontFamily:"Inter", fontWeight:"400",fontSize:"14px", lineHeight:"21px"}}>Seamless merging of business data.</p></div>
 </div>
  </div>

  {/* this is fourth container */}

  <div style={{height:"max-content", backgroundColor:"#181618"}} className='  items-center  '>
   <div style={{ height:"max-content"}} className='grid justify-center '>
    <h1 style={{fontFamily:"Inter", fontWeight:"700", fontSize:"51px", lineHeight:"61.2px", color:"#F7FFFB"}} className='text-center mb-2 mt-12'>Our Advantage</h1>
    <p style={{fontFamily:"Inter", fontSize:"14px" , fontWeight:"400", lineHeight:"21px", color:"#909090"}} className='text-center mb-10'>Why Choose Sceniuz</p>
    <div className="w-full h-full">
  <img className="w-full h-full object-cover" src={Advantageimg} alt="Description" />
</div>

  

   </div>

   <div style={{}} className='grid lg:grid-cols-3 min-h-[190px] mt-10 gap-9 md:grid-cols-3 sm:grid-cols-1 pl-20 pr-20 sm:w-full  '>


  <div style={{ height:"max-content"}}>
    <p style={{color:"#F7FFFB", fontFamily:"Inter", fontWeight:"600", fontSize:"18px", lineHeight:"25.2px"}}>Analytics Pioneers</p>
    <p style={{color:"#909090", fontFamily:"Inter",fontWeight:"400", fontSize:"14px", lineHeight:"21px" }}>Decipher complex data with our advanced analytics solutions.</p>
  </div>
  <div style={{  height:"max-content"}}>
  <p style={{color:"#F7FFFB", fontFamily:"Inter", fontWeight:"600", fontSize:"18px", lineHeight:"25.2px"}}>Engineering Excellence</p>
    <p style={{color:"#909090", fontFamily:"Inter",fontWeight:"400", fontSize:"14px", lineHeight:"21px" }}>Build robust data frameworks with our engineering expertise.</p>
  </div>
  <div style={{  height:"max-content"}}>
  <p style={{color:"#F7FFFB", fontFamily:"Inter", fontWeight:"600", fontSize:"18px", lineHeight:"25.2px"}}>Transformation Experts</p>
    <p style={{color:"#909090", fontFamily:"Inter",fontWeight:"400", fontSize:"14px", lineHeight:"21px" }}>Navigate your digital journey with our tailored strategies.</p>
  </div>
  <div style={{ height:"max-content"}}>
  <p style={{color:"#F7FFFB", fontFamily:"Inter", fontWeight:"600", fontSize:"18px", lineHeight:"25.2px"}}>Innovative Strategies</p>
    <p style={{color:"#909090", fontFamily:"Inter",fontWeight:"400", fontSize:"14px", lineHeight:"21px" }}>Stay ahead with our cutting-edge digital transformation approaches.</p>
  </div>
  <div style={{  height:"max-content"}}>
  <p style={{color:"#F7FFFB", fontFamily:"Inter", fontWeight:"600", fontSize:"18px", lineHeight:"25.2px"}}>Collaborative Approach</p>
    <p style={{color:"#909090", fontFamily:"Inter",fontWeight:"400", fontSize:"14px", lineHeight:"21px" }}>Our team works with you to unlock data's full potential.</p>
  </div>
  <div style={{  height:"max-content"}}>
  <p style={{color:"#F7FFFB", fontFamily:"Inter", fontWeight:"600", fontSize:"18px", lineHeight:"25.2px"}}>Actionable Insights</p>
    <p style={{color:"#909090", fontFamily:"Inter",fontWeight:"400", fontSize:"14px", lineHeight:"21px" }}>Drive business growth with data-driven decisions.</p>
  </div>
   </div>

  </div>
  <div style={{  color:"#FFFFFF"}} className='container mt-20 min-h-[400px]'>
    <div className=''>
    <ImageSlider images={LARGE_IMAGES} />
    </div>
      
      </div>

<div style={{border:" 1px solid #18181B", backgroundColor:"#18181B"}} className='min-h-[1740px] '>

<h1 style={{fontFamily:"Inter", fontWeight:"700", fontSize:"51px", lineHeight:"61.2px", color:"#EAEAFD"}} className='text-center mt-20 '>Our Service Spectrum</h1>
<p style={{fontFamily:"Inter", fontSize:"18px", fontWeight:"400" , lineHeight:"25px", color:"#B7B7C7"}} className='text-center mt-5 mb-10'>Expertise across domains</p>
<div style={{}} className='min-h-[1350px] grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 p-3'>

  
<div style={{ backgroundColor:"#323238", borderRadius:"8px"}}>
  <img src={Spectrum1}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD", }} className='pl-2 mt-5 mb-1'>Analytics Insight</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Data-driven decisions to steer your company forward.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum2}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD", }} className='pl-2 mt-5 mb-1'>Engineering Excellence</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Building robust data infrastructures for scale and security.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum3}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Transformation Journey</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Navigate the digital landscape with our tailored solutions.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum4}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Strategic Advisory</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Align your data goals with business outcomes effectively.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum5}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Custom Solutions</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Bespoke analytics and engineering for unique challenges.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum6}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Tech Integration</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Seamless incorporation of the latest in data technology.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum7}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Compliance Assurance</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Adhering to regulations while maximizing data utility.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum8}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Cloud Services</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Leverage the cloud for flexible, scalable data solutions.</p>
  
</div>
<div style={{ backgroundColor:"#323238",  borderRadius:"8px"}}>
  <img src={Spectrum9}/>

    <p  style={{fontFamily:"Inter", fontWeight:"600", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2 mt-5 mb-1'>Insightful Reporting</p>
    <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"14px", lineHeight:"21px", color:"#EAEAFD"}} className='pl-2'>Actionable reports to inform and guide your business strategy.</p>
  
</div>
</div>
</div>

<Transform_Data/>

    </div>


  )
}

export default Home
