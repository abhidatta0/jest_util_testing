test('spying using original implementation', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`,
        age: () => `30 mins`,
    };
    const spy = jest.spyOn(pizza, 'name');
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
    expect(spy).toHaveBeenCalledWith('Cheese');
})

test('spying using  mockImplementation', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`,
        age: () => `30 mins`,
    };
    const spy = jest.spyOn(pizza, 'name');
    spy.mockImplementation(n => `Crazy pizza`);
    expect(pizza.name('Cheese')).toBe('Crazy pizza');
    expect(spy).toHaveBeenCalledWith('Cheese');

    spy.mockRestore();
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
})