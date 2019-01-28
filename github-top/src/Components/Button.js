import React from 'react';
import refreshLogo from '../refresh-button.svg';

const Button = ({id, className, name, clickHandler, isLoading}) => (
  <div id={id} className={className} onClick={clickHandler}>
    <img src={refreshLogo} alt="Refresh" className={"button_logo " + (isLoading ? "spin" : "")}/>
    {!isLoading ? (
      name
    ) : (
      "Refreshing..."
    )}
  </div>
);

export default Button;
