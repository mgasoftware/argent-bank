import React from 'react';

import '../../styles/Features.css';

/**
 * 
 * @param {object} props
 * @param {string} props.logo
 * @param {string} props.title 
 * @param {string} props.content  
 * @returns 
 */

export default function Features(props) {
  return (
    <div className="feature-item">
      <img src={props.logo} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
