print('Employees')

// List all the employees.
print('1. List all Employees')
db.employees.find({}).forEach(printjsononeline)

//Find the employee with whose name is Steve.
db.Employees.find({name: "Steve"})

//Find all employees whose age is greater than 30.
db.Employees.find({age:{$gt: 30}})

//Find the employee whose extension is 2143.
db.Employees.find({"phone.ext": "2143"})

//Find all employees that are over 30.
db.Employees.find({age:{$gt: 30}})

//Find all employees that are less than or equal to 30.
db.Employees.find({age:{$lte: 30}})

//Find all the employees whose favorite food is pizza.
db.Employees.find({"favorites.food": "pizza"})

//Change Willy’s personal phone number to "93-123-45-67".
db.Employees.update(
    {name: "Willy"},
    {$set: {"phone.personal":"93-123-45-67"}});

//Change Bob’s privilege to normal user.
db.Employees.update(
    {name: "Bob"},
    {$set: {"privileges": "user"}});

//Find all employees whose favorite artist is equal to Picasso.
db.Employees.find({"favorites.artist": "Picasso"})

//Delete the user John.
db.Employees.deleteMany({name: "John"})

//List all the restaurants.
db.Restaurants.find()

//Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.Restaurants.aggregate(
    { $project : { _id : 1, cuisine : 1, name: 1, borough: 1 } }
  );

//Find all the restaurants and display only the fields restaurant_id, name, borough and zip code
db.Restaurants.aggregate(
    { $project : { _id : 1, cuisine : 1, name: 1, borough: 1, "adress.zipcode":1 } }
  );

//Find the restaurants which are in the borough Bronx.
db.Restaurants.find({borough:"Bronx"})

//Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.Restaurants.find({borough:"Brooklyn",cuisine:"Steak" })

//Find the restaurants which have achieved a score bigger than 90.
db.Restaurants.find({ "grades.score" : {$gt: 90}})

//Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.Restaurants.find({ "grades.score" : {$gte: 70}, cuisine: {$ne: "Bakery"}})

//Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
db.Restaurants.find({ "grades.grade" : "A", cuisine: {$ne: "Chinese"}, borough: {$ne: "Manhattan"}})
//Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
db.Restaurants.update(
    {cuisine: "American "},
    {$set: {"cuisine": "American"}})

//Update Morris Park Bake Shop address street to Calle falsa 123
db.Restaurants.update(
    {name: "Morris Park Bake Shop"},
    {$set: {"adress.street": "Calle falsa 123"}})

//Delete all the restaurants with address zipcode 10466.
db.Restaurants.deleteMany({"address.zipcode": "10466"})

