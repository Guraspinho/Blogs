const express = require ('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
require('dotenv').config();
const homeRouter = require('./routes/Home-Blogs');


const app = express();


app.set('view engine', 'ejs');
ejs.delimiter = '%';

// middleware & static files

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
  });

app.use(express.static('styles'));

app.use(express.urlencoded({ extended: true }));



// This returns all the pages
app.use(homeRouter);



// 404 page

app.use((req,res) => {res.status(404).render('404', {title:'Error'}); });


const port = process.env.PORT || 5000;

const start = async () =>
{
    try
    {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, (req,res) =>
        {
            console.log(`Server listening to port ${port}...`);
        });
    }
    catch (error)
    {
        console.log(error);    
    }
}


start();


