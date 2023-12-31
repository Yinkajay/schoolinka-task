import React, { useEffect, useState } from 'react';
import timeInputStyles from './TimeInput.module.css'; // Import a CSS file for styling
import { AiOutlineClockCircle } from "react-icons/ai";

const TimeInput = ({ onTimeChange, initialTime = '' }) => {
    const [time, setTime] = useState({
        hour: '',
        period: 'am'
    })

    useEffect(() => {
        // Parse the initialTime prop when it changes and update the component state
        if (initialTime) {
            const [hour, period] = initialTime.split(' ');
            setTime({ hour, period: period.toLowerCase() });
        }
    }, [initialTime]);

    const handleHourChange = (e) => {
        const inputValue = e.target.value;
        if (/^\d{0,2}(:\d{0,2})?$/.test(inputValue)) {
            console.log(inputValue)
            setTime(prev => ({ ...prev, hour: inputValue }));
            onTimeChange(`${inputValue} ${time.period}`);
        }
    };

    const handlePeriodChange = (e) => {
        const newPeriod = e.target.value;
        setTime(prev => ({ ...prev, period: newPeriod }));
        onTimeChange(`${time.hour} ${newPeriod}`);
    };

    return (
        <>
            <div className={timeInputStyles['time-input-container']}>
                <AiOutlineClockCircle color='#344054' />
                <input
                    type="text"
                    placeholder="00:00"
                    value={time.hour}
                    onChange={handleHourChange}
                    title='Input time in HH:MM format'
                />
                <select value={time.period} onChange={handlePeriodChange}>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
        </>
    );
};

export default TimeInput;
