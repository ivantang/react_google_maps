// router from http://www.iosinsight.com/backend-rest-api-nodejs/

var express = require('express');

var router = express.Router();

// middleware for all requests
// print timestamp in console for debugging
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dataDisplayed(Date.now()));
  next();
});

router.get('/', function(req, res){
  res.json({message: 'what you get from'});
});

module.exports = router;

function dataDisplayed(timestamp) {
  var date = new Date(timestamp);
  return (date.getMonth() + 1 + '/' +
          date.getDate() + '/' +
          date.getFullYear() + " " +
          date.getHours() + ":" +
          date.getMinutes() + ":" +
          date.getSeconds());
}
