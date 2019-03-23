show dbs
use places
show collections
db.restaurants.find().pretty()
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "_id": 0, "borough": 1, "cousine": 1 })
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "_id": 0, "borough": 1, "address.zipcode": 1 })
db.restaurants.find({ "borough": "Bronx" })
db.restaurants.find({ "borough": "Bronx" }).count()
db.restaurants.find({ "borough": "Brooklyn", "cuisine": "Steak" }).pretty()
db.restaurants.find({ "grades.score": { $gt: 90 } } )
db.restaurants.find({ "grades.score": { $gt: 90 } } ).count()
db.restaurants.find({ "grades.score": { $gte: 70 }, "cuisine": { $ne: "Bakery" } }).pretty()
db.restaurants.find({ "grades.score": { $gte: 70 }, "cuisine": { $ne: "Bakery" } }).count()
db.restaurants.find({ "grades.grade": "A", "cuisine": { $ne: "Chinese"}, "borough": { $ne: "Manhattan"}  })
db.restaurants.find({ "grades.grade": "A", "cuisine": { $ne: "Chinese"}, "borough": { $ne: "Manhattan"}  }).count()
db.restaurants.updateMany({"cuisine": "American "}, { $set: { "cuisine": "American" } })
db.restaurants.updateOne({"name": "Morris Park Bake Shop"}, { $set: { "address.street": "Calle falsa 123" } })
db.restaurants.deleteOne({"address.zipcode": "10466"})
db.restaurants.deleteMany({"address.zipcode": "10466"})
