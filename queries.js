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

//Restaurants


//List all the restaurants.
1. db.restaurants.find()
//Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
2. db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()
//Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
3. db.restaurants.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1}).pretty()
//Find the restaurants which are in the borough Bronx.
4. db.restaurants.find({borough:"Bronx"}).pretty()

//Find the restaurants which are in the borough Brooklyn with Steak cuisine.
5. db.restaurants.find({borough:"Bronx",cuisine:"Steak"}).pretty()

//Find the restaurants which have achieved a score bigger than 90.
 6. db.restaurants.find({"grades.score": {$gt: 90}}).pretty()

//Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
7. db.restaurants.find({"grades.score": {$gte: 70},cuisine :{$ne:  "Bakery"}}).pretty()


//Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
8. db.restaurants.find({"grades.grade":  "A",cuisine :{$ne:  "Chinese"},borough: {$ne: "Manhattan"}}).pretty()

//Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
9. db.restaurants.updateMany({cuisine: "American "},{$set: {cuisine:"American"}})
//Update Morris Park Bake Shop address street to Calle falsa 123.
10. db.restaurants.updateOne({name: "Morris Park Bake Shop"},{$set : {"address.street" : "Calle falsa 123"}})
//Delete all the restaurants with address zipcode 10466.
11. db.restaurants.deleteMany({"address.zipcode" : "10466"})

