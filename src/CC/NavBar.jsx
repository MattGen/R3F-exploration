import React from 'react'
import MaGeButton from './MaGeButton'


export function NavBar()
{
  

return (
  <div className='NavBar'>
  <MaGeButton name ="Menu" semiClass = "nbButton" />
  <MaGeButton name ="Doc" semiClass = "nbButton" />
  <MaGeButton name ="About" semiClass = "nbButton" />
  </div>
  
);
}
export default NavBar;
