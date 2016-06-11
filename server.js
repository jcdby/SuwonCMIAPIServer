import express from 'express';
import router from './src/Routers/APIs';
import database from './src//Database//database'

let app = express();






// db.once('open', function() {
//   // we're connected!
//   console.log('db is connected!')

//   mongoose.model("gallery",'gallery').find({}, function(err, items) {
//     if (err) throw err;
//             // object of all the users
//      console.log(items);
//   });
  
  
// });

//start router
router(app);


//port
app.listen(10000, function () {
  console.log('Example app listening on port 10000!')
})
