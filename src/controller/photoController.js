
export default class photoController {
    constructor() {

    }

    getMethod(req, res, next) {
        console.log('downloading is statting');
        console.log('dowloading!!!!');
        res.send('downloading is finished'); 
    }
}