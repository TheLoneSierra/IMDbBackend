const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

const celebrityRoute = require('./src/routes/celebrityRoute');
const genreRoute = require('./src/routes/genresRoute');
const authRouter = require('./src/routes/authRouter');
const topTenRouter = require('./src/routes/topTenrouter')
const exploringRouter = require('./src/routes/exploringRouter')

const app = express();


app.use(cors({
    origin: ['http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));  //middleware for cross origin reqs
app.use(express.json());  //middleware to parse json

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));


//routes
app.use('/api', celebrityRoute);
app.use('/api', genreRoute);
app.use('/auth', authRouter);
app.use('/api', topTenRouter);
app.use('/api', exploringRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})