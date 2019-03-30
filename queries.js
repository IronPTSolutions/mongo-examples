
//List all the restaurants.
db.restaurants.find({},{name:1,borough:1, cuisine:1, address:1})
//Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({},{name:1,borough:1, cuisine:1})
//Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({},{name:1,borough:1, cuisine:1, "address.zipcode":1})
//Find the restaurants which are in the borough Bronx.
db.restaurants.find({borough:"Bronx"},{name:1})
//Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({borough:"Bronx",cuisine:"Steak"},{name:1})
//Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find( {"grades.score":{$gt:90}},{name:1} )
//Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.restaurants.find( {"grades.score":{$gte:70},cuisine:{$ne:"Bakery"}},{name:1 } )
//Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
db.restaurants.find( {"grades.grade":{$eq:"A"},borough:{$ne:"Manhattan"},cuisine:{$ne:"Chinese"}},{name:1 } )
//Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
db.restaurants.updateMany( {cuisine: {$eq:"American "}}, {$set: {cuisine: "American"}} )
//Update Morris Park Bake Shop address street to Calle falsa 123.
db.restaurants.updateOne( {name:{$eq:"Morris Park Bake Shop"}}, {$set:{"address.street":" Calle falsa 123"}} )
//Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany({"address.zipcode":{$eq:10466}})

//CRUNCHBASE

db.companies.find({name:"Facebook"}).count()

db.companies.find({"category_code":"web"},{name:1, _id: 0})

db.companies.find({name:"Twitter"}, {name: 1, "category_code":1, "founded_year": 1})

db.companies.find({"category_code":"web"}).limit(50)

db.companies.find({"category_code":"enterprise", "founded_year": 2005}, {name:1, "category_code":1, "founded_year":1, _id:0})

db.companies.find({"founded_year": 2000, "number_of_employees": {$lte: 20}}).sort({"number_of_employees":-1}).pretty()

db.companies.find({$nor:[{"category_code": "web"},{"category_code": "social"}]}, {name:1, "category_code":1, _id:0}).limit(20)

db.companies.find({founded_month: {$ne: 6}},{name:1, founded_month:1, _id:0}).skip(50)

db.companies.find({number_of_employees: 50, category_code: {$ne: "web"}})

db.companies.find({founded_day: 1, $nor: [{number_of_employees: 50},{category_code: "web"}]}, {name:1, founded_day:1, _id: 0}).limit(5)

db.companies.find({"acquisition.price_amount": 40000000}, {name:1, _id:0}).sort({name:1})

db.companies.find({"acquisition.acquired_month": 1, "acquisition.acquired_year": 2014}, {name:1, acquisition:1, _id:0}).pretty()

