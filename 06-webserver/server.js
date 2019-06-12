const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('home',{
      nombre: 'Esteban',
      anio: new Date().getFullYear()
  });
})

app.get('/about', function (req, res) {
    res.render('about',{
        anio: new Date().getFullYear()
    });
  })

// app.get('/data', function (req, res) {
    
//   res.send('Hola DATA')
//     // res.send(salida);
// })
 
app.listen(port,()=>{
  console.log('Escuchando en el puerto: ',port);
});
