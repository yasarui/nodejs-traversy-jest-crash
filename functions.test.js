const functions = require('./functions');

beforeAll(()=>{
    console.log("Before starting the test");
})

afterAll(()=>{
    console.log("After completing all the test");
})

beforeEach(()=>initDatabse());
afterEach(()=>closeDatabase());

const initDatabse = () => console.log('Database Initiated');
const closeDatabase = () => console.log('Close Database');

//toBe & not.toBe
test("Adding 2+2 is equal to 4",()=>{
    expect(functions.add(2,2)).toBe(4)
    expect(functions.add(2,2)).not.toBe(5);
    expect(functions.add).toBeDefined();
});

//toBe & not.toBe
test("Subtracting 4-2 is equal to 2",()=>{
    expect(functions.sub(4,2)).toBe(2)
    expect(functions.sub(4,2)).not.toBe(3)
});

//toBe & not.toBe
test("Multiplying 2*2 is equal to 4",()=>{
    expect(functions.mul(2,2)).toBe(4);
    expect(functions.mul(2,2)).not.toBe(5);
});

//toBe & not.toBe
test("Diving 2/2 is equal to 1",()=>{
   expect(functions.div(2,2)).toBe(1);
   expect(functions.div(2,2)).not.toBe(0);
});


//toBeNull
test("Should be null",()=>{
    expect(functions.isNull()).toBe(null);
    expect(functions.isNull()).toBeNull();
})

//toBeUndefined
test("Should be undefined",()=>{
    expect(functions.isUndefined()).toBe(undefined);
    expect(functions.isUndefined()).toBeUndefined();
})

//toBeFalsy
test("Should be falsy",()=>{
    expect(functions.someValue(null)).toBeFalsy();
    expect(functions.someValue(0)).toBeFalsy();
    expect(functions.someValue(undefined)).toBeFalsy();
    expect(functions.someValue(2)).not.toBeFalsy();
})

test('Check for same object',()=>{
    expect(functions.createUser()).not.toBe({firstName:"Yasar",middleName:"Arafat",lastName:"Sulaiman"})
    expect(functions.createUser()).toEqual({firstName:"Yasar",middleName:"Arafat",lastName:"Sulaiman"});
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
  
// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

test('Testing async code format 1',async ()=>{
    const user = await functions.fetchUserInfo();
    expect(user.name).toBe("Ervin Howell");
});

test('Testing async code format 2',(done)=>{
    functions.fetchUserInfo().then((user)=>{
        expect(user.name).toBe("Ervin Howell");
        done();
    })
});

test('Testing async code format 3',()=>{
    expect.assertions(1);
    return functions.fetchUserInfo().then((user)=>{
        expect(user.name).toBe("Ervin Howell");
    })
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false