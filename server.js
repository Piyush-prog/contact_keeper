const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => {
    res.json({msg:'Welcome to the Contact Keeper API.'})
})

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000;
//We use PORT from the environment variable or local port. Also, we've set a callback to see if the server starts successfully.
app.listen(PORT, ()=> {
    console.log(`Server Started on Port ${PORT}`);
});