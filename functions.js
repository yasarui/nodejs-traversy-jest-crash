const axios = require('axios');

const functions = {
    add: (num1,num2) => num1 + num2,
    sub: (num1,num2) => num1 - num2,
    mul: (num1,num2) => num1 * num2,
    div: (num1,num2) => num1 / num2,
    isNull:() => null,
    isUndefined:() => undefined,
    someValue:(x) => x,
    createUser(){
        const user = { firstName: 'Yasar' };
        user["middleName"] = "Arafat";
        user.lastName = "Sulaiman";
        return user;
    },
    async fetchUserInfo(){
        const user = await axios.get('https://jsonplaceholder.typicode.com/users/2');
        return user.data;
    }
}

module.exports = functions;