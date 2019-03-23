//Restaurants

1. db.restaurants.find().pretty()
2. db.restaurants.find({},{name: 1, borough: 1, cuisine: 1}).pretty()
3. db.restaurants.find({},{name: 1, borough: 1, "address.zipcode": 1}).pretty()
4. db.restaurants.find({borough: "Bronx"}, {name:1, borough:1}).pretty()
5. db.restaurants.find({borough: "Bronx", cuisine: "Steak"}, {name: 1, cuisine: 1}).pretty()
6. db.restaurants.find({"grades.score": {$gt: 90}}).pretty()
7. db.restaurants.find({cuisine: {$ne: "Bakery"}, "grades.score": {$gt: 70}},{name:1, _id: 0}).pretty()
8. db.restaurants.find({cuisine: {$ne: "Chinese"}, "grades.grade": "A",borough: {$ne: "Manhattan"}},{name:1, _id: 0}).count()
9. db.restaurants.updateMany({cuisine: "American "}, {$set: {cuisine: "American"}})
10. db.restaurants.replaceOne({name: "Morris Park Bake Shop"},{ "address.street":"Calle falsa 123"})
11. db.restaurants.deleteMany({"address.zipcode": "10466"})

//Companies

1. db.companies.find({name:"Facebook"}).count()
2. db.companies.find({"category_code":"web"},{name:1, _id: 0})
3. db.companies.find({name:"Twitter"}, {name: 1, "category_code":1, "founded_year": 1})
4. db.companies.find({"category_code":"web"}).limit(50)
5. db.companies.find({"category_code":"enterprise", "founded_year": 2005}, {name:1, "category_code":1, "founded_year":1, _id:0})
6. db.companies.find({"founded_year": 2000, "number_of_employees": {$lte: 20}}).sort({"number_of_employees":-1}).pretty()
7. db.companies.find({$nor:[{"category_code": "web"},{"category_code": "social"}]}, {name:1, "category_code":1, _id:0}).limit(20)
8. db.companies.find({founded_month: {$ne: 6}},{name:1, founded_month:1, _id:0}).skip(50)
9. db.companies.find({number_of_employees: 50, category_code: {$ne: "web"}})
10. db.companies.find({founded_day: 1, $nor: [{number_of_employees: 50},{category_code: "web"}]}, {name:1, founded_day:1, _id: 0}).limit(5)
11. db.companies.find({"acquisition.price_amount": 40000000}, {name:1, _id:0}).sort({name:1})
12.db.companies.find({"acquisition.acquired_month": 1, "acquisition.acquired_year": 2014}, {name:1, acquisition:1, _id:0}).pretty()
