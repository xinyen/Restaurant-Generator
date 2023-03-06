import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

function Reset() {
    const [teamName, setTeamName] = useState('');
    const [message, setMessage] = useState('');

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5050/api/restaurants/${teamName}/reset`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setMessage(`All restaurants for team ${teamName} have been removed.`);
        } else {
            setMessage(`Team does not exist or no restaurants added`);
        }
    };

    const handleViewAll = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5050/api/restaurants/${teamName}`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setMessage(`All restaurants for team ${teamName}: ${data}`);
        } else {
            setMessage(`Team does not exist or no restaurants added`);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Reset!</h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="teamName">Team Name:</label>
                <input type='text' id='teamName' value={teamName} onChange={handleTeamNameChange} />

                <button type="submit" style={{ marginTop: '10px' }} className="random-button">Reset Suggestions</button>
                <br></br>
                <p className="message">{message}</p>
            </form>
        </div>
    )
}

export default Reset;