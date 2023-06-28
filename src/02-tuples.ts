const prices: (number | string)[] = [1, 2, 3, '4'];

prices.push(1);
prices.push('1');

let user: [string, number, boolean];
user = ['a', 1, true];

const [username, age] = user;

console.log(username);
console.log(age);
