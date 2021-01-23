// Employees
//List all the employees.
1. db.employees.find()

//Find the employee with whose name is Steve.
2. db.employees.find({name: "Steve"}).pretty()

//Find all employees whose age is greater than 30.
3. db.employees.find( { age: { $gt: 30 } } )

//Find the employee whose extension is 2143.
4. db.employees.find( { "phone.ext": "2143" } ).pretty()

//Find all employees that are over 30.
5. db.employees.find( { age: { $gt: 30 } } )
//Find all employees that are less than or equal to 30.
6. db.employees.find( { age: { $lt: 30 } } ).pretty()
//Find all the employees whose favorite food is pizza.
7. db.employees.find( { "favorites.food": "pizza" } ).pretty()
//Change Willy’s personal phone number to "93-123-45-67".
 8. db.employees.updateOne({name:"Willy"},{ $set : {"phone.personal" : "93-123-45-67"}})

//Change Bob’s privilege to normal user.
9. db.employees.updateOne({name:"Bob"},{ $set : {"privileges" : "user"}})
//Find all employees whose favorite artist is equal to Picasso.
10. db.employees.find({"favorites.artist" : "Picasso"}).pretty()

//Delete the user John.
11 db.employees.deleteOne({name: "John"})

