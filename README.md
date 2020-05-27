# nodejs-traversy-jest-crash

1. After Installing jest ,the first thing you need to do is to do the following change in package.json
   scripts:{
       test:"jest"
   }
   test: "jest --watch" ---> watch for the changes and reruns the test
   test: "jest --coverage" --> Generate a report summary

2. The testing file name shoule be like same name + test.js
    for example sample.js
                sample.test.js

3. Syntax for the test is 
    test("name of the test",()=>{
        expect(1).toBe(1)
    })

4. I can have n number of expect statements inside test
    test("name of the test",()=>{
        expect(1).toBe(1)
        expect(1).toBe(1)
        expect(1).toBe(1)
        expect(1).toBe(1)
    })

5. The Test will be passed only if all the expect statements are true.if one of it is false means the test will fail

6. Common assertins
   
   toBe
   not.toBe
   toBeNull
   toBeUndefined
   toBeDefined
   toBeFalsy
   toBeTruthy
   toEqual

7. When you are checking for object equality use toEqual

8. use async await for asynchronous code

9. we can run certain functions before and after each test using beforeEach and afterEach

10. we can run certain functions before all the test cases and after all the test cases
    beforeAll and afterAll

11. we can group test cases using describe