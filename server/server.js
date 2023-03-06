import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Restaurant from './models/restaurant.mjs';

const app = express();
app.use(express.json());
app.use(cors());


// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

//add new restaurant
app.post('/api/restaurants', async (req, res) => {
    const { name, team } = req.body;
    try {
        const restaurant = await Restaurant.create({ name, team });
        res.json(restaurant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while adding the restaurant.' });
    }
});

//retrieve all restaurants for that team
app.get('/api/restaurants/:team', async (req, res) => {
    const team = req.params.team;
    try {
        const restaurantList = await Restaurant.find({ team });
        if (restaurantList.length === 0) {
            res.status(404).send({ message: `No restaurants found for team ${team}` });
            return;
        }
        // const restaurantNames = restaurantList.map(restaurant => restaurant.name);
        // res.send(restaurantNames);
        res.send(restaurantList)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while retrieving restaurants.' });
    }
});

//delete all restaurants for that team
app.delete('/api/restaurants/:team/reset', async (req, res) => {
    const team = req.params.team;
    try {
        const result = await Restaurant.deleteMany({ team });
        if (result.deletedCount === 0) {
            res.status(404).json({ error: 'No restaurants submitted for this team.' });
        } else {
            res.json({ message: `Deleted ${result.deletedCount} restaurants for team ${team}.` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the restaurants.' });
    }
});

// get a random restaurant for that team
app.get('/api/restaurants/:team/random', async (req, res) => {
    const { team } = req.params;
    try {
        const restaurantList = await Restaurant.find({ team });
        if (restaurantList.length === 0) {
            res.status(404).send({ message: `No restaurants found for team ${team}` });
            return;
        }
        const randomIndex = Math.floor(Math.random() * restaurantList.length);
        const randomRestaurant = restaurantList[randomIndex];
        res.send({ name: randomRestaurant });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while retrieving restaurants.' });
    }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
