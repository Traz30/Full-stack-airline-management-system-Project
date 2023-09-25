const express = require('express');
const mongoose = require("mongoose");
const FlightData = require('./flightSchema'); 
const data = require('./data.json'); 
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 4001;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const DB = "mongodb+srv://trisharoytrm:fOR4J8rZxANeeikL@cluster0.bridmsu.mongodb.net/"
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("Error in connecting to server", error);
    });

    async function addData() {
        try {
            await FlightData.insertMany(data);
            console.log("Information inserted into database");
        } catch (error) {
            console.error('Error in inserting data');
        }
    }

    // addData(); 


    // fetch flights data
    app.get('/flights', async (req, res) => {
        try {
            const departureCity = req.query.departureCity;
            const arrivalCity = req.query.arrivalCity;
    
            if (!departureCity || !arrivalCity) {
                return res.status(400).json({ error: 'Departure and arrival cities are required.' });
            }
    
            const flights = await FlightData.find({
                departure_airport: departureCity,
                arrival_airport: arrivalCity
            });
    
            res.json(flights);
            console.log(flights);
        } catch (error) {
            console.error('Error fetching flight data:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

