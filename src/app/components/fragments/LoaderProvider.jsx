'use client';

import React, { useState, useEffect } from 'react';
import Loader from '../elements/Loader';

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && children}
    </>
  );
};

export default LoaderProvider;