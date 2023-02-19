const express = require('express')
const app = express()
const router = require('./route.js')
const bodyParser = require('body-parser')


const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});
app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => res.send({hello: 'Hello World!'}))

// app.use(cors())


app.listen(port, () => console.log(`Example app listening on port ${port}!`))