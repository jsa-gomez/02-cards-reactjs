import React from 'react';
import icon from './../img/icon.png';
import './Card.css';

const Card = (props) => {
    return (  
        <div className="card">
            <img src={icon} alt="icon"></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href="#">Read More</a>
        </div>
    );
}
 
export default Card;