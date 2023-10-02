import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from "react";
import DigitalClock from './DigitalClock';
var id;
export const Watch = () => {
    const [time, setTime] = useState(0);
    const [timeStarted, setTimeStarted] = useState(false);
    const startWatch = () => {
        id = setInterval(() => {
            // setTime(time+1)// always start from zero
            setTime(
                (prev) => prev + 1
            )
        }, 1000)
        setTimeStarted(true)
    }
    const stopWatch = () => {
        clearInterval(id);
        setTimeStarted(false);
    }
    const resetWatch = () => {
        setTime(0);
        clearInterval(id);
        setTimeStarted(false);
    }
    return (
        <div className="timer-div">
            <DigitalClock/>
            <h1>Timer</h1>
            <h3>{time}</h3>
            <ButtonGroup className='btn' variant="contained" aria-label="outlined primary button group">
                <Button disabled={timeStarted} onClick={() => startWatch()} style={{ background: "#1667C2" }}>Start</Button>
                <Button onClick={() => stopWatch()}>Stop</Button>
                <Button onClick={() => resetWatch()} style={{ background: "#1667C2" }}>Reset</Button>
            </ButtonGroup>
        </div>
    );
}