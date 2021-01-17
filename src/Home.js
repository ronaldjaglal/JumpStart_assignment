import React from 'react';
import './Home.css';
import Card from "./Card.js";
import Card_with_menu from "./Card_with_menu.js";

// import {MenuProvider} from 'react-native-popup-menu';

function Home() {
    return (
        <div className='home'>
            <div className = 'home__container'>
            <div className = 'home__row'>
            
            <Card 
            title="Default State" 
            subtitle="Corporate Bylaws"
            description="An internal document that details the operating rules for the
            corporation and are typically adopted at the organozational meeting of the board of directors." 
            />
            
            
            <Card_with_menu
            title="Hover State" 
            subtitle="Corporate Bylaws"
            description="An internal document that details the operating rules for the
            corporation and are typically adopted at the organozational meeting of the board of directors." 
            />
            
          
            
            
            
            </div>
            </div>
        </div>
    )
}


export default Home 

