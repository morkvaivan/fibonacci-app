import React from 'react';

import './Component.css';

const footerContent = '@morkvaivan, 2018';

const Footer = () => (
  <footer
    className="Footer"
  >
    <h1
      className="Footer-title"
    >
      {footerContent}
    </h1>
  </footer>
);

export default Footer;
