//EMPLOYEES

//1
db.employees.find().pretty()

//2
db.employees.find({name: "Steve"}).pretty()

//3
db.employees.find({age: {$gt: 30}}).pretty()

//4
db.employees.find({"phone.ext": "2143"}).pretty()

//5
//Same as iteration 3

//6
db.employees.find({age: {$lte: 30}}).pretty();

//7
db.employees.find({"favorites.food": "pizza"}).pretty()

//8
db.employees.updateOne({name: "Willy"}, {$set: {"phone.personal": "93-123-45-67"}})

//9
db.employees.find({"favorites.artist": "Picasso"}).pretty()

//10
db.employees.deleteOne({name: "John"})

//RESTAURANTS

//1
db.restaurants.find().pretty()

//2
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()

//3
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1}).pretty()

//4
db.restaurants.find({borough: "Bronx"}).pretty()

//5
db.restaurants.find({"grades.score": {$gt: 90}}).pretty()

//6
db.restaurants.find({cuisine: {$ne: "Bakery"}, "grades.score": {$gt: 70}}).pretty()

//7
db.restaurants.find({cuisine: {$ne: "Chinese"}, "grades.grade": "A", borough: {$ne: "Manhattan"}}).pretty()

//8
db.restaurants.updateMany({cuisine: "American "}, {$set: {cuisine: "American"}})

//9
db.restaurants.updateOne({"name": "Morris Park Bake Shop"}, {$set: {"address.street": "Calle falsa 123"}})

//10
db.restaurants.deleteMany({"address.zipcode": "10466"})

//COMPANIES

//1
db.companies.find({name: /facebook/i }, {name: 1}).pretty()

//2
db.companies.find({category_code: "web"}, {_id: 0, name: 1}).pretty()

//3
db.companies.find({name: "Twitter"}, {"name": 1, "category_code": 1, "founded_year": 1, _id: 0}).pretty();

//4
db.companies.find({category_code: "web"}).limit(50).pretty()

//5
db.companies.find({category_code: "enterprise", founded_year: 2005}, {name: 1, category_code: 1, founded_year: 1, _id: 0}).pretty()

//6
db.companies.find({$or: [{founded_year: 2000}, {number_of_employees: 20}]}).sort({number_of_employees: -1}).pretty()

//7
db.companies.find({$and: [{category_code: {$ne: "web"}}, {category_code: {$ne: "social"}}]}, {name: 1, category_code: 1, _id: 0}).limit(20).pretty()

//8
db.companies.find({founded_month: {$ne: 6}}, {founded_month: 1, name: 1, _id: 0}).skip(50).pretty()

//9
db.companies.find({number_of_employees: 50, category_code: {$ne: "web"}}, {name: 1, number_of_employees: 1, category_code: 1,_id: 0}).pretty()

//10
db.companies.find({founded_day: 1, number_of_employees: {$ne: 50}, category_code: {$ne: "web"}}, {founded_day: 1, name: 1, _id: 0}).limit(5).pretty()

//11
db.companies.find({"acquisitions.price_amount":40000000}).sort({name:1}).pretty()

//12
db.companies.find({$and:[ {"acquisition.acquired_year":2014, "acquisition.acquired_month":1}]},{name:1, acquisition:1}).pretty()