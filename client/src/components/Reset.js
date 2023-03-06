import React, { useState } from 'react';
import '../css/styles.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

function Reset() {
    const [teamName, setTeamName] = useState('');
    const [restaurantList, setRestaurantList] = useState([]);
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
            handleViewAll(event);
            setRestaurantList([]);
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
            setRestaurantList(data);

        } else {
            setMessage(`Team does not exist or no restaurants added`);
        }
    }

    const columns = [
        {
            dataField: 'name',
            text: 'Restaurants',
        },
    ];

    return (
        <div className="container">
            <h1 className="text-center">Reset!</h1>
            <form onSubmit={handleViewAll} className="form">
                <label htmlFor="teamName">Team Name:</label>
                <input type="text" id="teamName" value={teamName} onChange={handleTeamNameChange} />
                <button type="submit" style={{ marginTop: '10px' }} className="random-button">
                    View list of restaurants for team
                </button>

                <br />
                {restaurantList.length > 0 && (
                    <BootstrapTable
                        keyField="name"
                        data={restaurantList}
                        columns={columns}
                    />
                )}
                <p className="message">{message}</p>

                <button
                    onClick={handleSubmit}
                    style={{ marginTop: '10px' }}
                    className="random-button"
                >
                    Reset Suggestions
                </button>
            </form>
        </div>
    )
}


export default Reset;