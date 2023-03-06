
import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

function Generate() {
    const [teamName, setTeamName] = useState('');
    const [message, setMessage] = useState('');


    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    };

    //submit button
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5050/api/restaurants/${teamName}/random`);
        if (response.ok) {
            const data = await response.json();
            console.log(data.name)
            setMessage(`Today's Lunch spot for Team ${teamName}: ${data.name.name}`);
        } else {
            setMessage(`Team does not exist or no restaurants added`);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Generate Lunch Spot!</h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="teamName">Team Name:</label>
                <input type="text" id="teamName" value={teamName} onChange={handleTeamNameChange} />

                <button type="submit" style={{ marginTop: '10px' }} className="random-button">Get Random Restaurant</button>
                <br></br>
                <p className="message">{message}</p>
            </form>
        </div>
    );
}

export default Generate;