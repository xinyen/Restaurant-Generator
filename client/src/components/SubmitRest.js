
import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

function Submit() {
  const [restaurantName, setRestaurantName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [message, setMessage] = useState('');

  const handleRestaurantNameChange = (event) => {
    setRestaurantName(event.target.value);
  };

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!teamName || !restaurantName) {
      alert('Please enter values for both fields');
      return;
    }
    event.preventDefault();
    axios.post('http://localhost:5050/api/restaurants', {
      name: restaurantName,
      team: teamName
    })
      .then((response) => {
        setMessage(`Restaurant "${restaurantName}" is suggested to Team "${teamName}"!`);
        setRestaurantName('');
        setTeamName('');
      })
      .catch((error) => {
        console.error(error);
        setMessage('An error occurred while adding the restaurant.');
      });
  };

  return (
    <div className="container">

      <h1 className="text-center">Suggest a restaurant!</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="teamName">Team Name:</label>
        <input type="text" id="teamName" value={teamName} onChange={handleTeamNameChange} />

        <label htmlFor="restaurantName">Restaurant Name:</label>
        <input type="text" id="restaurantName" value={restaurantName} onChange={handleRestaurantNameChange} />

        <button type="submit">Add Restaurant</button>
        <br></br>
        <p className="message">{message}</p>
      </form>
    </div>
  );
}

export default Submit;