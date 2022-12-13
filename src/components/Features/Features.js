import React from 'react'

export default function Features(props) {
  return (
    <div className="feature-item">
      <img src={props.logo} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
