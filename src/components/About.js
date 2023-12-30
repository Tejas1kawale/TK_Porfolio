import React from 'react'
import image7 from '../images/image7.jpg'
import {
  Link
} from "react-router-dom";

export default function About() {
    
  return (
       
    <div >
        <nav className="px-2 py-4" style={{background:'#141313',color:'white',height:'45px',marginTop:'-16px'}}>
          <ul className='flex' style={{textAlign: 'right',listStyleType:'none'}}>
              <li className='mx-2 cursor-pointer' style={ {marginLeft:"30px",marginTop:'10px'}}>Home</li>
              <li className='mx-2 cursor-pointer'style={{marginLeft:"1000px", marginTop:'10px'}}>About</li>
              <li className='mx-2 cursor-pointer'style={{marginLeft:"30px", marginTop:'10px'}}>Projects</li>
              <li className='mx-2 cursor-pointer'style={{marginLeft:"30px",marginTop:'10px'}}>Contact</li>
              <li className='mx-2 cursor-pointer'style={{marginLeft:"30px", marginTop:'10px'}}>Resume</li>
          </ul>
        </nav>
        <div className="intro" style={{
                                  backgroundImage:`url(${image7})`,
                                  color:"skyblue",
                                  backgroundColor:'black',
                                  backgroundPosition: '20% center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  height: '100vh',
                                 
                                  }}>
            <div className='flex1'>                        
            <p className="tracking-in-expand"style={{marginLeft:'90px',paddingTop:'100px',fontFamily:'Monospace',fontSize:'-webkit-xxx-large'}}>  Hi There!</p>   
                         
            <p className="text-focus-in" style={{marginLeft:'90px',fontSize:'xx-large',paddingTop:'20px',fontFamily:'Monospace'}}><pre>My Name is <strong>Tejas</strong>.</pre> <pre>I am a post graduate from <strong>NIT.</strong></pre> I am a <strong>Software Developer</strong> with 2.5 yrs <br />of IT experience.</p>                      
            </div>   
            <div className='Social-Media'>         
                <a  href="https://www.linkedin.com/in/tejas-kawale-876a4214b/" class="fa fa-linkedin"></a>
                <a  href="https://www.instagram.com/tejaskawale5/?igsh=MTA1eGtiMjQ4MjN5Mw%3D%3D" class="fa fa-instagram"></a>
                <a  href="https://www.youtube.com/channel/UCgI7MrRvfdtOaPsvjwU62LA" class="fa fa-youtube"></a>
                               
            </div>                         
        </div>
    </div>
  )
}
