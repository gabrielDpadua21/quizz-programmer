import React from "react";
import styles from "../styles/Timer.module.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TimerProps {
    key: any
    duration: number;
    time_lost: () => void;
}

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
    return (
        <div className={styles.times}>
            <CountdownCircleTimer 
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.time_lost}
                colors={['#BCE596', '#F7B801','#ED827A']}
                colorsTime={[5, 2, 0]}
            >
                {({ remainingTime }) => <div>{remainingTime}</div>}
            </CountdownCircleTimer>
        </div>
    )
}

export default Timer;