const calculadora = require("../src/index.js");

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const sum = require('./index');
// //import appNumbersRomans from '../src/main.js';

describe("operaciones suma", function() {
    test("adds 1+2 to equal 3", function() {
        expect(calculadora.sum(1, 2)).toBe(3);
    });
    test("adds 1+2 to equal 3", function() {
        expect(calculadora.sum((-1), (-2))).toBe(-3);
    });
    test("adds 1-2 to equal 1", function() {
        expect(calculadora.rest(2, 1)).toBe(1);
    });
    test('multiplicar 2*2 da 4', function(){
        expect(calculadora.multiplicar(2, 2)).toBe(4);
    });
    test('dividir 12*2 da 6', function(){
        expect(calculadora.dividir(12, 2)).toBe(6);
    });

});