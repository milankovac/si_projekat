const express = require('express')
const app = express();


app.get('',(require, response)=>{
    response.send('Index')
});

app.listen(3000, () =>{
    console.log('Server is up on port 3000.')
})