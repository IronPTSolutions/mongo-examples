// RESTAURANTS


// Iteration 1
db.restaurants.find({},{name:1, _id:0})

// Iteration 2
db.restaurants.find({},{name:1, _id:1,borough:1,cuisine:1})

// Iteration 3
db.restaurants.find({},{name:1, _id:1,borough:1,"address.zipcode":1})

// Iteration 4
db.restaurants.find({borough:"Bronx"},{name:1, _id:0})

// Iteration 5
db.restaurants.find({borough:"Brooklyn",cuisine:"Steak"},{name:1, _id:0,borough:1,cuisine:1})

// Iteration 6
db.restaurants.find({"grades.score":{$gt : 90}},{name:1, _id:0,"grades.score":1})

//Iteration 7
db.restaurants.find({cuisine:{$ne : "Bakery"},"grades.score":{$gte:70}},{name:1, _id:0,"grades.score":1,cuisine:1})

// Iteration 8
db.restaurants.find({cuisine: {$ne: "Chinese"}, borough:{$ne: "Manhattan"}, "grades.grade": "A"}, {name:1, _id:1})

// Iteration 9
db.restaurants.updateMany({cuisine:"American "},{$set:{cuisine:"American"}});

// Iteration 10
db.restaurants.updateOne({name:"Morris Park Bake Shop"},{$set:{"address.street":"Calle falsa 123"}})

//Iteration 11
db.restaurants.deleteMany({"address.zipcode":"10466"})


// COMPANIES

//Iteration 1
db.companies.find({ name: {$regex:'.*Facebook*.'}},{name:1, _id:0})

//Iteration 2
db.companies.find({"category_code":"web"},{name:1,_id:0})

//Iteration 3
db.companies.find({ name: {$regex:'.*Twitter*.'}},{name:1, _id:0,"category_code":1,"founded_year":1})

//Iteration 4
db.companies.find({"category_code":"web"},{name:1,_id:0}).limit(50)

//Iteration 5
db.companies.find({"category_code":"enterprise","founded_year":2005},{name:1, _id:0,"category_code":1,"founded_year":1})

//Iteration 6
db.companies.find({ $or: [{"founded_year":2000}, {"number_of_employees":20}]},{name:1, _id:0,"number_of_employees":1,"founded_year":1}).sort({"number_of_employees":-1})

//Iteration 7
db.companies.find({$nor:[{"category_code":"web"},{"category_code":"social"}]},{name:1,"category_code":1,_id:0}).limit(20);

//Iteration 8
db.companies.find({"founded_month":{$ne:6}},{"founded_month":1,name:1,_id:0}).skip(50)

//Iteration 9
db.companies.find({"number_of_employees":50,"category_code":{$ne:"web"}},{"number_of_employees":1,name:1,_id:0,"category_code":1})

//Iteration 10
db.companies.find({$nor:[{'number_of_employees':50},{'category_code':'web'}],'founded_day':1},{name:1,_id:0,'founded_day':1}).limit(5)

//Iteration 11
db.companies.find({'acquisition.price_amount':40000000},{name:1,_id:0,'acquisition.price_amount':1}).sort({'name':1})

//Iteration 12
db.companies.find({'acquisition.acquired_year':2013},{_id:0,name:1,'acquisition.acquired_year':1})