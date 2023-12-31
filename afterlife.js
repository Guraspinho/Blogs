const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const homeRouter = require('./routes/Home-Blogs');


const app = express();
const ejs = require('ejs');



const dbURI = 'mongodb+srv://fenrirr:F0rrealurad@blogs.feq6u4r.mongodb.net/Blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(() => 
{
    app.listen(3000, (req,res) =>
{
    console.log('Server listening to port 3000...');
});
})
.catch(err => console.log(err));


app.set('view engine', 'ejs');
ejs.delimiter = '%';

// middleware & static files
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
  });

app.use(express.static('styles'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));


// This returns all the pages
app.use(homeRouter);



// 404 page

app.use((req,res) =>
{
    res.status(404).render('404', {title:'Error'});
});
