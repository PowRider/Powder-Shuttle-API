import { Router } from 'express';
import Services from ' ./services';


const router = new Router();


router.get('/', (req, res) => {
    return Services.booking.all()
        .then(questions => {
            return res.json(questions);
        })
        .catch(err => {
            return res.json(err);
        });
});


export default router;
// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
