import React from 'react';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="app__footerOverlay">
    {/* added black bg into footeroverlay */}
    <div className="app__footerOverlay-black" />
    {/* added default bg below black bg inside the  footeroverlay */}
    <div className="app__footerOverlay-img app__bg" />
    
  </div>
);

export default FooterOverlay;
