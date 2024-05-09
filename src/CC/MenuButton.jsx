import React from 'react'
import {Voronoi} from '../computage'

export function MenuButton()
{
  const buttonRef = React.useRef(false);
  

function handleClick() {
  let a = new Voronoi(6,0.3);
  a.MakeVoronoi();
  console.log(buttonRef);
}
return (
  <button className='nbButton' onClick={handleClick} ref={buttonRef}>
    Voronoi
  </button>
);
}
export default MenuButton;
