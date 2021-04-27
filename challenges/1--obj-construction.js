// PROBLEM:  You are given 100 records from a 3rd party API. The data is good but the structure doesnt meets
// the business requirements.  You need to modify the data and return a new object.
// REQUIREMENTS:  
// -- Name key needs to be split into first and last keys
// -- A 32 char unique "id" key needs to be added to each record
// -- Phone needs to be changed to 10 char string
// -- Largest invoice needs to be surfaced in new key named "invoice". If no invoice found do not include the key
// -- Do not include these keys; posts, company, website, geo, streetD, streetC, and username
// -- Return 30 records
const user = require('../src/users');
const {v4: uuid} = require('uuid');

const numUsers = 1;
const data = user.fullContact(numUsers)

console.log('UNIQUE ID:', uuid())
console.log('USERS:', data)
console.log('COMPLETE!')