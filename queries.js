// List all the employees.

db.employees.find()

// Find the employee with whose name is Steve.

db.employees.find({ name: 'Steve' })

// Find all employees whose age is greater than 30.

db.employees.find({ age: { $gt: 30 } })

// Find the employee whose extension is 2143.

db.employees.find({ "phone.ext": "2143" })

// Find all employees that are over 30.

db.employees.find({ age: { $gt: 30 } })


// Find all employees that are less than or equal to 30.

db.employees.find({ age: { $lte: 30 } })

// Find all the employees whose favorite food is pizza.

db.employees.find({ "favorites.food": "pizza" })

// Change Willy’s personal phone number to "93-123-45-67".

db.employees.updateOne({ "name": "Willy" }, { $set: { "phone.personal": "93-123-45-67" } })

// Change Bob’s privilege to normal user.

db.employees.updateOne({ "name": "Bob" }, { $set: { "privileges": "user" } })

// Find all employees whose favorite artist is equal to Picasso.

db.employees.find({ "favorites.artist": "Picasso" })

// Delete the user John

db.employees.deleteOne({ name: "John" })