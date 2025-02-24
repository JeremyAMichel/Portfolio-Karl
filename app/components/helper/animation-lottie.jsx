"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import dynamique de Lottie avec SSR désactivé
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 w-full rounded"></div>
});

const AnimationLottie = ({ animationPath }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isMounted) {
    return <div className="animate-pulse bg-gray-200 h-64 w-full rounded"></div>;
  }

  return (
    <div className="w-full h-full">
      <Lottie {...defaultOptions} />
    </div>
  );
};

export default AnimationLottie;