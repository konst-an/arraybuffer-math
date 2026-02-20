import Magician from '../src/Magician';

test('Атака без дурмана считается правильно', () => {
    const magician = new Magician();
    magician.distance = 2;

    expect(magician.attack).toBe(90);
});

test('Атака с дурманом считается правильно', () => {
    const magician = new Magician();
    magician.distance = 2;
    magician.stoned = true;

    expect(magician.attack).toBe(85);
});

test('Атака не может быть отрицательной', () => {
    const magician = new Magician();
    magician.distance = 20;
    magician.stoned = true;

    expect(magician.attack).toBe(0);
});