// Employees
1.  show dbs
2.  use work
3.  show collections
4.  db.employees.find()
5.  db.employees.find({ name: "Steve" })
6.  db.employees.find({ age: { $gt: 30 } })
7.  db.employees.find({ 'phone.ext': '2143' })
8.  db.employees.find({ age: { $lte: 30 } })
9.  db.employees.find({ 'favorites.food': 'pizza' })
10. db.employees.updateOne({ "name": "Willy" }, { $set: { "phone.personal": "93-123-45-67" } })
11. db.employees.updateOne({name: 'Bob'}, { $set:{privileges: "normal"}})
12. db.employees.find({ 'favorites.artist': 'Picasso' })
13. db.employees.deleteOne({ name: 'John' })


// Restaurants
1.  show dbs
2.  use places
3.  show collections
4.  db.restaurants.find().pretty()
4.  db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "_id": 0, "borough": 1, "cousine": 1 })
5.  db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "_id": 0, "borough": 1, "address.zipcode": 1 })
6.  db.restaurants.find({ "borough": "Bronx" })
7.  db.restaurants.find({ "borough": "Bronx" }).count()
8.  db.restaurants.find({ "borough": "Brooklyn", "cuisine": "Steak" }).pretty()
9.  db.restaurants.find({ "grades.score": { $gt: 90 } } )
10. db.restaurants.find({ "grades.score": { $gt: 90 } } ).count()
11. db.restaurants.find({ "grades.score": { $gte: 70 }, "cuisine": { $ne: "Bakery" } }).pretty()
12. db.restaurants.find({ "grades.score": { $gte: 70 }, "cuisine": { $ne: "Bakery" } }).count()
13. db.restaurants.find({ "grades.grade": "A", "cuisine": { $ne: "Chinese"}, "borough": { $ne: "Manhattan"}  })
14. db.restaurants.find({ "grades.grade": "A", "cuisine": { $ne: "Chinese"}, "borough": { $ne: "Manhattan"}  }).count()
15. db.restaurants.updateMany({"cuisine": "American "}, { $set: { "cuisine": "American" } })
16. db.restaurants.updateOne({"name": "Morris Park Bake Shop"}, { $set: { "address.street": "Calle falsa 123" } })
17. db.restaurants.deleteOne({"address.zipcode": "10466"})
18. db.restaurants.deleteMany({"address.zipcode": "10466"})


// Companies
1.  show dbs
2.  use crunch
3.  show collections
4.  db.companies.find( {name: "Facebook"} ).count()
5.  db.companies.find( {name: "Facebook"} ).pretty()
6.  db.companies.find( { category_code: "web"}, { name: 1, _id: 0 } )
7.  db.companies.find( { name: "Twitter"}, { name: 1, category_code: 1, founded_year: 1, _id: 0 } )
8.  db.companies.find( { category_code: "web"}, { name: 1, _id: 0 } ).limit(50)
9.  db.companies.find( { category_code: "enterprise", founded_year: 2005}, { name: 1, category_code: 1, founded_year:1, _id: 0 } )
10. db.companies.find( { $or: [ { founded_year: 2000}, { number_of_employees: 20 } ] } ).sort( { number_of_employees: -1 } )
11. db.companies.find( { category_code: { $nin: [ "social", "web" ] } }, { name: 1, category_code: 1, _id: 0 } ).limit(20)
12. db.companies.find( { founded_month: { $ne: 6 } }, { name: 1, founded_month: 1, _id: 0 } ).skip(50)
13. db.companies.find( { number_of_employees: 50, category_code: { $ne: "web" } } ).count()
14. db.companies.find( { $and: [ { $nor: [ { category_code: "web" }, { number_of_employees: 50 } ] }, { founded_month: 1 } ] }, {  name: 1, founded_day: 1, _id: 0} ).limit(5)
15. db.companies.find( { "acquisition.price_amount": 40000000 }, {name: 1, _id: 0} ).sort( { name: 1 } )
16. db.companies.find( { "acquisition.acquired_year": 2014, "acquisition.acquired_month": 1 }, {name: 1, acquisition: 1, _id: 0} )
