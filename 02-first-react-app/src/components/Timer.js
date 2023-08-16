import React from 'react';


const Timer = (props) => {
    const [seconds, setSeconds] = React.useState(props.start);

    setTimeout(() => {
        setSeconds(seconds + 1)
    }, props.speed);

    let minutes = Math.floor(seconds / 60);
    let newSeconds = seconds - (minutes * 60);

    if (newSeconds < 10) {
        newSeconds = "0" + newSeconds
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    return <h3>Time: {minutes}m  {newSeconds}s</h3>
}

export default Timer;