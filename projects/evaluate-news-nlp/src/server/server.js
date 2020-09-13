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

// brings window.fetch to node server side apps
const fetch = require('node-fetch');

// &url=[URL] needs to be appended to this before calling, default return is JSON
//const MeaningCloudResponse = require('./callMeaningCloud.js')
const MeaningCloudURLRoot = `https://api.meaningcloud.com/sentiment-2.1?key=${meaningCloudAPIkey}&lang=en`;

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
//const { callMeaningCloud } = require('./callMeaningCloud');

const app = express()

app.use(express.static('dist'))

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

// get the NLP response for the provided URL
callMeaningCloud = async (url='') => {
  console.log(`Requesting NLP on ${url}`);
  const response = await fetch(url);
  // console.log('response', response);
  try {
    urlData = await response.json();
    //console.log('Returned Weather Data obj = ', weatherData);
    return urlData;
  }
  catch(error) {
    console.log('ERROR callMeaningCloud(): ', error);
    // Log and carry on
  };
};

app.get('/', function (req, res) {
res.sendFile('dist/index.html')
// res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/process_nlp_url', function (req, res) {
  console.log('POST: NLP requested:');
  console.log("URL = ", req.body.url);
});

// for testing server access
app.get('/hello', (req, res) => {
  console.log('GET: Hello was requested');
  res.send("Hello from the NLP process server...");
});

app.get('/nlp_test', (req, res) => {
  console.log('GET: URL Test was requested');
  let data = callMeaningCloud(`${MeaningCloudURLRoot}&url=http://jayphelps.name`)
  //console.log("Status is ", data.body.status.msg);
  console.log(data);
  res.send(JSON.stringify(data)); // send back a readable response
});

// Startup the server instance
app.listen(serverport, function () {
  console.log(`Natural Language Server app listening on port ${serverport}!`);
  console.log(`Your MeaningCloud API key is ${meaningCloudAPIkey}`);
});