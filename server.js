import express from 'express';
import router from './src/Routers/APIs'
let app = express();


//start router
router(app);


//port
app.listen(10000, function () {
  console.log('Example app listening on port 10000!')
})
