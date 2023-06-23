import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FacebookIcon fontSize='large'/>
            <LinkedInIcon fontSize='large'/>
            <TwitterIcon fontSize='large'/>
            <InstagramIcon fontSize='large'/>
        </div>
        <p><span>&copy;</span>Amet Onour 2023</p>
    </div>
  )
}
