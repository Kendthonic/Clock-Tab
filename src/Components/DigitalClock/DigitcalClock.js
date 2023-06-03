import { useState } from "react";
import './DigitalClock.css';

const DigitalCLock = () => {
    // we initialize the clock by new Date
    // we set it localtimeString = for us to get the time only
    const [clock, setClock] = useState(new Date().toLocaleTimeString())

    // we call a setInterval, it will run the code block after milli seconds
    // so every milli seconds it will do the in between or inside the brackets  
    setInterval(() => {
        setClock(new Date().toLocaleTimeString())
    }, 1000)

    return(
        <div className="main">
            <div className="digital-clock">
                <h1 className="digitalClock">{clock}</h1>
                <h1 className="date">SUNDAY - JUNE 04</h1>
            </div>
        </div>
    )
}

export default DigitalCLock;