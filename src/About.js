import React from 'react'
import ReactContactForm from 'react-mail-form';

const About = props => {
   
  
   
    return (
        <div className="about" id = '2'  >
                 
                <div className="about2" >
                   <div className = "photo">Photo</div>   
                    <div className = "logos">
                           <a href = "https://www.facebook.com/Valentina-Pan-Real-Estate-Agent- 112054539337268/?ti=as">
                            <div className="facebook"></div>
                            </a>
                        
                            <a href = "https://www.linkedin.com/in/valentina-pan-50a3a7139/">
                            <div className=" linkedin"></div>
                            </a>
                    </div>
                
                </div> 
                <div className = "contact1">
                    <h1>Contact me: </h1>
                    <ReactContactForm  className = 'contactForm' to="nemechekalexander@gmail.com" />
                 </div>

        
               
        </div>
    )
}

export default About