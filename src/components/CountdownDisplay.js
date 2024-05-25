import React, { useEffect, useState } from 'react';

const CountdownDisplay = ({ targetDate, onStop }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        if (!targetDate) return;

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(targetDate);
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.total <= 0) {
                clearInterval(timer);
                onStop();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, onStop]);

    if (!timeLeft) {
        return <div>Countdown finished!</div>;
    }

    return (
        <div>
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
            <button onClick={onStop}>Stop Countdown</button>
        </div>
    );
};

const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export default CountdownDisplay;
