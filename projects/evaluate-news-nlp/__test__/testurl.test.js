import { test_url } from '../src/client/js/testurl'

const url_fail1 = 'not-a-chance';
const url_fail2 = 'https://not-a-chance';
const url_pass = 'http://bbc.com';

describe("Testing the URL testing functionality", () => {
  test("Testing the handleSubmit() function", () => {
         expect(test_url(url_fail1)).toEqual(false);
         expect(test_url(url_fail2)).toEqual(false);
         expect(test_url(url_pass)).toEqual(true);
})});