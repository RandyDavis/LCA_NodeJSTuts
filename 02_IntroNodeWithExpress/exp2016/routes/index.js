var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function (req, res) {
  // res.send({
  //   users: ['Randy', "Kristen"]
  // });

  // res.render('index', {
  //   title: 'My App!',
  //   age: 36
  // });

  console.log(req.query);
});

router.get('/users', function (req, res) {
  res.send({
    users: ['Joe', 'Will']
  });
});

router.get('/users/:id', function (req, res) {
  res.send(req.params.id, 200);
  console.log(req.params);
})

module.exports = router;
