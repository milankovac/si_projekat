const mongose = require('mongoose')

const Plot = mongose.model('Plot',{
  title:{
      type: String
  },
  coordinates:{
      type: String
  },
  userId:{
      type: String,
      required: true
  }

});
module.exports = Plot;