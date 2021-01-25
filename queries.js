//---- Employees ----

db.employees.find().pretty()
db.employees.find({name:"Steve"}).pretty()
db.employees.find({age: {$gt: 30}}).pretty()
db.employees.find({"phone.ext":"2143" }).pretty()
db.employees.find({age: {$gt: 30}}).pretty()
db.employees.find({age: {$lte: 30}}).pretty()
db.employees.find({"favorites.food": "pizza"}).pretty()
db.employees.updateOne({name:"Willy"},{$set: {"phone.personal": "93-123-45-67"} })
db.employees.updateOne({name:"Bob"},{$set: {privileges: "user"} })
db.employees.find({"favorites.artist": "Picasso"}).pretty()
db.employees.deleteOne({name: "Jhon"})

//---- Restaurants ----

db.restaurants.find().pretty()
db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()
db.restaurants.find({}, {name: 1, restaurant_id:1, borough:1, '_id': 0, 'address.zipcode': 1}).pretty()
db.restaurants.find({borough: "Bronx"}).pretty()
db.restaurants.find({borough: "Brooklyn", cuisine: "Steak"}).pretty()
db.restaurants.find({"grades.score": {$gt: 90}}).pretty()
db.restaurants.find({"cuisine": {$ne:"bakery"}, "grades.score": {$gte: 70}}).pretty()
db.restaurants.find({"cuisine": {$ne: "Chinese"}, "grades.grade": "A", borough: { $ne: "Manhattan" } }).pretty()
db.restaurants.updateMany({"cuisine":"American "}, {$set: { "cuisine":"American" }})
db.restaurants.updateOne( {name: "Morris Park Bake Shop"}, {$set: {"address.street": "Calle falsa 123"}})
db.restaurants.deleteMany({"adress.zipcode":{$eq:"10466"}})

//---- Companies ----

db.companies.find( {name: "Facebook"}).pretty()
db.companies.find( {category_code: "web"}, {_id: 0, name: 1}).pretty()
db.companies.find({name: "Twitter"},{name: 1,category_code: 1, founded_year: 1, _id: 0}).pretty()
db.companies.find({category_code: "web"}).pretty().limit(50)
db.companies.find({category_code: "enterprise",founded_year: 2005},{name: 1,category_code: 1, founded_year: 1, _id: 0}).pretty()
db.companies.find({$or:[{founded_year: 2000},{number_of_employees: 20}]}).sort({"number_of_employees": -1}).pretty()
db.companies.find({category_code: {$nin: ["web","social"]}},{name: 1, category_code: 1, _id: 0}).limit(20).pretty()
db.companies.find( {founded_month: {$ne: 6}}, {_id:0, name: 1,  founded_month:1} ).skip(50).pretty()
db.companies.find({number_of_employees:50, category_code: {$ne:"web"}}).pretty()
db.companies.find({founded_day: 1, $nor: [{number_of_employees: 50},{category_code: "web"}]}, {name:1, founded_day:1, _id: 0}).limit(5)
db.companies.find({"acquisition.price_amount":40000000}).sort({"name": 1}).pretty()
db.companies.find( {"acquisition.acquired_year": 2014, "acquisition.acquired_month": 1}, {_id: 0, name: 1, acquisition: 1}).pretty() 

