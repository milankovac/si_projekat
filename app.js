const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const plotRouter = require('./routes/plot')
const treeRouter = require('./routes/tree')
const supplementationRouter = require('./routes/supplementation')
const yieldRouter = require('./routes/yield');
const app = express();
const port = process.env.PORT || 3000;
require('./config/db')

app.use(bodyParser.json());
app.use(userRouter);
app.use(plotRouter);
app.use(treeRouter);
app.use(supplementationRouter);
app.use(yieldRouter);

app.get('/',(require, response)=>{
    response.send('Index Page')
});

app.listen(port, () =>{
    console.log('Server is up on port 3000.')
})