import React, { useEffect, useState } from 'react';


interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsScrollingDown(currentPosition > scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div
      className={`scroll-animation ${isScrollingDown ? 'scrolling-down' : 'scrolling-up'}`}
      style={{
        transform: `translateY(-${scrollPosition * 0.3}px)`,
        transition: 'transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;