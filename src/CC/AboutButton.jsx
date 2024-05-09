import React from 'react'

export function MenuButton()
{
  const buttonRef = React.useRef(false);
  

function handleClick() {
  
  console.log(buttonRef + " About");
}
return (
  <button className='nbButton' onClick={handleClick} ref={buttonRef}>
    Voronoi
  </button>
);
}
export default MenuButton;
