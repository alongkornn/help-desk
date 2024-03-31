const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const { readdirSync,  } = require('fs')
const connectDB = require('./config/db');


// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


readdirSync('./routes').map((item) => {
    app.use('/', require('./routes/' + item));
})

const port = 3000;
app.listen(port, () => {
    connectDB();
    console.log('Server is running on port ' + port);
})