//Realizado en la consola de MongoDB

//WORK

// List all the employees.
db.employees.find()
//Find the employee with whose name is Steve.
db.employees.find({name: "Steve"})
//Find all employees whose age is greater than 30.
db.employees.find({age: {$gt: 30}})
//Find the employee whose extension is 2143.
db.employees.find({"phone.ext": "2143"})
//Find all employees that are over 30.
db.employees.find({age: {$gt: 30}})
//Find all employees that are less than or equal to 30.
db.employees.find({age: {$lte: 30}})
//Find all the employees whose favorite food is pizza.
db.employees.find({"favorites.food": "pizza"})
//Change Willy’s personal phone number to "93-123-45-67".
db.employees.updateOne({ name: 'Willy' }, {$set: { "phone.personal": '931-234-567' }});
//Change Bob’s privilege to normal user.
db.employees.updateOne({ name: 'Bob' }, {$set: { privileges: 'user' }});
//Find all employees whose favorite artist is equal to Picasso.
db.employees.find({"favorites.artist": "Picasso"})
//Delete the user John.
db.employees.deleteOne({ name: 'John' })

//PLACES

//List all the restaurants.
db.restaurants.find()
//Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0})
//Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0})
//Find the restaurants which are in the borough Bronx.
db.restaurants.find({borough: "Bronx"})
//Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({$and: [{borough: "Brooklyn"}, {cuisine: "Steak"}]})
//Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({grades:{$elemMatch:{score: { $gte: 90}}}})
//Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.restaurants.find({$and: [{cuisine: {$ne : "Bakery"}, "grades.score": {$gte : 70}}]});









