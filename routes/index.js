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

  var query = Product.find(function(err, p) {
    if(err) {return next(err); }

 var p =  query.exec(tmp);
    console.log(p);
    res.json(p);

  });

});


/*Express param function to get post and be able to use :post */
router.param('productID', function(req, res, next, id) {
  var query = Product.findById(id);

  query.exec(function (err, productID) {
    if (err) {return next(err); }
    if (!post) {return next(new Error('cant find post')); }

    req.productID = productID;
    return next();
  });
});



/*GET product page using product ID  */
router.get('/posts/:productID', function(req, res) {
  res.json(req.product);
})










module.exports = router;
