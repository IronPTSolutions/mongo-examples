EMPLOYEES

1. db.employees.find().pretty()
2. db.employees.find({"name": /steve/i})
3. db.employees.find({"age": {$gt:30}})
4. db.employees.find({"phone.ext": {$eq:"2143"}})
5. db.employees.find({"age": {$gt:30}})
6. db.employees.find({"age":{$lte:30}})
7. db.employees.find({"favorites.food":{$eq:"pizza"}})
8. db.employees.updateOne({"name": "Willy"},{$set: {"phone.personal" : "93-123-45-67"}})
9. db.employees.updateOne("{name": "Bob"},{$set: {"privileges" : "user"}})
10. db.employees.find({"favorites.artist":{$eq: "Picasso"}})

RESTAURANTS
1. db.restaurants.find().pretty()
2. db.restaurants.find({},{"resturant_id":1, "name":1, "borough":1, "cuisine":1})
3. db.restaurants.find({},{"resturant_id":1, "name":1, "borough":1, "address.zipcode":1})
4. db.restaurants.find({$or: [{"borough":"Bronx"}{"cuisine":"Steak"}]})
5. db.restaurants.find({"grades.score": {$gt:90}})
6. db.restaurants.find({"cuisine": {$ne: "Bakery"},"grades.score": {$gte:70}})
7. db.restaurants.find({"cuisine": {$ne: "Chinese"}, "grades.grade":{$eq :"A"}, "borough": {$ne: "Manhattan"}})
8. db.restaurants.updateMany({"cuisine":"American "}, {$set:{"cuisine":"American"}})
9. db.restaurants.updateMany({"name":"Morris Park Bake Shop"}, {$set:{"address.street":"Calle falsa 123"}})
10. db.restaurants.deleteMany({"address.zipcode":"10466"})


COMPANIES
1. db.companies.find({"name" : {$eq :"Facebook"}})
2. db.companies.find({"category_code": "web"},{"name" : 1 , "_id" : 0})
3. db.companies.find({"name" : {$eq :"Twitter"}}, {"name": 1 , "category_code" : 1, "founded_year" : 1, "_id" : 0})
4. db.companies.find({"category_code": "web"}).limit(50)
5. db.companies.find({"category_code": "enterprise" , "founded_year" :{$eq: 2005}},{"name": 1 , "category_code" : 1, "founded_year" : 1, "_id" : 0})
6. db.companies.find({$or: [{"founded_year" :{$eq: 2000}}, {"number_of_employees" : {$lte: 20}}]}).sort({"number_of_employees":-1})
7. db.companies.find({$nor: [{"category_code": {$eq: "social"}},{"category_code": {$eq: "web"}} ]},{"name": 1 , "category_code" : 1, "_id" : 0}).limit(20)
8. db.companies.find({"founded_month" : {$ne: 6}} , {"founded_year" : 1, "founded_month" : 1, "_id" : 0  }).skip(50)
9. db.companies.find({"number_of_employees" : 50 , "category_code": {$ne : "web"}})
10. db.companies.find({"founded_day" : {$eq: 1}, $nor: [{"category_code": {$eq: "web"}},{"number_of_employees" : {$ne :50}} ]}, {"founded_day" : 1, "name": 1 , "_id" : 0}).limit(5)
11. db.companies.find({"acquisition.price_amount" : {$eq: 40000000}}).sort({"name":1})
12. db.companies.find({"acquisition.acquired_month" : {$eq:1}, "acquisition.acquired_year" : {$eq:2014}},{"acquisition" : 1, "name" : 1})
