import gcd from '../calculation/util/gcd';
import exp from '../calculation/util/exp';
import percentage from '../calculation/util/percentage';

describe('gcd function', () => {
    test('should return the greatest common divisor of two numbers', () => {
        expect(gcd(25, 15)).toBe(5);
        expect(gcd(7, 5)).toBe(1);
        expect(gcd(20, 40)).toBe(20);
    });
});

describe('exp function', () => {
    test('should return the base raised to the exponent', () => {
        expect(exp(2, 3)).toBe(8);
        expect(exp(2, 0)).toBe(1);
        expect(exp(1, 3)).toBe(1);
    });
});

describe('percentage function', () => {
    test('should return the correct percentage', () => {
        expect(percentage(10, 100)).toBe(10);
        expect(percentage(4, 20)).toBe(20);
        expect(percentage(10, 50)).toBe(20);
    });
});