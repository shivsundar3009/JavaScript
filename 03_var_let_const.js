/* this is a multiline comment

Javascript variables can be declared inn 4 ways:
  A) Automatically 
  B) Using Var
  C) Using Let
  D) Using Const

*/

// The Var keyword was used in all Javascript code from 1995 to 2015.

// The Let and Const keywords were introduced to Javascript in 2015.

// Only use let if you cannot use const.

const accountId = 144553

let accountEmail = 'shiv@google.com'

var accountPassword = 'Shiv@123'

accountCity = 'Indore'

let accountState

console.log(accountId);

// console.table([accountId,accountEmail,accountPassword,accountCity])
// we can use console.table([var1,var2----]) to print multiple variables

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// we can also declare variable without adding value to it, it will return undefined

// we have to assign value when declaring variable using const
