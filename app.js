const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //This will parse all incoming request and try to extract any data which is in the body if it's of type URLEncoded data, which will be the case for the submitted form. It will also automatically move on to the next middleware after it ie Call next()

app.post('/user', (req, res, next) => {
    res.send('<h1>User: ' + req.body.username + '</h1>');
})

app.get('/', (req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>');
})

app.listen(4000);