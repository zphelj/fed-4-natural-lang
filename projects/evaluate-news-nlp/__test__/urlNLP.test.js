import { urlNLP } from '../src/client/js/submithandling'

// needed to resolve ReferenceError: regeneratorRuntime is not defined errors
require('regenerator-runtime/runtime');

// need a mock fetch
const test_response = 'peanut butter';
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(test_response),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Testing urlNLP() functionality", () => {
  test("Testing the urlNLP() function", () => {
    const url_fail1 = 'http://bbc.com';
    urlNLP(url_fail1).then(data => {
      expect(data).toBe('peanut butter');
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
})});