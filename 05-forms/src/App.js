import React, { useEffect } from 'react';

import './App.css';

function App() {
    const ref = React.useRef();
    const [hobbies, setHobbies] = React.useState({
        "hiking": false,
        "reading": false,
        "sports": false
    });

    const [formValues, setFormValues] = React.useState({
        "username": "Pesho",
        "occupation": 'frontend',
        "gender": 'male',
        "bio": '',
        "age": null,
        'hobbies': {}
    });

    const onChangeHandler = (e) => {
        // console.log(ref.current.value);
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };
    const onSubmitControlled = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(hobbies);
    };

    const displayHobbies = () => {
        let currentHobbies = []
        for (const key in hobbies) {
            if (hobbies[key]=== true) {
                currentHobbies.push(key)
            };
        }
        ref.current.value = currentHobbies.join(", ")
    }
    const onHobbiesChange = (e) => {
        setHobbies(state => ({ ...state, [e.target.value]: e.target.checked }));
        displayHobbies();
    };


    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmitControlled}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder='enter username'
                            value={formValues.username}
                            onChange={onChangeHandler}
                        >
                        </input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="age">Age:</label>
                        <br />
                        <input
                            type='number'
                            name='age'
                            id='age'
                            value={formValues.age ?? ""}
                            onChange={onChangeHandler} />
                    </div>

                    {Number(formValues.age) >= 18 ? <h4>Great</h4> : <br />}

                    <div>
                        <label htmlFor="occupation">Occupation:</label>
                        <br />
                        <select name="occupation" id="occupation" value={formValues.occupation}
                            onChange={onChangeHandler}>
                            <option value="it">IT</option>
                            <option value="frontend">front-end</option>
                            <option value="backend">back-end</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor='male'>Male: </label>
                        <input type='radio' name="gender" id='male'
                            value="male" onChange={onChangeHandler} checked={formValues.gender === 'male'} />
                        <br />
                        <label htmlFor='female'>Female: </label>
                        <input type='radio' name="gender" id='female'
                            value="female" onChange={onChangeHandler} checked={formValues.gender === 'female'} />
                        <br />
                        <label htmlFor='other'>Other: </label>
                        <input type='radio' name="gender" id='other'
                            value="other" onChange={onChangeHandler} checked={formValues.gender === 'other'} />

                    </div>
                    <br />
                    <div>
                        <label htmlFor='bio'>Biography: </label>
                        <br />
                        <textarea name="bio" id="bio" cols="30" rows="10"
                            value={formValues.bio} onChange={onChangeHandler}></textarea>
                    </div>
                    <br />
                    <div>
                        <label>Hobbies:</label>
                        <br />
                        <input type='checkbox' name='hobbies' id='hiking'
                            value='hiking' onChange={onHobbiesChange} checked={hobbies['hiking']}></input>
                        <label htmlFor='hiking'>Hiking</label>
                        <br />
                        <input type='checkbox' name='hobbies' id='reading'
                            value='reading' onChange={onHobbiesChange} checked={hobbies['reading']}></input>
                        <label htmlFor='reading'>Reading</label>
                        <br />
                        <input type='checkbox' name='hobbies' id='sports'
                            value="sports" onChange={onHobbiesChange} checked={hobbies['sports']}></input>
                        <label htmlFor='sports'>Sports</label>
                    </div>
                    <br />
                    <div>
                        <label htmlFor='uncontrolled'>Uncontrolled:</label>
                        <br />
                        <input type='text' name='uncontrolled' id='uncontrolled' ref={ref}></input>
                    </div>
                    <br />
                    <div>
                        <input type="button" value="Send"
                            onClick={onSubmitControlled} />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
