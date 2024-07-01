import React, { useEffect, useState } from 'react'

export default function Countdown() {
  const timer = 5;
  const [time,setTime] =  useState(timer);
  const [isRunning,setIsRunning] = useState(false);
  const formatTime = (seconds) =>{
    const minutes = Math.floor(seconds/60);
    const second = seconds%60;
    return `${minutes.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`
  }

  const handleStart = () =>{
    setIsRunning(true);
  };
  const handlePause = ()=>{
    setIsRunning(false);
  }
  const handleReset = ()=>{
    setIsRunning(false);
    setTime(timer);
  }

  useEffect(()=>{
    let interval;
    if(isRunning){
      interval = setInterval(() => {
        setTime((prevTime)=>prevTime-1);
      }, 1000);
    }
    return ()=>clearInterval(interval)
  },[isRunning]);
  
  const [timeRemaining,setTimeRemaining] = useState({
    days:0,hours:0,minutes:0,seconds:0,
  });

  const targetDate = '2024-07-03T18:00:00+09:00';
  useEffect(()=>{
    const interval = setInterval(() => {
      goCountDown();
    }, 1000);
    return () => clearInterval(interval);
  },[targetDate]);

  const goCountDown = () =>{
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target-now;
    if(difference<0){
      setTimeRemaining({
        days:0,hours:0,minutes:0,seconds:0,
      });
      return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    setTimeRemaining({ days, hours, minutes, seconds });
  };
  
  return (
    <div>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStart}>start</button>
      { isRunning?(<button onClick={handlePause}>pause</button>):('')}
      <button onClick={handleReset}>reset</button>
      <br/>
      <div>
      <h2>
        {timeRemaining.days} days {timeRemaining.hours} hours {timeRemaining.minutes} minutes{' '}
        {timeRemaining.seconds} seconds
      </h2>
    </div>
    </div>
  )
}
