db.restaurants.find().pretty()
db.restaurants.find({}, {name: 1, _id: 1, borough: 1, cuisine: 1}).pretty()
db.restaurants.find({}, {name: 1, _id: 1, borough: 1, zipcode: 1}).pretty()
db.restaurants.find({}, {name: 1, _id: 1, borough: 1, "address.zipcode": 1 }).pretty()
db.restaurants.find({"borough": "Bronx"},{name: 1, _id: 0}).pretty()
db.restaurants.find({"borough": "Brooklyn", "cuisine": "Steak"}, {name: 1, _id: 0}).pretty()
db.restaurants.find({"grades.score": {$gt: 90}}, {name: 1, _id: 0}).pretty()
db.restaurants.find({"grades.score": {$gte: 70},  cuisine: {$ne: "Bakery"}}, {name: 1, _id: 0}).pretty()
db.restaurants.find({"grades.grade": "A",  cuisine: {$ne: "Chinese"}, borough: {$ne: "Manhattan"}}, {name: 1, _id: 0}).pretty()
db.restaurants.updateMany({cuisine: "American "}, {$set: {cuisine:"American"}})
db.restaurants.updateOne({"address.street": "Morris Park Ave"}, {$set: {"address.street":"Calle falsa 123"}})
db.restaurants.deleteMany({"address.zipcode": "10466"})



///COMPANIES
db.companies.find({"name" : {$regex : ".*Facebook*"}},{name:1, _id:0}).pretty()
db.companies.find({"category_code" : {$regex : ".*web*"}},{name:1, _id:0}).pretty()
db.companies.find({"name" : "Twitter"},{name:1,category_code:1, founded_year:1,  _id:0}).pretty()
db.companies.find({"category_code" : "web"},{name:1, _id:0}).limit(50)
db.companies.find({"category_code" : "enterprise", "founded_year": 2005},{name:1, category_code: 1, founded_year: 1,  _id:0})
db.companies.find({$or: [{"founded_year": 2000}, {number_of_employees: 20} ]},{name:1, number_of_employees:1,founded_year:1, _id:0}).sort({number_of_employees: -1})
db.companies.find({"founded_month": {$ne: "June"}},{founded_month:1,name:1, _id:0}).skip(50)
db.companies.find({"category_code": {$ne: "web"},"number_of_employees":50},{name:1, number_of_employees:1, _id:0})
db.companies.find({"founded_day": 1, $nor:[{"number_of_employees":50}, {"category_code":"web"}]},{name:1, founded_day:1, _id:0}).limit(5)
db.companies.find({"acquisition.price_amount": 40000000},{name: 1, _id: 0}).sort({name: 1})

db.companies.find({$and: [{"acquisition.acquired_year":2014}, {"acquisition.acquired_month": 1}]},{acquisition: 1, name: 1, _id: 0}).pretty()