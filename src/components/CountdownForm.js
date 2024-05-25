import React, { useState } from 'react';

const CountdownForm = ({ onSubmit }) => {
    const [targetDate, setTargetDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (targetDate) {
            const date = new Date(targetDate);
            const now = new Date();
            const maxDate = new Date(now.getTime() + 99 * 24 * 60 * 60 * 1000);

            if (date > maxDate || date < now) {
                alert('Please select a date within 99 days from now.');
                return;
            }

            onSubmit(date);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="targetDate">Target Date and Time:</label>
            <input
                type="datetime-local"
                id="targetDate"
                name="targetDate"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                required
            />
            <div className="buttons">
                <button type="submit">Start Countdown</button>
            </div>
        </form>
    );
};

export default CountdownForm;
