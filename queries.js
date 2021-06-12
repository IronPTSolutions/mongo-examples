//Employees
//1. db.employees.find().pretty()
//2. db.employees.find({"name": "Steve"}).pretty()
//3. db.employees.find({ "age": { $gt: 30 }}).pretty()
//4. db.employees.find({"phone.ext" : "2143"}).pretty()
//5. db.employees.find({ "age": { $gt: 30 }}).pretty()
//6. db.employees.find({ "age": { $lte: 30 }}).pretty()
//7. db.employees.find({"favorites.food" : "pizza"}).pretty()
//8. db.employees.updateOne({"name" : "Willy"},{$set:{"phone.personal" : "93-123-45-67"}})
//9. db.employees.updateOne({"name" : "Bob"},{$set:{"privileges" : "user"}})
//10. db.employees.find({"favorites.artist" : "Picasso"}).pretty()
//11. db.employees.deleteOne({ "name" : "John"})

//Restaurants
//1. db.restaurants.find().pretty()
//2. db.restaurants.find({},{name:1, borough:1, cuisine:1, restaurant_id:1}).pretty()
//3. db.restaurants.find({},{name:1, borough:1, "address.zipcode":1, restaurant_id:1}).pretty()
//4. db.restaurants.find({"borough": "Brooklyn", "cuisine": "Steak"}).pretty()
//5. db.restaurants.find({ "grades.score": { $gt: 90 }}).pretty()
//6. db.restaurants.find({ "cuisine": {$ne: "Bakery"}, "grades.score": { $gt: 70 }}).pretty()
//7. db.restaurants.find({ "cuisine": {$ne: "Chinese"}, "grades.grade": "A", "borough": {$ne: "Manhattan"}}).pretty()
//8. db.restaurants.updateMany({ "cuisine": "American " }, { $set: { "cuisine": "American" } });
