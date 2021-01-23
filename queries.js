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

// Companies

//
//Find all the companies that include 'Facebook' on the name field.
1. db.companies.find({name:"Facebook"}).pretty()
//Let's do it one more together:
//Find all the companies which category_code is 'web'. Retrive only their name field:
2. db.companies.find({category_code: "web"},{name:1}).pretty()

//Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
3. db.companies.find({name: "Twitter"},{name:1,category_code:1,founded_year:1}).pretty()

//Find all the companies who have web as their category_code, but limit the search to 50 companies.
4. db.companies.find({"category_code": "web"}).limit(50)
//Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
5. > db.companies.find({category_code: "enterprise",founded_year: 2005},{name:1,category_code:1,founded_year:1}).pretty()

//Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
6. > db.companies.find({$or: [{ founded_year: 2000},{number_of_empoyees :20}]},{name:1,founded_year:1,number_of_employees:1}).sort({number_of_employees: -1}).pretty()

//Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
7. > db.companies.find({$nor: [{category_code:"web"},{category_code:"social"}]},{name:1,category_code:1}).limit(20)

//Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
8. > db.companies.find({founded_month : {$ne : 7}},{name:1,founded_month:1}).skip(50).pretty()

//Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
9. > db.companies.find({number_of_employees: 50,category_code : {$ne: "web" }}).pretty()

//Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.
10. > db.companies.find({$nor : [{number_of_empoyees: 50},{category_code: "web"},{founded_day: {$gt:1}}]},{name:1,founded_day:1,number_of_employees:1,category_code:1})

//Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
11.  > db.companies.find({"acquisition.price_amount": 40000000}).sort({name: 1}).pretty()
   
//Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.

12. > db.companies.find({"acquisition.acquired_year": 2014,"acquisition.acquired_month": 1},{name:1,acquisition:1}).pretty()
