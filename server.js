import express from 'express';
import router from './src/Routers/APIs';
import {allowCrossDomain} from './src/Middlewares/CORSmiddleware'

let app = express();

//Server Middlewares configuration part
app.use(allowCrossDomain);

//start router
router(app);

//port
app.listen(10000, function () {
  console.log('SuWon church API Server listening on port 10000!')
});
