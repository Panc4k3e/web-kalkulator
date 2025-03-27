import { fizzbuzz } from "./fizzbuzz.js";
import test from 'node:test';
import * as assert from 'node:assert';

test('fizzbuzz(1) returnerer "1"', () => {
    assert.strictEqual(fizzbuzz(1), "1");
});

test('fizzbuzz(3) returnerer "Fizz"', () => {
    assert.strictEqual(fizzbuzz(3), "Fizz");
});

test('fizzbuzz(5) returnerer "Buzz"', () => {
    assert.strictEqual(fizzbuzz(5), "Buzz");
});

test('fizzbuzz(15) returnerer Fizzbuzz', () => {
    assert.strictEqual(fizzbuzz(15), "fizzbuzz");
});