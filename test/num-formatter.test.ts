import { numFormatter } from '../src';

describe('Number Formatter', () => {
  it('Number less than 1000', () => {
    expect(numFormatter(100)).toEqual('100');
  });
  it('should print K after the formatted number', () => {
    expect(numFormatter(99787)).toEqual('99.8K');
  });
  it('should print M after the formatted number', () => {
    expect(numFormatter(8998787)).toEqual('9.0M');
  });
  it('should print B after the formatted number', () => {
    expect(numFormatter(7699646836)).toEqual('7.7B');
  });
});
