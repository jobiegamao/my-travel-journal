import React from 'react';
import { IconName } from "react-icons/fa";

function Card(props){

    return(
        <div>
            <div className='card'>
                <img 
                    src={props.imageUrl}
                    className="card--image" 
                />
                <div className='card--details'>
                    <div className='card--line1'>
                        <img src={require("../images/location.png")} className='card--loc-icon'/>
                        <span>{props.location}</span>
                        <a href={props.googleMapsUrl}> 
                            View on Google Maps 
                        </a>
                    </div>
                    <div className='card--line2'>
                        {props.title}
                    </div>
                    
                    <span><b>{props.startDate} - {props.endDate}</b></span>
                    <p>{props.description}</p>

                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Card;