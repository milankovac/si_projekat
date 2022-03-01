const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.get('/',(require, response)=>{
    response.send('Index Page')
});

app.listen(port, () =>{
    console.log('Server is up on port 3000.')
})