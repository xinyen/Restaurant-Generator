import { Schema, model, mongoose } from 'mongoose';

// Define the restaurant schema for my restaurants collection
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants');

export default Restaurant;


