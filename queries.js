//employees 1
db.employees.find()
//employees 2
db.employees.find({name: "Steve"})
//employees 3
db.employees.find({age: {$gt:30}})
//employees 4
db.employees.find({"phone.ext": "2143"})
//employees 5
db.employees.find({age: {$gt:30}})
//employees 6
db.employees.find({age: {$lte: 30}})
//employees 7
db.employees.find({"favorites.food": "pizza"})
//employees 8
db.employees.updateOne({name:"Willy"},{$set:{"phone.personal": 93-123-45-65}})
//employees 9
db.employees.updateOne({name:"Bob"},{$set:{privileges:"user"}})
//employees 10
db.employees.find({"favorites.artist": "Picasso"})
//employyes 11
db.employees.deleteOne({_id: ObjectId("60c475b64fa53a6877b8e03a")})


//restaurants 1
db.restaurants.find()
//restaurants 2
db.restaurants.find({},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//restaurants 3
db.restaurants.find({},{"restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1 , "_id": 0})
//restaurants 4
db.restaurants.find({borough: "Bronx"})
//restaurants 5
db.restaurants.find({borough: "Brooklyn", cuisine: "Steak"})
//restaurants 6
db.restaurants.find({"grades.score":{$gt : 90}})
//restaurants 7
db.restaurants.find({"cuisine": {$ne:"Bakery"}, "grades.score": {$gte: 70}})
//restaurants 8
db.restaurants.find({$and:[ {cuisine:{$ne:"Chinese"}, "grades.grade":"A",borough:{$ne:"Manhattan"}}]})
//restaurants 9
db.restaurants.updateMany({cuisine: "American "}, { $set:{cuisine: "American"}})
//restaurants 10
db.restaurants.updateOne({name: "Morris Park Bake Shop"},{$set: {"address.street": "Calle falsa 123"}})
//restaurants 11
db.restaurants.deleteMany({"address.zipcode": 10466})
 
//Companies 1
db.companies.find({name:"Facebook"})
//Companies 2
db.companies.find({category_code:"web"},{name:1})
//Companies 3
db.companies.find({name:"Twitter"},{name:1, category_code:1, founded_year:1})
//Companies 4
db.companies.find({category_code:"web"}).limit(50)
//Companies 5
db.companies.find({$and:[ {category_code:"enterprise"}, {founded_year:2005}]}, {name:1, category_code:1, founded_year:1})
//Companies 6
db.companies.find({$or:[ {founded_year:2000}, {number_of_employees:20}]}).sort({number_of_employees:-1})
//Companies 7
db.companies.find({$nor:[ {category_code:"web"}, {category_code:"social"}]}, {name:1, category_code:1}).limit(20)
//Companies 8
db.companies.find({founded_month:{$ne:6}},{name:1, founded_month:1}).skip(50)
//Companies 9
db.companies.find({$and:[ {number_of_employees:50, category_code:{$ne:"web"}}]})
//Companies 10
db.companies.find({$and:[ {founded_month:1, $nor:[ {category_code:"web"}, {number_of_employees:50}]}]}, {name:1, founded_day:1}).limit(5)
//Companies 11
db.companies.find({"acquisitions.price_amount":40000000}).sort({name:1})
//Companies 12
db.companies.find({$and:[ {"acquisition.acquired_year":2014, "acquisition.acquired_month":1}]},{name:1, acquisition:1})