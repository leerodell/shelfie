const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const massive = require ('massive')
const ctr = require('./controller')
require("dotenv").config();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    db.init()
    console.log('connected to db')
})



const PORT = 3001;

app.listen(PORT, () => console.log('I\'m listening... ' + PORT));