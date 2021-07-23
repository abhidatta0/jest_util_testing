const functions =  require('./functions');

test('Adds 2+2 to equal 4',()=>{
  expect(functions.add(2,2)).toBe(4);
})


test('Adds 2+2 to equal 4', ()=>{
  expect(functions.add(2, 2)).not.toBe(5);
})

test('Should be null', ()=>{
  expect(functions.isNull()).toBeNull();
})

test('Should be null', ()=>{
  expect(functions.isNull()).not.toBeUndefined();
})

test('Should be falsy', ()=>{
  expect(functions.checkValue(null)).toBeFalsy();
})

test('Should be falsy', ()=>{
  expect(functions.checkValue(0)).toBeFalsy();
})

test('Should be falsy', ()=>{
  expect(functions.checkValue(undefined)).toBeFalsy();
})

test('Should be truthy', ()=>{
  expect(functions.checkValue(1)).toBeFalsy();
})
