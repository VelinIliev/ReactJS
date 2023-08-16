import React from 'react'

let titles = {
    0: "Start",
    1: "First Blood",
    2: "Doble Kill",
    3: "Triple Kill",
}

const Counter = (props) => {
    const [counter, setCounter] = React.useState(0);
    // const [title, setTitle] = React.useState('Counter')

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

    if (counter in titles){
        title = titles[counter]
    } else {
        title = 'Unstopable'
    }
    
    return (
        <div>
            <h3>Kills: {counter} - {title}</h3>     
            <button onClick={onButtonClickDecrease}>-</button>
            <button onClick={onButtonClickClear}>0</button>
            <button onClick={onButtonClickIncrease}>+</button>
        </div>
    )
}

export default Counter;