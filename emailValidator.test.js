import { describe, test, expect } from 'vitest';
import { isValidEmail } from './emailValidator';

describe('isValidEmail', () => {
  test('returns true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('returns false if there is no @ symbol', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('returns false if there is no text before @', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  test('returns false if there is no text after @', () => {
    expect(isValidEmail('test@')).toBe(false);
  });

  test('returns false if the domain does not contain a dot', () => {
    expect(isValidEmail('test@examplecom')).toBe(false);
  });

  test('returns false if the dot is the last character in the domain', () => {
    expect(isValidEmail('test@example.')).toBe(false);
  });

  test('returns false if there is a space in the email', () => {
    expect(isValidEmail('test@exa mple.com')).toBe(false);
  });
});

