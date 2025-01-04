import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Navbar = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (typeof window !== 'undefined') {
        setDeviceWidth(window.innerWidth);
      }
    };

    // Update width on initial render
    updateWidth();

    // Update width on window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <>
      <nav className="z-50 h-20 p-4 mb-10 bg-white shadow-md">
        {deviceWidth >= 768 ? <Desktop /> : <Mobile />}
      </nav>
    </>
  );
  
};

export default Navbar;
