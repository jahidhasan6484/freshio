import React from "react";
import './Timer.css';

const Timer = ({days, hours, minutes, seconds}) => {
    return (
        <div className="timer">
            <div>
                <p className="timer_data">{days}</p>
                <p>Days</p>
            </div>
            <div>
                <p className="timer_data">{hours}</p>
                <p>Hours</p>
            </div>
            <div>
                <p className="timer_data">{minutes}</p>
                <p>Minutes</p>
            </div>
            <div>
                <p className="timer_data">{seconds}</p>
                <p>Seconds</p>
            </div>
        </div>
    )
}

export default Timer;