var express = require('express');
var router = express.Router();


var miinfo = {
  cuenta:"0801-1994-17010",
  nombre:"Juan Carlos Hernandez Reyes",
  correo:"juancarlos.hernandez@bi-dss.com",
  examen:"primer parcial"
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/suma', function(req, res, next) {
  res.render('suma', { title: 'Express' });
});

router.post('/suma', function(req, res, next) {
	var n1 = req.body.valor1;
	var n2 = req.body.valor2;
	var suma = parseInt(n1)+parseInt(n2);
	res.json(suma);
});

router.get('/0801-1994-17010',
   function(req,res,next){
       res.json(miinfo);
   }
 );

module.exports = router;
  