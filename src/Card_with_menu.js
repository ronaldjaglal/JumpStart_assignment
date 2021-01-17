import React from 'react';
import './Card.css';
import icon from './icon.png';
import {AiOutlineDownload} from "react-icons/ai"
import {AiFillPrinter} from "react-icons/ai"
import {VscTrash} from "react-icons/vsc"
import{
    Menu, MenuList, MenuButton, MenuItem,} from '@reach/menu-button';


function Card({title, subtitle, description, image}) {
    return (
        <div className='card'>
            <h2 className='card__title'>{title} </h2>
            <div className='card__content'>
                
                <div className="card__menu">
                <Menu>
                    <MenuButton className="main_btn">
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                    
                    </MenuButton>
                    <MenuList className="menu__list">
                        <MenuItem className="menu__item1" ><AiOutlineDownload className="menu_icon" size="1.5em" /> Download  </MenuItem>
                        <MenuItem className="menu__item1" ><AiFillPrinter className="menu_icon" size="1.5em"/>  Print  </MenuItem>
                        <MenuItem className="menu__item2" ><VscTrash className="menu_icon" size="1.5em"/>  Delete  </MenuItem>
                    </MenuList>
                </Menu>
                </div>
                </div>  
            
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
