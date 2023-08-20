"use client"
import React, { useEffect, useState } from 'react'

const ScrollToBtn = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [countdown, setCountdown] = useState(10);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setButtonDisabled(false);
      }, 10000); // 10,000 milliseconds (10 seconds)
  
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // 1,000 milliseconds (1 second)
  
      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }, []);

    const scrollToTarget = () => {
        const targetElement = document.getElementById('targetElement');
        targetElement && targetElement.scrollIntoView({ behavior: 'smooth' });
      };
    
  return (
   <>
   {buttonDisabled?countdown: <button onClick={scrollToTarget}>
    Click to Scroll
  </button>}
   </>
  )
}

export default ScrollToBtn
