import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
    const [username, setUsername] = React.useState("Pesho");
    const [age, setAge] = React.useState();
    const [occupation, setOccupation] = React.useState('frontend');
    const [gender, setGender] = React.useState('male');
    const [bio, setBio] = React.useState('');
    const [hobbies, setHobbies] = React.useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUsername("Ivan")
        }, 1000)
    }, []);

    const onInputChange = (e) => {
        const username = e.target;
        console.log(username.value);
    };

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const data = Object.fromEntries(formData)
    //     const username = data.username;
    //     console.log(username);
    // }
    const [formValues, setFormValues] = React.useState({
        username: "Pecsho",
        occupation: 'frontend',
        age: null,
        gender: 'male',
        bio: '',
        hobbies: []       
    });
    const onChangeHandler = (e) => {

    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const onAgeChange = (e) => {
        setAge(Number(e.target.value));
    };
    const onSubmitControlled = (e) => {
        // e.preventDefault();
        console.log(username);
        console.log(age);
        console.log(occupation);
        console.log(gender);
        console.log(bio);
        console.log(hobbies);
    }
    const onOccupationChange = (e) => {
        setOccupation(e.target.value);
        console.log(e.target.value);
    };
    const onGenderChange = (e) => {
        setGender(e.target.value)
        console.log(e.target.value);
    }
    const onBioChange = (e) => {
        setBio(e.target.value)
    }
    const onHobbiesChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.checked);
        setHobbies(state => 
            state.includes(e.target.value) 
            ? state.filter(x => x !== e.target.value) 
            : [...state, e.target.value]
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                {/* <form onSubmit={onSubmit}> */}
                <form onSubmit={onSubmitControlled}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder='enter username'
                            // defaultValue={username}
                            // onChange={onInputChange}
                            // disabled
                            // readOnly
                            value={username}
                            onChange={onUsernameChange}
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
                            value={age ?? ""}
                            onChange={onAgeChange} />
                    </div>

                    {age >= 18 ? <h4>Great</h4> : <br />}

                    <div>
                        <label htmlFor="occupation">Occupation:</label>
                        <br />
                        <select name="occupation" id="occupation" value={occupation} onChange={onOccupationChange}>
                            <option value="it">IT</option>
                            <option value="frontend">front-end</option>
                            <option value="backend">back-end</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor='male'>Male: </label>
                        <input type='radio' name="gender" id='male' 
                                value="male" onChange={onGenderChange} checked={gender==='male'}/>
                        <br />
                        <label htmlFor='female'>Female: </label>
                        <input type='radio' name="gender" id='female' 
                                value="female" onChange={onGenderChange} checked={gender==='female'}/>
                         <br />
                        <label htmlFor='other'>Other: </label>
                        <input type='radio' name="gender" id='other' 
                                value="other" onChange={onGenderChange} checked={gender==='other'}/>

                    </div>
                    <br />
                    <div>
                        <label htmlFor='bio'>Biography: </label>
                        <br />
                        <textarea name="bio" id="bio" cols="30" rows="10"
                            value={bio} onChange={onBioChange}></textarea>
                    </div>
                    <br />
                    <div>
                        <label>Hobbies:</label>
                        <br />
                        <input type='checkbox' name='hobbies' id='hiking' 
                            value='hiking' onChange={onHobbiesChange} checked={hobbies.includes('hiking')}></input>
                        <label htmlFor='hiking'>Hiking</label>
                        <br />
                        <input type='checkbox' name='hobbies' id='reading' 
                            value='reading' onChange={onHobbiesChange} checked={hobbies.includes('reading')}></input>
                        <label htmlFor='reading'>Reading</label>
                        <br />
                        <input type='checkbox' name='hobbies' id='sports' 
                            value="sports" onChange={onHobbiesChange} checked={hobbies.includes('sports')}></input>
                        <label htmlFor='sports'>Sports</label>
                        
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
