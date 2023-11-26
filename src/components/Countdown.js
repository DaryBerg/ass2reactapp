import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Import corresponding CSS file

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set the date for the countdown
    const countdownDate = new Date('June 20, 2024 23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        // Optionally handle when the countdown ends
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section className="countdown-section">
      <h2>Countdown to Graduation</h2>
      <div className="countdown">
        <div className="time" id="days">{formatTime(timeRemaining.days)}</div>
        <div className="label">Days</div>
        <div className="time" id="hours">{formatTime(timeRemaining.hours)}</div>
        <div className="label">Hours</div>
        <div className="time" id="minutes">{formatTime(timeRemaining.minutes)}</div>
        <div className="label">Minutes</div>
        <div className="time" id="seconds">{formatTime(timeRemaining.seconds)}</div>
        <div className="label">Seconds</div>
      </div>
    </section>
  );
};

export default Countdown;
