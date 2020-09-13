// we have several variables coming from the environment
const dotenv = require('dotenv');
const result = dotenv.config()
if (result.error) {
  throw result.error
}
// console.log(result.parsed)
// ENV loaded properly
const meaningCloudAPIkey = process.env.MEANINGCLOUD_API_KEY;
const serverport = process.env.NLP_SERVER_PORT;

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
// const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
res.sendFile('dist/index.html')
// res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/process_nlp_url', function (req, res) {
  console.log('POST: NLP requested:');
  console.log("URL = ", req.body.url);
  res.send(projectData);
});

// debug testing
app.get('/hello', (req, res) => {
  console.log('GET: Hello was requested');
  res.send("Hello World!");
});

/* app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
}) */

// designates what port the app will listen to for incoming requests
app.listen(serverport, function () {
  console.log(`Natural Language Server app listening on port ${serverport}!`);
  console.log(`Your MeaningCloud API key is ${meaningCloudAPIkey}`);
});