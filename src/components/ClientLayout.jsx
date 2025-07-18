"use client";
import React, { useEffect, useState } from 'react';
import DeviceWarning from './DeviceWarning';
import HeaderWrapper from './HeaderWrapper';

export default function ClientLayout({ children, interClass }) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    function isNotDesktop() {
      const ua = navigator.userAgent;
      const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|webOS/i.test(ua);
      const isSmallScreen = window.innerWidth < 1024;
      return isMobileOrTablet || isSmallScreen;
    }
    setShowWarning(isNotDesktop());
    const handleResize = () => setShowWarning(isNotDesktop());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <body className={interClass}>
      {showWarning && <DeviceWarning />}
      {!showWarning && <HeaderWrapper />}
      {!showWarning && children}
    </body>
  );
} 