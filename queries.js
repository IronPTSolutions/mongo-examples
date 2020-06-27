/* Restaurants 
1) db.restaurants.find().pretty()
2)db.restaurants.find({},{"restaurant_id": 1, "name":1, "borough": 1, "cuisine": 1}).pretty()
3) db.restaurants.find({},{"restaurant_id": 1, "name":1, "borough": 1, "address.zipcode": 1}).pretty()
4) db.restaurants.find({"borough": {$eq:"Bronx"}}).pretty()
5) db.restaurants.find({"borough": {$eq:"Brooklyn"}, "cuisine": {$eq:"Steak"} }).pretty()
6) db.restaurants.find({"grades.score": {$gt: 90}}).pretty()
7) db.restaurants.find({"cuisine": {$ne: "Bakery"}, "grades.score": {$gte: 70}}).pretty()
8) db.restaurants.find({"cuisine": {$ne: "Chinese"}, "grades.grade": {$eq: "A"}, "borough": {$ne: "Manhattan"}}).pretty()
9) db.restaurants.updateMany({"cuisine": "American "}, {$set: {"cuisine": "American"}})
10) db.restaurants.updateOne({"name": "Morris Park Bake Shop"}, {$set:{"address.street": "Calle Falsa 123"}})
11) db.restaurants.deleteMany({"address.zipcode": {$eq:"10466"}})
*/