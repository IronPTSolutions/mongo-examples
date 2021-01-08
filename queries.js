1. Employees

Para entrar en la BBDD: use work

List all the employees.
db.employees.find()
Find the employee with whose name is Steve.
db.employees.find({ name: "Steve" })
Find all employees whose age is greater than 30.
db.employees.find({ age: { $gt: 30 } })
Find the employee whose extension is 2143.
db.employees.find({ "phone.ext": "2143" })
Find all employees that are over 30.
db.employees.find({ age: { $gt: 30 } })
Find all employees that are less than or equal to 30.
db.employees.find({ age: { $lte: 30 } })
Find all the employees whose favorite food is pizza.
db.employees.find({ "favorites.food": "pizza" })
Change Willy’ s personal phone number to "93-123-45-67".
db.employees.updateOne({ name: "Willy" }, { $set: { 'phone.personal': "93-123-45-67" } })
db.employees.find({ name: "Willy" })
Change Bob’ s privilege to normal user.
db.employees.find({ name: "Bob" })
db.employees.updateOne({ name: "Bob" }, { $set: { 'privileges': "user" } })
Find all employees whose favorite artist is equal to Picasso.
db.employees.find({ "favorites.artist": "Picasso" })
Delete the user John.
db.employees.deleteMany({ "name": "John" })
db.employees.find({ name: "John" })

2. Restaurants

// Desde la carpeta del proyecto "mongo-examples":
// show dbs
// use places
// show collections
// mongoimport --drop --db places --collection restaurants --file ./datasets/restaurants.json --jsonArray
// mongo places --eval "db.restaurants.find().pretty()"

List all the restaurants.
db.restaurants.find()
Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({}, { "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 })
Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({}, { "_id": 0, "restaurant_id": 1, "name": 1, "borough": 1, "address": { "zipcode": 1 } })
Find the restaurants which are in the borough Bronx.
db.restaurants.find({}, { "borough": "Bronx" }, { "cuisine": "Steak" })
Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({}, { "borough": "Brooklyn" }, { "cuisine": "Steak" })
Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({ 'grades.score': { $gt: 90 } })
Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
    Update restaurants with 'American '
cuisine
to 'American' (without the space!!!)
Update Morris Park Bake Shop address street to Calle falsa 123.