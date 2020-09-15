function handleURLsubmit(event) {
  event.preventDefault();
  const serverport = 8085;
  const serverURLroot = `http://localhost:${serverport}`;

  /* Function to be called by event listener */
  console.log('URL entered');
  let newURL = document.getElementById('source_url').value;
  if(Client.test_url(newURL)) {
    Client.urlNLP(`${serverURLroot}/process_nlp_url?url=${document.getElementById('source_url').value}`)
      .then(function(data) { // seems to be required for nested promises and exposing data in this fashion
        console.log('Back from urlNLP and returned value is ', data);
        Client.UpdatePage(data);
      });
    }
    else {
      alert('Your URL must be a valid HTTP (only) URL to be processed');
    }
};

/* GET Project Data from server and update the page */
function UpdatePage(data) {
  console.log('Update Page start');
  document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
};

  // get NLP for the URL provided
async function urlNLP(url='') {
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
  }
};

export {
    handleURLsubmit,
    UpdatePage,
    urlNLP
 }
