import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer () {
    return(
        <div className="footer">
            <div className="right">
                <h3>Our Social Media</h3>
                <div className="icon-row">
                <a className="icon-button"
                    href="https://www.instagram.com/hackpackeradventures/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram /> 
                </a>
                <a className="icon-button"
                    href="https://www.facebook.com/Hack-packers-1443148652420450/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebook /> 
                </a>
                <a className="icon-button"
                    href="https://www.youtube.com/channel/UCHa9aI26VuhL3r8Li4-UCtg?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaYoutube /> 
                </a>
                </div>
            </div>
        </div>
     );
}
