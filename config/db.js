const mongoose = require('mongoose')
//const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/si_projekat';
const CONNECTION_URI = 'mongodb+srv://user:user@cluster0.etvtg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URI, {})