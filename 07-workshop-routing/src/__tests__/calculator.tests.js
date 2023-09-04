import { calculator } from "../utils/calculator";

describe("Calculator", () => {
    test("Add two positive number", () => {
        let firstNumber = 5;
        let secondNumber = 7;
        let expectedResult = 12;
        
        const actualResult = calculator.sum(firstNumber, secondNumber);
    
        expect(actualResult).toBe(expectedResult);
    
    });
    
    test("Add undefind to a positive number", () => {
        expect(calculator.sum(2)).toBe(NaN);
    });

});

