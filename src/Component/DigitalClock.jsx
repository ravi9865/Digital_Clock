import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Create an interval that updates the time every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the current time as a string
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className='digital-clock'>
      <h1>Digital Clock</h1>
      <p>{formattedTime}</p>
    </div>
  );
}

export default DigitalClock;