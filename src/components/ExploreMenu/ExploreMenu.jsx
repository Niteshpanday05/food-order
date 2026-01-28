import React from 'react'
import {menu_list} from '../../assets/assets';
import './ExploreMenu.css'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facere enim quia optio necessitatibus..</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index)=>{
            return (
                <div className="explore-menu-list-item">
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
