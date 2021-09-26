import React, { useState } from 'react';

const StickyPoints = () => {
  const [navbarActive, setnavbarActive] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 500) {
      setnavbarActive(true);
    } else {
      setnavbarActive(false);
    }
  };
  window.addEventListener('scroll', changeNavbar);
  return (
    navbarActive && (
      <div className="sticky-points">
        <h1>RADI</h1>
      </div>
    )
  );
};

export default StickyPoints;
