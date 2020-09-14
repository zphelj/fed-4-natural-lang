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
/* callMeaningCloud = (url='') => {
  console.log(`Requesting NLP on ${url}`);
  const response = fetch(url)
    .then(function(data) {
      return data.JSON();
    })
  return response;
}; */
/* callMeaningCloud = (url='') => {
  console.log(`Requesting NLP on ${url}`);
  fetch(url)
    .then(res => res.json())
    .then(function(json) {
      console.log('Result = ', json);
      return json;
    })
}; */

app.get('/', function (req, res) {
res.sendFile('dist/index.html')
// res.sendFile(path.resolve('src/client/views/index.html')) // - pre-webpack
})

/* take the provided URL and call out to the NLP provider for processing */
app.get('/process_nlp_url', function (req, res) {
  console.log('GET: NLP requested:');
  console.log('URL = ', req.query.url);
  let mcURL = `${MeaningCloudURLRoot}&url=${req.query.url}`
  console.log('Querying Meaning Cloud with: ', mcURL);
  fetch(mcURL)
    .then(res => res.json())
    .then(function(json) {
      console.log("Status is ", json.status);
      // res.send(JSON.stringify(json.status)); // send back a readable response
      // build a summary + all response to the client
      let summary = {
        'status': json.status.msg,
        'agreement': json.agreement,
        'confidence': json.confidence,
        'irony': json.irony
      };
      res.send(JSON.stringify(summary)); // send back a readable response
    })
});

// for testing server access
app.get('/hello', (req, res) => {
  console.log('GET: Hello was requested');
  res.send("Hello from the NLP process server...");
});

/* app.get('/nlp_test', (req, res) => {
  console.log('GET: URL Test was requested');
  fetch(`${MeaningCloudURLRoot}&url=http://jayphelps.name`)
    .then(res => res.json())
    .then(function(json) {
      // console.log('Result = ', json);
      console.log("Status is ", json.status.msg);
      res.send(JSON.stringify(json.status)); // send back a readable response
    })
}); */

// Startup the server instance
app.listen(serverport, function () {
  console.log(`Natural Language Server app listening on port ${serverport}!`);
  console.log(`Your MeaningCloud API key is ${meaningCloudAPIkey}`);
});