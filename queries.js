// EMPLOYEES

1. db.employees.find().pretty()
2. db.employees.find({name:"Steve"})
3. db.employees.find({"age":{$gt: 30}}).pretty()
4. db.employees.find({"phone.ext": {$eq:"2143"}}).pretty()
5. db.employees.find({"age":{$gt: 30}}).pretty()
6. db.employees.find({"age":{$lte: 30}}).pretty()
7. db.employees.find({"favorites.food":{$eq: "pizza"}}).pretty()
8. db.employees.updateOne({name:"Willy"}, {$set:{"phone.personal":"93-123-45-67"}})
9. db.employees.updateOne({name:"Bob"}, {$set:{"privileges":"user"}})
10. db.employees.find({"favorites.artist":"Picasso"}).pretty()
11. db.employees.deleteOne({name:"John"})



//RESTAURANT

1. db.restaurants.find().pretty() 
2. db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()
3. db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1}).pretty()
4. db.restaurants.find({borough:"Bronx"}).pretty()
5. db.restaurants.find({borough:"Bronx", cuisine: "Steak"}).pretty()
6. db.restaurants.find({"grades.score": {$gt: 90}}).pretty() 
7. db.restaurants.find({"cuisine": {$ne:"Bakery"}, "grades.score": {$gte: 70}}).pretty() 
8. db.restaurants.find({"cuisine": {$ne:"Chinese"}, "grades.grade": "A", "borough":{$ne:"Manhattan"}}).pretty()
9. db.restaurants.updateMany({cuisine:"American "}, {$set:{"cuisine":"American"}})
    //{ "acknowledged" : true, "matchedCount" : 1255, "modifiedCount" : 1255 }
10. db.restaurants.updateOne({name : "Morris Park Bake Shop"}, {$set:{"address.street": "Calle falsa 123"}})
    //{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
11. db.restaurants.deleteMany({"address.zipcode": "10466"})
    //{ "acknowledged" : true, "deletedCount" : 14 }



//COMPANIES

1. db.companies.find({name:/Facebook/}).pretty()
2. 
3. db.companies.find({category_code: "web"}, {_id: 0, name: 1}).pretty()
4. db.companies.find({name: "Twitter"}, {_id: 0, name: 1, category_code: 1, founded_year: 1}).pretty()
5. db.companies.find({category_code: "web"}).limit(50).pretty()
6. db.companies.find({category_code: "enterprise", founded_year: 2005}, {_id: 0, name: 1, category_code: 1, founded_year: 1}).pretty()
7. db.companies.find({$or: [{founded_year: 2005}, {number_of_employees: 20}]}).sort({"number_of_employees": -1}).pretty()
8. db.companies.find({category_code: {$nin:["web", "social"]}}, {_id: 0, name: 1, category_code: 1}).limit(20).pretty()
9. db.companies.find({founded_month: {$ne: 6}}, {_id: 0,name: 1, founded_month: 1}).skip(50).pretty()
10. db.companies.find({number_of_employees: 50, category_code: {$ne: "web"}}, {_id: 0,name: 1}).pretty()
11. db.companies.find({"founded_day": 1, "number_of_employees": {$ne: 50}, "category_code": {$ne: "web"}}, {_id: 0, founded_day: 1, name: 1}).limit(5).pretty()
12. db.companies.find({"acquisition.price_amount": 40000000}).sort({name: 1}).pretty()
        // db.companies.find({"acquisition.price_amount": 40000000}, {_id: 0, acquisition: 1, name: 1}).sort({name: 1}).pretty()
13. db.companies.find({"acquisition.acquired_year": 2014,"acquisition.acquired_month" : 1}, {_id: 0, acquisition: 1, name: 1}).pretty()
    // db.companies.find({acquisition: {$ne: null}}, {_id: 0, acquisition: 1, name: 1}).pretty()
    