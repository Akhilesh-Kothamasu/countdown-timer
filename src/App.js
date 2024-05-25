
import React, { useState } from 'react';
import CountdownForm from './components/CountdownForm';
import CountdownDisplay from './components/CountdownDisplay';
import './App.css';

const App = () => {
    const [targetDate, setTargetDate] = useState(null);

    const handleFormSubmit = (date) => {
        setTargetDate(date);
    };

    const handleStop = () => {
        setTargetDate(null);
    };

    return (
        <div className="container">
            <h1>Countdown Timer</h1>
            {!targetDate ? (
                <CountdownForm onSubmit={handleFormSubmit} />
            ) : (
                <CountdownDisplay targetDate={targetDate} onStop={handleStop} />
            )}
        </div>
    );
};

export default App;
