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
db.employees.find({"favorites.artist": "Picasso"}).pretty()
//employyes 11
> db.employees.deleteOne({_id: ObjectId("60c475b64fa53a6877b8e03a")})


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

//restaurants 9

//restaurants 10

//restaurants 11





