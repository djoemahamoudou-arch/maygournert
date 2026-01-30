const http = require('http');

const app = require('./app');


const port = 2200;

app.set(port);
const monServeur = http.createServer(app);










monServeur.listen(port,()=>{
  console.log("mon port",port); 
});