const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})
  .then( db => console.log('DB IS CONNECT'))
  .catch( err => console.log(err));