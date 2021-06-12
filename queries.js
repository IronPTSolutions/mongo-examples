//Employees 1
db.employees.find().pretty()
//Employees 2
db.employees.find({name:"Steve"}).pretty()
//Employees 3
db.employees.find({age:{$gt:30}}).pretty()
//Employees 4
db.employees.find({"phone.ext":"2143"}).pretty()
//Employees 5
db.employees.find({age:{$gt:30}}).pretty()
//Employees 6
db.employees.find({age:{$lte:30}}).pretty()
//Employees 7
db.employees.find({"favorites.food":"pizza"}).pretty()
//Employees 8
db.employees.updateOne({name:"Willy"},{$set:{"phone.personal":"93-123-45-67"}})
//Employees 9
db.employees.updateOne({name:"Bob"},{$set:{privileges:"normal user"}})
//Employees 10
db.employees.find({"favorites.artist":"Picasso"}).pretty()
//Employees 11
db.employees.deleteOne({name:"John"})

//Restaurants 1
db.restaurants.find().pretty()
//Restaurants 2
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()
//Restaurants 3
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1}).pretty()
//Restaurants 4
db.restaurants.find({borough:"Bronx"}).pretty()
//Restaurants 5 
db.restaurants.find({$and:[ {cuisine:"Steak", borough:"Brooklyn"}]}).pretty()
//Restaurants 6
db.restaurants.find({"grades.score":{$gt:90}}).pretty()
//Restaurants 7
db.restaurants.find({$and:[ {cuisine:{$ne:"Bakery"}, "grades.score":{$gte:70}}]}).pretty()
//Restaurants 8
db.restaurants.find({$and:[ {cuisine:{$ne:"Chinese"}, "grades.grade":"A",borough:{$ne:"Manhattan"}}]}).pretty()
//Restaurants 9
db.restaurants.updateMany({cuisine:"American "},{$set:{cuisine:"American"}})
//Restaurants 10
db.restaurants.updateOne({name:"Morris Park Bake Shop"},{$set:{"address.street":"Calle falsa 123"}})
//Restaurants 11
db.restaurants.deleteMany({"address.zipcode":"10466"})

//Companies 1
db.companies.find({name:"Facebook"}).pretty()
//Companies 2
db.companies.find({category_code:"web"},{name:1})
//Companies 3
db.companies.find({name:"Twitter"},{name:1, category_code:1, founded_year:1})
//Companies 4
db.companies.find({category_code:"web"}).limit(50).pretty()
//Companies 5
db.companies.find({$and:[ {category_code:"enterprise"}, {founded_year:2005}]}, {name:1, category_code:1, founded_year:1}).pretty()
//Companies 6
db.companies.find({$or:[ {founded_year:2000}, {number_of_employees:20}]}).sort({number_of_employees:-1}).pretty()
//Companies 7
//db.companies.find({$and:[ {category_code:{$ne:"web"}}, {category_code:{$ne:"social"}}]}, {name:1, category_code:1}).limit(20).pretty()
db.companies.find({$nor:[ {category_code:"web"}, {category_code:"social"}]}, {name:1, category_code:1}).limit(20).pretty()
//Companies 8
db.companies.find({founded_month:{$ne:6}},{name:1, founded_month:1}).skip(50).pretty()
//Companies 9
db.companies.find({$and:[ {number_of_employees:50, category_code:{$ne:"web"}}]}).pretty()
//Companies 10
db.companies.find({$and:[ {founded_month:1, $nor:[ {category_code:"web"}, {number_of_employees:50}]}]}, {name:1, founded_day:1}).limit(5).pretty()
//Companies 11
db.companies.find({"acquisitions.price_amount":40000000}).sort({name:1}).pretty()
//Companies 12
db.companies.find({$and:[ {"acquisition.acquired_year":2014, "acquisition.acquired_month":1}]},{name:1, acquisition:1}).pretty()

