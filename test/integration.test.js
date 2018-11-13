// Smoke test.
test('add 1 + 2', () => {
  expect(1 + 2).toBe(3);
});

const Microcache = require('../index');
const Backbone = require('backbone');

describe("Data output condition", () => {
  let microcache;
  let server;
  beforeAll(() => {
    server = require('./dataServer');
  });
  afterAll(done => {
    server.close(done);
  });

  beforeEach(() => {
    microcache = new Microcache();
  });
  test('Should be an initiator', () => {
    expect(microcache).not.toBeUndefined();
  });
  test('Should return a Backbone Collection', () => {
    expect(microcache instanceof Backbone.Collection).toBeTruthy();
  });
  test('Return data should have output function', () => {
    expect(typeof  microcache.output).toBe('function');
  });
  test('Return data output should be an array', () => {
    const output = microcache.output();
    expect(output instanceof Array).toBeTruthy();
  });
});