const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require("./routes/userRoute");

const app = express();


app.use(cors());
app.use(express.json());


app.use('/users', userRoutes);


mongoose.connect('mongodb://localhost:27017/placecom')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('MongoDB Error:', err);
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});