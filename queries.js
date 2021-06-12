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
