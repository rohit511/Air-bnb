import React from 'react'
import "../Components/Hero.css"

export default function Hero() {
  return (
    <section>
         <div className="img-container"> 
    <img src ="./images/collectionc.png" className="Hero--photo"/>
 </div> 
    <h1 className="Hero--header" style={{color:"red ",fontSize:"bold"}}>Online Experiences</h1>
    <p className="Hero--text" style={{fontSize:"bold"}}>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
