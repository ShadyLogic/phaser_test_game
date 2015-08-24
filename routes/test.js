
/*
 * GET test page.
 */
 console.log("TEST PAGE");

exports.index = function(req, res){
  res.render('test', { title: 'Express - TEST' })
};