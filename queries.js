//Employees

1. db.employees.find().pretty()

2. db.employees.find({ name: "Steve" })

3. db.employees.find({ age: {$gt: 30 } })

4. db.employees.find({ "phone.ext": "2143" })

5. db.employees.find({ age: {$gte: 30 } })

6. db.employees.find({ age: {$lte: 30 } })

7. db.employees.find({ "favorites.food": "pizza" })

8. db.employees.updateOne({ name: "Willy" }, { $set: { "phone.personal": "93-123-45-67"} } )

9. db.employees.updateOne({ "name": "Bob" }, { $set: {privileges: "user"} })

10. db.employees.find({ "favorites.artist": "Picasso" })

11. db.employees.deleteOne({ "name": "John"})


//Restaurants 

1. db.restaurants.find().pretty()

2. db.restaurants.find({},{"restaurant_id": 1, name: 1, borough: 1, cuisine: 1})

3. db.restaurants.find({},{"restaurant_id": 1, name: 1, borough: 1, "adress.zipcode": 1})

4. db.restaurants.find({ "borough":"Bronx"}).pretty()

5. db.restaurants.find({ "borough":"Bronx", "cuisine": "Steak"}).pretty()

6. db.restaurants.find({ "grades.score": { $gt: 90} })  //shows other grades with lower scores//

7. db.restaurants.find({ "cuisine": { $ne: "Bakery" } , "grades.score": { $gte: 70 } }).pretty() 

8. db.restaurants.find({ "cuisine": { $ne: "Chinese" } , "grades.grade": "A", "borough" : { $ne: "Manhattan" } }).pretty()

9. db.restaurants.updateMany({ "cuisine": "American " }, { $set: { "cuisine": "American" } })

10. db.restaurants.updateOne({ "name": "Morris Park Bake Shop" }, { $set: { "adress.street": "calle false 123" } })

11. db.restaurants.deleteMany({ "adress.zipcode": "10466" })

//Companies


1. db.companies.find({ name : "Facebook"})

2. db.companies.find({ "category_code": "web" }, { name: 1, _id: 0 })

3. db.companies.find({ name: "Twitter" }, { name: 1, _id: 0, "category_code": 1, "founded_year": 1 })

4. db.companies.find({ "category_code": "web" }).limit(50)

5. db.companies.find({ "category_code": "enterprise", "founded_year": 2005 }, { name: 1, "category_code": 1, "founded_year": 1, _id: 0 })

6. db.companies.find({ $or: [{ "founded_year": 2000 }, { "number_of_employees": 20 }] }).sort({ "number_of_employees": -1 })

7. db.companies.find({ $nor: [{ "category_code": "web" }, { "category_code": "social" }] }, { name: 1, "category_code": 1, _id: 0 }).limit(20)

8. db.companies.find({ "founded_month": { $not: { $eq: 6 } } }).skip(50)

9. db.companies.find({ number_of_employees: 50, category_code: { $not: { $eq: "web" } } })

10.db.companies.find({ founded_day: 1, number_of_employees: {$not: {$eq: 50}}, category_code: {$not: {$eq: "web"}} }, { founded_day: 1, name: 1, _id: 0 }).limit(5)

11. db.companies.find({ "acquisition.price_amount": 40000000 }).sort({ name: 1 })

12. db.companies.find({ "acquisition.acquired_year": 2014 }, { acquisition: 1, name: 1 })





