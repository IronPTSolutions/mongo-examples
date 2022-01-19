//Employees
2 Load employees into work database (terminal) : 
mongoimport --drop --db work --collection employees --file datasets/employees.json --jsonArray

3 Check if the data was loaded properly (terminal) : mongo work --eval "db.employees.find().pretty()"

4 Connect to mongo shell (terminal) : mongo



print('Employees')

// List all the employees.
print('1. List all Employees')
db.employees.find({}).forEach(printjsononeline)

List all the employees.
> db.employees.find().pretty()

Find the employee with whose name is Steve.
> db.employees.count({name : "Steve"}).pretty()

Find all employees whose age is greater than 30.
> db.employees.find({"age": { $gt: 30 }},{age : 1}).pretty()

Find the employee whose extension is 2143.
> db.employees.find({"phone.ext":"2143" },{name:1}).pretty()

Find all employees that are over 30.
???

Find all employees that are less than or equal to 30.
> db.employees.find({age : {$lte:30} },{name:1}).pretty()

Find all the employees whose favorite food is pizza.
> db.employees.find({"favorites.food":"pizza" },{name : 1}).pretty()

Change Willy’s personal phone number to "93-123-45-67".
> db.employees.updateOne({name:"Willy"},{$set:{"phone.personal" :"93-123-45-67" }})

Change Bob’s privilege to normal user.
> db.employees.updateOne({name:"Bob"},{$set:{"privileges" :"user" }})

Find all employees whose favorite artist is equal to Picasso.
> db.employees.find({"favorites.artist": "Picasso"},{name : 1}).pretty()

Delete the user John.
> db.employees.deleteOne({ name : "John"});



//RESTAURANTS
2 Load employees into places database (terminal) : 
mongoimport --drop --db places --collection restaurants --file path/to/restaurants.json --jsonArray

3 Check if the data was loaded properly (terminal) : mongo places --eval "db.restaurants.find().pretty()"

4 Connect to mongo shell (terminal) : mongo


List all the restaurants.
> db.restaurants.find().pretty()

Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
> db.restaurants.find({},{_id:0, name:1, restaurant_id:1, borough:1, cuisine:1})

Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({},{_id:0, name:1, restaurant_id:1, borough:1, "address.zipcode":1})

Find the restaurants which are in the borough Bronx.
> db.restaurants.find({borough: "Bronx"}).pretty()

Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({borough: "Brooklyn", "cuisine": "Steak"}).pretty()

Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({"grades.score" : {$gt:90}}).pretty()

Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.restaurants.find({cuisine : {$ne:"Bakery"}, "grades.score" : {$gte:70}} ,{cuisine:1, "grades.score":1}).pretty()

Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
db.restaurants.find({cuisine : {$ne:"Chinese"}, "grades.grade" : "A", borough: {$ne:"Manhattan"}} ,{cuisine:1, "grades.grade":1}).pretty()
//mismo resultado con o sin $and
db.restaurants.count({cuisine : {$ne:"Chinese"}, "grades.grade" : "A", borough: {$ne:"Manhattan"}})
db.restaurants.count({$and:[ {cuisine:{$ne:"Chinese"}, "grades.grade":"A",borough:{$ne:"Manhattan"}}]})


Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
db.restaurants.count({cuisine : 'American ', })
db.restaurants.updateMany({cuisine : 'American '}, {$set:{cuisine : 'American' }})


Update Morris Park Bake Shop address street to Calle falsa 123.
db.restaurants.find({name : "Morris Park Bake Shop"}, {"address.street" : 1}).pretty()
db.restaurants.updateOne({name : "Morris Park Bake Shop"}, {$set :{"address.street" : "Calle falsa 123"}})

Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany({ "address.zipcode": "10466" });
db.restaurants.count({ "address.zipcode": "10466" });

// COMPANIES
3 Load employees into work database (terminal) : 
mongoimport --drop --db crunch --collection companies --file datasets/companies.json

4 Check if the data was loaded properly (terminal) : mongo crunch --eval "db.companies.find().pretty()"

5 Connect to mongo shell (terminal) : mongo


//db.companies.count()
18801

//Find all the companies that include 'Facebook' on the name field.
db.companies.find({name : "Facebook"}).pretty()

//Find all the companies which category_code is 'web'. Retrive only their name field:
db.companies.find({category_code : "web"},{name :1})

//Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
db.companies.find({name : "Twitter"},{name :1, category_code :1, founded_year:1 }).pretty()

//Find all the companies who have web as their category_code, but limit the search to 50 companies.
db.companies.find({category_code : "web"},{name :1}).limit(50)

//Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
db.companies.find({category_code : "enterprise", founded_year:2005},{name :1,category_code :1 ,founded_year :1, _id :0})

//Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
db.companies.find( {$or:[{founded_year:2000}, {number_of_employees:{$gt:20}} ]},{number_of_employees:1, _id:0}).sort({number_of_employees : -1}).pretty()

//Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
db.companies.find( {$or:[{category_code:{$ne:"web"}}, {category_code:{$ne:"social"}}]}, {name:1, category_code:1, _id:0}).limit(20)

//Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
db.companies.find({founded_month:{$ne:6}}, {name:1, founded_month: 1, _id:0}).skip(50)

//Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
db.companies.find({number_of_employees : 50, category_code:{$ne:"web"}}).pretty()
db.companies.count({number_of_employees : 50, category_code:{$ne:"web"}})


//Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.
db.companies.find({founded_day : 1, number_of_employees:{$lt:50}, category_code:{$ne:"web"}}, {name:1,founded_day:1 , _id:0}).limit(5).pretty()


//Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
db.companies.find({"acquisition.price_amount" : 40000000}, {name:1, _id:0}).sort({name:1}).pretty()

db.companies.count({"acquisition.price_amount" : 40000000})

//Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.
db.companies.find({"acquisition.acquired_year":2014, "acquisition.acquired_month":1},{name:1, acquisition:1, _id:0}).pretty()

