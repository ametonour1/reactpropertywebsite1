import React from 'react'
import "../Styles/properties.css";

export const PropertyItem = ({image,type,price,location}) => {
  return (
    <div className='propertyitem'>
        <div className='propertyitemimg' style={{backgroundImage:`url(${image})`}}></div>
        <h1>{type}</h1>
        <p>{location}</p>
        <p>€{price}</p>
    </div>
  )
}
