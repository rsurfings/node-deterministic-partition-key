const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  test('returns trivial partition key when given no input', () => {
    const expected = "0";
    const result = deterministicPartitionKey();
    expect(result).toEqual(expected);
  });

  test('returns partition key when given event with partition key', () => {
    const expected = "test-partition-key";
    const event = { partitionKey: expected };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(expected);
  });

  test('returns partition key when given valid event', () => {
    const event = { key1: "value1", key2: "value2" };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toEqual('string');
    expect(result.length).toBeGreaterThan(0);
  });
});