const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routesScripts = require('./routes');
const {hostname, port, connectURI} = require('./config');
const {pagesSchema} = require('./models/pages');

const app = express();
const router = express.Router();

mongoose.connect(connectURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongooseConnection = mongoose.connection;

app.use(bodyParser());

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','*'); // docelowo zamiast naszej gwiazdki wstawiamy domene
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(express.static(__dirname + '/client/dist'));

app.use('/api', routesScripts(router));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
