var express = require('express');
var router = express.Router();
var mongoose =  require('mongoose');
var Product = mongoose.model('Product');


//console.log(Product);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*GET all products */
router.get('/products', function(req, res, next) {

  var tmp = Product.find(function(err, p) {
    if(err) {return next(err); }


    res.json(tmp);

  });

});


/*GET product page using product ID  */
router.get('/products/:post', function(req, res) {
  Product.findByID(id, function(err, p) {
      if (err)  {next(err); }

    res.json(p);


  })
})










module.exports = router;
