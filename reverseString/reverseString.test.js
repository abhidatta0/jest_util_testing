const reverseString =  require('./reverseString');

describe('testing reverseString util', ()=>{
  test('reverseString function exists', ()=>{
    expect(reverseString).toBeDefined();
  });

  test('String reverse', ()=>{
    expect(reverseString('hello')).toBe('olleh');
  })

  test('String reverse checking letter casing', ()=>{
    expect(reverseString('Hello')).not.toBe('olleh');
  })
})
