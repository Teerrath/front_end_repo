import React, { useEffect, useState } from "react";
import './countdowntimer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string | Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxClass =
    " py-3 rounded-xl w-[100px]   font-semibold bg-white flex gap-1 justify-center timer-color mt-4 ";

  return (
    <div className="flex items-center gap-2 justify-center">
      <div className={boxClass}>
        <p> {timeLeft.days}</p>
        <div className="text-sm">Days</div>
      </div>

      <div className={boxClass}>
        <p> {timeLeft.hours}</p>
        <div className="text-sm">Hours</div>
      </div>

      <div className={boxClass}>
        <p> {timeLeft.minutes} </p>
        <div className="text-sm">Minutes</div>
      </div>

      <div className={boxClass}>
        <p> {timeLeft.seconds}</p>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
