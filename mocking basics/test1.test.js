test('mock implementation of a basic function', () => {
    const mock = jest.fn(() => 'I am a mock function');
    //or, const mock = jest.fn().mockImplementation(() => 'I am a mock function');
    expect(mock('Calling my mock function')).toEqual("I am a mock function");
    expect(mock).toHaveBeenCalledWith("Calling my mock function");
});

test('mock return value of a function one time', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!');
    mock();
    mock();
    expect(mock).toHaveBeenCalledTimes(2);

    mock('Hello', 'there', 'Steve');
    expect(mock).toHaveBeenCalledWith('Hello', 'there', 'Steve');

    mock('Steve');
    expect(mock).toHaveBeenLastCalledWith('Steve');
})