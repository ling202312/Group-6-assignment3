import numberCruncher from "../calculation/numberCruncher";

describe('NumberCruncher Integration Tests', () => {
    test('should calculate the sum of two numbers', () => {
        const result = numberCruncher({ numOne: '5', operator: 'add', numTwo: '4' });
        expect(result).toBe(9);
    });

    test('should calculate the difference between two numbers', () => {
        const result = numberCruncher({ numOne: '10', operator: 'subtract', numTwo: '6' });
        expect(result).toBe(4);
    });

    test('should calculate the product of two numbers', () => {
        const result = numberCruncher({ numOne: '5', operator: 'multiply', numTwo: '5' });
        expect(result).toBe(25);
    });

    test('should calculate the quotient of two numbers', () => {
        const result = numberCruncher({ numOne: '8', operator: 'divide', numTwo: '2' });
        expect(result).toBe(4);
    });

    test('should calculate the percentage of two numbers', () => {
        const result = numberCruncher({ numOne: '5', operator: 'percentage', numTwo: '20' });
        expect(result).toBe(25);
    });

    test('should calculate the exponentiation of a number', () => {
        const result = numberCruncher({ numOne: '2', operator: 'exponent', numTwo: '3' });
        expect(result).toBe(8);
    });

    test('should calculate the GCD of two numbers', () => {
        const result = numberCruncher({ numOne: '25', operator: 'gcd', numTwo: '15' });
        expect(result).toBe(5);
    });

    test('should return null for an unknown operator', () => {
        const result = numberCruncher({ numOne: '5', operator: 'unknown', numTwo: '2' });
        expect(result).toBeNull();
    });
});