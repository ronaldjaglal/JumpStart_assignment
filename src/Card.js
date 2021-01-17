import React from 'react';
import './Card.css';
import styled from 'styled-components';
import icon from './icon.png';

function Card({title, subtitle, description, image}) {
    return (
        <div className='card'>
            <h2 className='card__title'>{title} </h2>
            
            <div className='card__contents'>
                <img className="card__logo" src={icon}/>
                
           
                <div className='card__subtitle' >
                    <h3 >{subtitle}</h3>
                </div>

                <div className="card__description">
                    <p>{description}</p> 
                </div>
                <button className="card__button">View document</button>
            </div>  
        </div>
        
    )
}

export default Card
