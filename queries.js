//Employees


//1. List all the employees. 

db.employees.find()

//2. Find the employee with whose name is Steve.

db.employees.find({name: "Steve"}).pretty()

//3. Find all employees whose age is greater than 30.

db.employees.find({age: {$gt: 30}}).pretty()

//4. Find the employee whose extension is 2143.

db.employees.find({"phone.ext": "2143"}).pretty()

//5. Find all employees that are over 30.

db.employees.find({age: {$gte: 30}}).pretty()

//6. Find all employees that are less than or equal to 30.

db.employees.find({age: {$lt: 30}}).pretty()

//7. Find all the employees whose favorite food is pizza.

db.employees.find({"favorites.food": "pizza"}).pretty()

//8. Change Willy’s personal phone number to "93-123-45-67".

db.employees.updateOne({name: "Willy"}, { $set { "phone.personal": "93-123-45-67" }})

//9. Change Bob’s privilege to normal user.

db.employees.updateOne({name: "Bob"}, { $set: { privileges: "user" }})

//10. Find all employees whose favorite artist is equal to Picasso.

db.employees.find({"favorites.artist": "Picasso"}).pretty()

//11. Delete the user John.

db.employees.deleteOne({name: "John"})




//Restaurants


//1. List all the restaurants.

db.restaurants.find().pretty()

//2. Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.

db.restaurants.find({}, {_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()

//3. Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.

db.restaurants.find({}, {_id: 1, name: 1, borough: 1, "address.zipcode": 1}).pretty()

//4. Find the restaurants which are in the borough Bronx.

db.restaurants.find({borough: "Bronx"}).pretty()

//5. Find the restaurants which are in the borough Brooklyn with Steak cuisine

db.restaurants.find({borough: "Bronx", cuisine: "Steak"}).pretty()

//6. Find the restaurants which have achieved a score bigger than 90.

db.restaurants.find({"grades.score": { $gt: 90 } } ).pretty()

//7. Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.

db.restaurants.find({"grades.score": { $gt: 70 }, cuisine: { $ne: "Bakery"}}).pretty()

//8. Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.

db.restaurants.find({"grades.grade": "A", cuisine: { $ne: "Chinese"}, borough: { $ne: "Manhattan"}}).pretty()

//9. Update restaurants with 'American ' cuisine to 'American' (without the space!!!)

db.restaurants.updateMany({cuisine: "American "}, { $set: { cuisine: "American"} } )

//10. Update Morris Park Bake Shop address street to Calle falsa 123.

db.restaurants.updateOne( { name: "Morris Park Bake Shop" }, { $set: { "address.street": "Calle falsa 123" } } )

//11. Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany( { "address.zipcode": "10466" } )