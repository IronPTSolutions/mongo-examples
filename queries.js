	// Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
	db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cousine: 1, _id: 0})
// Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
	db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, “address.zipcode”: 1, _id: 0})
// Find the restaurants which are in the borough Bronx.
	db.restaurants.find({borough:”Bronx”}, {name: 1, borough: 1, _id: 0})
// Find the restaurants which are in the borough Brooklyn with Steak cuisine.
	db.restaurants.find({borough:”Brooklyn”, cuisine:”Steak”}, {name: 1, borough: 1, cuisine:1, _id: 0})
// Find the restaurants which have achieved a score bigger than 90.
	db.restaurants.find({“grades.score”: {$gt:90}}, {name: 1, “grades.score”: 1, _id: 0}).pretty()
// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
	db.restaurants.find({cuisine: {$ne:"Bakery"}, “grades.score”: {$gte:70} }, {name: 1, “grades.score”: 1, cuisine:1, _id: 0}).pretty() 
// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
	db.restaurants.find(
		{	cuisine: {$ne:"Chinese"}, 
			"grades.grade" : "A",
			borough: {$ne:"Manhattan"}
		}, {name: 1, “grades.grade: 1, borough: 1, cuisine:1, _id: 0}).pretty() 
// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
	db.restaurants.updateMany({	cuisine: 'American ', }, {$set:{cuisine: 'American'}})  //1255 modified

// Update Morris Park Bake Shop address street to Calle falsa 123.
	db.restaurants.updateOne({	name: 'Morris Park Bake Shop', }, {$set:{address: 'Calle falsa 123'}})  //1 modified
// Delete all the restaurants with address zipcode 10466.
	db.restaurants.deleteMany({“address.zipcode”:"10466"}) //delete 15


// Companies
//Find all the companies that include 'Facebook' on the name field.
db.companies.find({name:{$regex:'.*Facebook*.'}}, {name:1, _id:0})

// Find all the companies which category_code is 'web'. Retrive only their name field:
db.companies.find({category_code:'web'}, {name:1, _id:0})
// Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
db.companies.find({name:'Twitter'}, {name:1,category_code:1, founded_year:1, _id:0}) //named Twitter
db.companies.find({name:{$regex:'.*Twitter*.'}}, {name:1,category_code:1, founded_year:1, _id:0}) //Includes twitter
// Find all the companies who have web as their category_code, but limit the search to 50 companies.
db.companies.find({category_code:{$regex:'.*web*.'}}, {name:1, _id:0, category_code: 1}).limit(50)

// Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
db.companies.find({category_code:{$regex:'.*enterprise*.'}, founded_year:2005}, {name:1, _id:0, category_code: 1, founded_year:1})
// Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.

db.companies.find({$or:[founded_year:2000, employees: 20]}, {name:1, category_code:1, }).sort({employees:-1})



