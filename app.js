const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const app = express();
const port = process.env.PORT || 3000;

require('./config/db')

app.use(bodyParser.json());
app.use(userRouter)
app.get('/',(require, response)=>{
    response.send('Index Page')
});

app.listen(port, () =>{
    console.log('Server is up on port 3000.')
})