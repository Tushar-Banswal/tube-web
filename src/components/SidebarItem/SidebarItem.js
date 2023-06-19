import React from 'react'

function SidebarItem({name, setSelectedCategory, color}) {

  return (
    <div className='sidebar-item' onClick={() => {
        setSelectedCategory(name);
    }} style={{"backgroundColor":`${color}`}}>
      {name}
    </div>
  )
}

export default SidebarItem
