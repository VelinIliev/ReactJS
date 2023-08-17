import React from 'react'

let titles = {
    0: "Start",
    1: "First Blood",
    2: "Doble Kill",
    3: "Triple Kill",
}

const Counter = (props) => {
    const [counter, setCounter] = React.useState(0);

    const onButtonClickIncrease = (e) => {
        setCounter(OldCounter => OldCounter + 1);
    }
    const onButtonClickDecrease = (e) => {
        setCounter(OldCounter => OldCounter - 1);
    }
    const onButtonClickClear = (e) => {
        setCounter(0);
    }
    let title = ""

    if (counter in titles) {
        title = titles[counter]
    } else {
        title = 'Unstopable'
    }

    return (
        <div>
            <p style={{fontSize: '1.3rem', color: "red", fontWeight: "bold"}}>
                Kills: {counter} - {title}
            </p>

            {counter > 0
                ? <button onClick={onButtonClickDecrease}>-</button>
                : null}

            {props.canReset && <button onClick={onButtonClickClear}>0</button>}

            {counter < 10
                ? <button onClick={onButtonClickIncrease}>+</button>
                : null}

        </div>
    )
}

export default Counter;