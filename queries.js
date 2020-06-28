/* Restaurants*/
//1 List all the restaurants.
db.restaurants.find().pretty()
//2 Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({},{"restaurant_id": 1, "name":1, "borough": 1, "cuisine": 1}).pretty()
//3 Find all the restaurants and display only the fields restaurant_id, name, borough and zip code. 
db.restaurants.find({},{"restaurant_id": 1, "name":1, "borough": 1, "address.zipcode": 1}).pretty()
//4 Find the restaurants which are in the borough Bronx.
db.restaurants.find({"borough": {$eq:"Bronx"}}).pretty()
//5 Find the restaurants which are in the borough Brooklyn with Steak cuisine.  
db.restaurants.find({"borough": {$eq:"Brooklyn"}, "cuisine": {$eq:"Steak"} }).pretty()
//6 Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({"grades.score": {$gt: 90}}).pretty()
//7 Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.  
db.restaurants.find({"cuisine": {$ne: "Bakery"}, "grades.score": {$gte: 70}}).pretty()
//8 Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan. 
db.restaurants.find({"cuisine": {$ne: "Chinese"}, "grades.grade": {$eq: "A"}, "borough": {$ne: "Manhattan"}}).pretty()
//9 Update restaurants with 'American ' cuisine to 'American' (without the space!!!) 
db.restaurants.updateMany({"cuisine": "American "}, {$set: {"cuisine": "American"}})
//10 Update Morris Park Bake Shop address street to Calle falsa 123.
db.restaurants.updateOne({"name": "Morris Park Bake Shop"}, {$set:{"address.street": "Calle Falsa 123"}})
//11 Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany({"address.zipcode": {$eq:"10466"}})


/* Companies */
//1 Find all the companies that include 'Facebook' on the name field.
db.companies.find({name: "Facebook"}).pretty()
//2 Find all the companies which category_code is 'web'. Retrive only their name field:
db.companies.find({"category_code": "web"}, {"name": 1}).pretty()
//3 Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
db.companies.find({"name": "Twitter"}, {"name": 1, "category_code": 1, "founded_year": 1}).pretty()
//4 Find all the companies who have web as their category_code, but limit the search to 50 companies.
db.companies.find({"category_code": "web"}).limit(50).pretty() 
//Busque la función limit no dio error asi que confio en que saco 50.

//12 Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.
db.companies.find({"acquisition.acquired_year": 2014, "acquisition.acquired_month": 01}, {"name": 1, "acquisition": 1}).pretty()