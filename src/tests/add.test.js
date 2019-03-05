const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test('add two numbers', () =>
{
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('test generate greeting', () => {
    const result = generateGreeting('Rasitha');
    expect(result).toBe('Hello Rasitha!');
});