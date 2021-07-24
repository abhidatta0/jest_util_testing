const functions = require('./functions');

describe('a bit advanced matchers', ()=>{
  test('User should be Abhirup Datta object',()=>{
    expect(functions.createUser()).toStrictEqual({
      firstName:"Abhirup",
      lastName:'Datta'
    })
  })

  test('there is no I in team',()=>{
    expect('team').not.toMatch(/I/i);
  })

  test('Admin should be in usernames',()=>{
    usernames = ['john','karen','admin'];
    expect(usernames).toContainEqual('admin');
  })

  test('testing async functions',async ()=>{
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  })
})
