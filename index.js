const express = require('express');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');


//page accuil
app.get('/', (req, res) => {
     res.redirect('/index.html');
});
app.get('/index.html', (req, res) => {
    res.render('./index.ejs');
});


//apk route
app.get('/apk/release.apk', (req, res) => {
    res.sendFile(__dirname+'/www/apk/release.apk');
});


app.get('/authentication', (req, res) => {
    res.sendFile(__dirname+'/www/web/index.html');
});

app.use(express.static('www/web/'));


app.listen(80, () => {
    console.log(`Server started on port 80`);
});