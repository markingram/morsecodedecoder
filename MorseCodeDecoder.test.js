const decode = require('./MorseCodeDecoder')
const each = require('jest-each');

test.each`
    input    | expected
    ${'.-'}  | ${'A'}
    ${'-...'}  | ${'B'}
    ${'-.-.'}  | ${'C'}
    ${'-..'}  | ${'D'}
    ${'.'}  | ${'E'}
    ${'..-.'}  | ${'F'}
    ${'--.'}  | ${'G'}
    ${'....'}  | ${'H'}
    ${'..'}  | ${'I'}
    ${'.---'}  | ${'J'}
    ${'-.-'}  | ${'K'}
    ${'.-..'}  | ${'L'}
    ${'--'}  | ${'M'}
    ${'-.'}  | ${'N'}
    ${'---'}  | ${'O'}
    ${'.--.'}  | ${'P'}
    ${'--.-'} | ${'Q'}
    ${'.-.'}  | ${'R'}
    ${'...'}  | ${'S'}
    ${'-'}  | ${'T'}
    ${'..-'}  | ${'U'}
    ${'...-'}  | ${'V'}
    ${'.--'}  | ${'W'}
    ${'-..-'}  | ${'X'}
    ${'-.--'}  | ${'Y'}
    ${'--..'}  | ${'Z'}
    ${'.----'} | ${'1'}
    ${'..---'} | ${'2'}
    ${'...--'} | ${'3'}
    ${'....-'} | ${'4'}
    ${'.....'} | ${'5'}
    ${'-....'} | ${'6'}
    ${'--...'} | ${'7'}
    ${'---..'} | ${'8'}
    ${'----.'} | ${'9'}
    ${'----'} | ${'0'}
`('$input decodes to $expected', ({input, expected}) => {
    expect(decode(input)).toBe(expected);
});

test('unrecognised character is a RangeError', () => {
    expect(() => {decode('error')}).toThrowError(RangeError);
});

test('word decoded', () => {
    expect(decode('.... . .-.. .-.. ---')).toBe('HELLO');
});

test('sequence of words decoded', () => {
    expect(decode('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
});