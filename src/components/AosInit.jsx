import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, 
    });
  }, []);

  return null;
};

export default AosInit;
