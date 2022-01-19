print('Employees')

// List all the employees.
print('1. List all Employees')
db.employees.find({}).forEach(printjsononeline)


// Find the employee with whose name is Steve.
print('2. Find the employee with whose name is Steve.')
db.employees.find({name: 'Steve'})


// Find all employees whose age is greater than 30.
print('3. Find all employees whose age is greater than 30.')
db.employees.find({'age': {$gt: 30}})


// Find the employee whose extension is 2143.
print('4. Find the employee whose extension is 2143.')
db.employees.find({'phone.ext': '2143'})


// Find all employees that are over 30.
print('5. Find all employees that are over 30.')
db.employees.find({'age': {$gt: 30}})


// Find all the employees whose favorite food is pizza.
print('6. Find all the employees whose favorite food is pizza.')
db.employees.find({'favorites.food': 'pizza'})


// Change Willy’s personal phone number to "93-123-45-67".
print('7. Change Willy’s personal phone number to "93-123-45-67".')
db.employees.updateOne({name: 'Willy'}, {$set: {'phone.personal': '93-123-45-67'}})


// Change Bob’s privilege to normal user.
print('8. Change Bob’s privilege to normal user.')
db.employees.updateOne({name: 'Bob'}, {$set: {privileges: 'user'}})


// Find all employees whose favorite artist is equal to Picasso.
print('9. Find all employees whose favorite artist is equal to Picasso.')
db.employees.find({'favorites.artist': 'Picasso'})


// Delete the user John.
print('10. Delete the user John.')
db.employees.deleteOne({name: 'John'})