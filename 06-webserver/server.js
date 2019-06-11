const express = require('express')
const app = express();
const hbs = require('hbs');
 
app.use(express.static(__dirname + '/public'));

// express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  res.render('home',{
      nombre: 'Esteban',
      anio: new Date().getFullYear()
  });
})

app.get('/about', function (req, res) {
    res.render('about',{
        nombre: 'Esteban',
        anio: new Date().getFullYear()
    });
  })

// app.get('/data', function (req, res) {
    
//   res.send('Hola DATA')
//     // res.send(salida);
// })
 
app.listen(3000);
console.log('Escuchando en el puerto: 3000');