const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const routesScripts = require('./routes');
const {hostname, port, connectURI, secretSessionKey} = require('./config');

const app = express();
const router = express.Router();

//-------- MONGO DB -------
mongoose.connect(connectURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//-------- APP ------
app.use(bodyParser());

const isProduction = process.env.NODE_ENV === 'production';
const origin = isProduction ? 'https://mojadomena.com' : 'http://localhost:8080';
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
  session({
    secret: secretSessionKey,
    store: MongoStore.create({ mongoUrl: connectURI }),
}));

app.use(express.static(__dirname + '/client/dist'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api', routesScripts(router));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client','dist','index.html'));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
