// List all the employees.
on mongoDB compass open db, open collection, click FIND
// Find the employee with whose name is Steve.
{ name: "Steve" } => FIND
// Find all employees whose age is greater than 30.
{ age: { $gt: 30 } } => FIND
// Find the employee whose extension is 2143.
{ "phone.ext": "2143" } => FIND
// Find all employees that are over 30.
{ age: { $gt: 30 } } => FIND
// Find all employees that are less than or equal to 30.
{ age: { $lte: 30 } } => FIND
// Find all the employees whose favorite food is pizza.
{ "favorites.food": "pizza" } => FIND
// Change Willy’s personal phone number to "93-123-45-67".
findOneAndUpdate( { name: "Wylly" }, { "phone.personal": "93-123-45-67" })
// Change Bob’s privilege to normal user.
findOneAndUpdate( { name: "Bob" }, { privileges: "user" })
// Find all employees whose favorite artist is equal to Picasso.
{"favorites.artist": "Picasso"} => FIND
// Delete the user John.
findOneAndDelete( { name: "John" } )