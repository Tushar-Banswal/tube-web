import React from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import { categories } from '../../utils/categories';

function SideBar({setSelectedCategory, selectedCategory}) {
  return (
    <div className='sidebar'>
      {categories.map((category) => {
        const color = ((category.name === selectedCategory)? "red":"");
        return (
            <SidebarItem key={category.id} name={category.name} setSelectedCategory={setSelectedCategory} color={color}/>
        )
      })}
    </div>
  )
}

export default SideBar
