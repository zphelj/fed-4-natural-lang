import { UpdatePage } from '../src/client/js/submithandling'

describe("Testing UpdatePage() functionality", () => {
  test("Testing the UpdatePage() function", () => {
    // Set up our document body
    document.body.innerHTML =
    '<div id="nlp_key_results">' +
    '  <div id="agreement">Make a request and see!</div>' +
    '  <div id="confidence"></div>' +
    '  <div id="irony"></div>' +
    '</div>';
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