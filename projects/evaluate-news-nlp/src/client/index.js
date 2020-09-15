// Need to import or webpack won't know it exists
import { test_url } from './js/testurl'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//console.log(checkForName);
const serverport = 8085;
const serverURLroot = `http://localhost:${serverport}`;

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", urlSubmitted);

/* Function called by event listener */
function urlSubmitted() {
  console.log('URL entered');
  let newURL = document.getElementById('source_url').value;
  if(test_url(newURL)) {
    console.log();
    urlNLP(`${serverURLroot}/process_nlp_url?url=${document.getElementById('source_url').value}`)
      .then(function(data) { // seems to be required for nested promises and exposing data in this fashion
        console.log('Back from urlNLP and returned value is ', data);
        UpdatePage(data);
      });
    }
    else {
      alert('Your URL must be a valid HTTP (only) URL to be processed');
    }
};

/* GET Project Data from server and update the page */
const UpdatePage = (data) => {
  console.log('Update Page start');
  document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
  // document.getElementById('full_results_area').innerHTML = data;
};

// get NLP for the URL provided
const urlNLP = async (url='') => {
  console.log('Requesting NLP from ', url);
  let response = await fetch(url);
  // console.log('response', response);
  try {
    console.log('awaiting response ...');
    let nlpdata = await response.json();
    console.log('Returned Data obj = ', nlpdata);
    return nlpdata;
  }
  catch(error) {
    console.log('ERROR urlNLP(): ', error);
    // Log and carry on
  };
};

export { // need to export to the named Output webpack library
  test_url
}