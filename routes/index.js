
/*
 * GET home page.
 */
 console.log("HOME PAGE");

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};