import React, { useState, useEffect } from 'react';
import "./Timer.css";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="time">
            {seconds}s
        </div>
    );
};

export default Timer;