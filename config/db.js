const mongoose = require('mongoose')
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/si_projekat';
mongoose.connect(CONNECTION_URI, {})