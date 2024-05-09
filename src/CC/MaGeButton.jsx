import React from 'react'
import {ActionMachine} from '../computage'


export function MaGeButton(props)
{
  const buttonRef = React.useRef(false);
  const thisName = props.name;
  
function handleClick()
{
    window.actionMachine.Act(thisName);
}

return (
  <button className={props.semiClass} onClick={handleClick} ref={buttonRef}>
    {thisName}
  </button>
);
}
export default MaGeButton;
