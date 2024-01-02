import React from 'react';

const Button = ({ title, handler, addSrc ,deleteSrc }) => {
  return (
    <button onClick={handler}>
      {addSrc && <img src={addSrc} alt="Icon" width="20px" />} 
      {deleteSrc && <img src={deleteSrc} alt="Icon" width="20px" />} 
      {title}
    </button>
  );
}

export default Button;