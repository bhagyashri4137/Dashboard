import React from 'react';
import './Footer.css';

const Footer = ({ sidebarExpanded }) => {
  const footerClass = sidebarExpanded ? 'footer expanded' : 'footer collapsed';

  return (
    <div className={footerClass}>
      <div className="row">
        <div className="col">
          <p>©<span>Mattaforex</span>, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
