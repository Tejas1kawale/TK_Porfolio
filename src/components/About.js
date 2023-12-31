import React from 'react'
import image7 from '../images/image7.jpg'
import suitcase from '../images/suitcase.jpg'
export default function About() {
    
  return (
       
    <div >
    
        <div className="intro" style={{
                                  backgroundImage:`url(${image7})`,
                                  color:"skyblue",
                                  backgroundColor:'black',
                                  backgroundPosition: '20% center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  height: '910px',
                                  }}>
            <div className='flex1'>  

              <span className='Hello'>Hello,</span><br />
              <span className='introText'>I'm <span className='introName'>Tejas</span> <br />Website Designer</span><br />
              <p className='introPara'>I am Post Graduate (M.Tech) from NIT Durgaurbr. <br /> Software Developer with 2.5 yrs of IT experience.</p>     
              <a href="/"><button className='btn'><img className="suitcase" src={suitcase} alt="" /><strong className='btnText'>Hire Me</strong> </button></a>              
            {/* <p className="tracking-in-expand"style={{marginLeft:'90px',paddingTop:'100px',fontFamily:'Monospace',fontSize:'-webkit-xxx-large'}}>  Hi There!</p>   
                         
            <p className="text-focus-in" style={{marginLeft:'90px',fontSize:'xx-large',paddingTop:'20px',fontFamily:'Monospace'}}><pre>My Name is <strong>Tejas</strong>.</pre> <pre>I am a post graduate from <strong>NIT.</strong></pre> I am a <strong>Software Developer</strong> with 2.5 yrs <br />of IT experience.</p>                       */}
            </div>   
           
            {/* <div className='Social-Media'>         
                <a  href="https://www.linkedin.com/in/tejas-kawale-876a4214b/" class="fa fa-linkedin"></a>
                <a  href="https://www.instagram.com/tejaskawale5/?igsh=MTA1eGtiMjQ4MjN5Mw%3D%3D" class="fa fa-instagram"></a>
                <a  href="https://www.youtube.com/channel/UCgI7MrRvfdtOaPsvjwU62LA" class="fa fa-youtube"></a>
                               
            </div>                          */}
        </div>
    </div>
  )
}
