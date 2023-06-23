import React from 'react'
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-carousel-minimal';
import "../Styles/Propertypresent.css";
import { Contact } from './Contact';

export const PropertyPresent = (props) => {
  
    const location = useLocation();
    const data = location.state;
    const propertyPhotos = data.photos;
   
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',}
    return (
      <div className='propertypresent'>
      <div className='photocarousel' style={{ textAlign: "center" }}>
      <div style={{
        padding: "0 20px"
      }}>
        <Carousel
          data={propertyPhotos}
          width="850px"
          height="500px"
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={false}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
    <div className='lowerhalf'>
    <div className='keyfeatures'>
      <h1>Key Features</h1>
      <div className='keyfeaturesp'>
      <p>Type:{data.type}</p>
      <p>Price:{data.price}</p>
      <p>Location:{data.location}</p>
      <p>Bedrooms:{data.bedtooms}</p>
      <p>Bathrooms:{data.bathrooms}</p>
      <p>Heating:{data.heating}</p>
      <p>Area:{data.area}</p>
      <p>Per ㎡:{data.perm}</p>
      <p>Energy:{data.energy}</p>
      <p>Floor:{data.floor}</p>
      <p>Parking:{data.park}</p>
      <p>Construction year:{data.consturction}</p>
      <p>Internal:{data.internal}</p>
      <p>External:{data.external}</p>
      <p>Extra:{data.extra}</p>
      </div>
    </div>
    <div className='propertycontact'>
      <h1>Contact US</h1>
    <Contact/>
    </div>
    </div>
    </div>
  )
}
