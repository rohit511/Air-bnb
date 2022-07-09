import React from "react"
import "./Card.css"
export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={`./images/${props.img}`} className="card--image" /> *
            <div className="card--stats">
                
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>



           
    )
} // {`./images/${props.img}`}