import React, { useState, useEffect, useRef } from 'react';

const Helios = ({ children, color, height, width, infinite = false, nextArrow, prevArrow, dots = false}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const heliosRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetTimer();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observer.observe(heliosRef.current);

    if (React.Children.count(children) > 1) {
      startTimer();
    }

    return () => {
      clearInterval(timerRef.current);
      observer.disconnect();
    };
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setProgress(0);
    if (React.Children.count(children) > 1) {
      startTimer();
    }
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextSlide();
          return 0;
        } else {
          return prevProgress + 1; 
        }
      });
    }, 100);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? (infinite ? 0 : prevIndex) : prevIndex + 1
    );
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (infinite ? children.length - 1 : prevIndex) : prevIndex - 1
    );
    resetTimer();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  return (
    <section className="helios-container" style={{height: height ? height: '' , width: width ? width: ''}} ref={heliosRef}>
        <main className="helios-inner">
            {React.Children.map(children, (child, index) => (
                <div className="helios-item" 
                    style={{
                      opacity: index === currentIndex ? '1' : '0.4',
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: 'opacity 1s, transform 1s'
                    }}
                    key={index}
                >
                    {child}
                </div>
            ))}
        </main>
        {infinite || currentIndex > 0 ? (
          <div className={`${prevArrow && prevArrow.class ? prevArrow.class : 'helios-prev' }`} onClick={() => prevSlide()}>
              {prevArrow && prevArrow.component ? prevArrow.component : <Prev color={color && color}/>}
          </div>
        ) : null}
        {infinite || currentIndex < children.length - 1 ? (
          <div className={`${nextArrow && nextArrow.class ? nextArrow.class : 'helios-next' }`} onClick={() => nextSlide()}>
             {nextArrow && nextArrow.component ?  nextArrow.component :<Next color={color && color}/>}
          </div>
        ) : null}
        {dots && <main className="helios-indicator">
            {React.Children.map(children, (_, index) => (
                <span
                    key={index}
                    className={`helios-page ${index === currentIndex ? 'active' : ''}`}
                    style={color && color ? {background: color} : {}}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </main>}
    </section>
  );
};

export default Helios;

function Next ({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={42}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13 15 3-3m0 0-3-3m3 3H8m13 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
    </svg>
  )
}

function Prev ({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={42}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11 9-3 3m0 0 3 3m-3-3h8m5 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
    </svg>
  )
}
  