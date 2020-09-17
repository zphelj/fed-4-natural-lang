import { UpdatePage } from '../src/client/js/submithandling'

describe("Testing UpdatePage() functionality", () => {
  test("Testing the UpdatePage() function", () => {
    // Set up our document body
    document.body.innerHTML =
    '<input id="source_url" type="text" name="input_source_url" value="TESTINGURL" placeholder="Source URL">' +
    '<div id="nlp_key_results">' +
    '  <div id="results_url"></div>' +
    '  <div id="agreement">Make a request and see!</div>' +
    '  <div id="confidence"></div>' +
    '  <div id="irony"></div>' +
    '</div>' +
    '<div id="myFooter"></div>';

    // setup the input
    let data = {
      'agreement': 'DISAGREE',
      'confidence': '42',
      'irony': 'yes'
    }
    // test our mock setup and initial state
    expect(document.getElementById('agreement').innerHTML).toEqual('Make a request and see!');
    UpdatePage(data);
    // test that initial state has changed to what we expect for the given input
    expect(document.getElementById('agreement').innerHTML).toEqual('Agreement: DISAGREE');
})});