


//employes
print('Employees')


// 2. Import:
 mongosh --eval "const db = db.getSiblingDB('work'); db.dropDatabase(); const data = require('C:/Users/jcruz/OneDrive/IronHack/modulo2/mongo-examples/datasets/employees.json'); db.getCollection('employees').insertMany(data);"

//3.  List all the employees.

db.employees.find().pretty()

// 4. connect to mongo shell
{mongosh --eval "use Works"}

// 5. Find the employee with whose name is Steve.
{ name : "Steve"}

// Find all employees whose age is greater than 30.
{ age: { $gt: 30 } }
// Find the employee whose extension is 2143.
{ extension: 2143 }
// Find all employees that are over 30.
{ age: { $gt: 30 } }
// Find all employees that are less than or equal to 30.
{ age: { $lte: 30 } }
// Find all the employees whose favorite food is pizza.
{ "favorites.food": "pizza" }
// Change Willy’s personal phone number to "93-123-45-67".
db.employees.updateOne({ name: "Willy" }, { $set: { "phone.personal": "93-123-45-67" } })
// Change Bob’s privilege to normal user.
db.employees.updateOne({ name: "Bob" }, { $set: { "privileges": "user" } })
// Find all employees whose favorite artist is equal to Picasso.
{ "favorites.artist": "Picasso" }
// Delete the user John.
db.employees.deleteOne({ name: "John" })