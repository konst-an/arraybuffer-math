import Magician from '../src/Magician';

test('Атака без дурмана считается правильно', () => {
    const magician = new Magician(100);
    magician.distance = 2;

    expect(magician.attack).toBe(90);
});

test('Атака с дурманом считается правильно', () => {
    const magician = new Magician(100);
    magician.distance = 2;
    magician.stoned = true;

    expect(magician.attack).toBe(85);
});

test('Атака не может быть отрицательной', () => {
    const magician = new Magician(100);
    magician.distance = 20;
    magician.stoned = true;

    expect(magician.attack).toBe(0);
});

test('Сеттер attack обнуляет отрицательное значение', () => {
    const magician = new Magician(100);
    magician.attack = -50;
    expect(magician.attack).toBe(0);
});

test('Сеттер distance не позволяет ставить < 1', () => {
    const magician = new Magician(100);
    magician.distance = 0;
    expect(magician.distance).toBe(1);
});

test('Сеттер distance позволяет ставить >= 1', () => {
    const magician = new Magician(100);
    magician.distance = 5;
    expect(magician.distance).toBe(5);
});

test('Геттер и сеттер stoned работают правильно', () => {
    const magician = new Magician(100);
    expect(magician.stoned).toBe(false);
    
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
});