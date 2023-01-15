

print('Employees')

// List all the employees.
print('1. List all Employees')
db.employees.find({}).forEach(printjsononeline)

db.Employees.find({age: {$gt: 30}});

db.Employees.find({name:"Steve"});

db.Employees.find({age: {$gt: 30}});

db.Employees.find({"phone.ext": "2143"});

db.Employees.find({age: {$gte: 30}});

db.Employees.find({age: {$lte: 30}});

db.Employees.find({"favorites.food": "pizza"});

db.Employees.updateOne({name:"Willy"}, {$set:{"phone.personal": "93-123-45-67"}});

db.Employees.updateOne({name:"Bob"}, {$set:{"privileges": "normal user"}});

db.Employees.find({"favorites.artist": "Picasso"});

db.Employees.deleteOne({name:"John"});



db.restaurants.find();

db.restaurants.find({}, {"_id": 1, "name": 1, "borough": 1, "cuisine":1});

db.restaurants.find({}, {"_id": 1, "name": 1, "borough": 1, "address.zipcode":1});

db.restaurants.find({borough:"Bronx"});

db.restaurants.find({borough:"Brooklyn", cuisine:"Steak"});

db.restaurants.find({'grades.score': {$gt: 90}});

db.restaurants.find({$and:[{cuisine:{$ne: "Bakery"}}, {'grades.score': {$gte: 70}}]});

db.restaurants.find({$and:[{cuisine:{$ne:"Chinese"}}, {"grades.grade": "A"}, {borough:{$ne:"Manhattan"}}]});

db.restaurants.updateMany({cuisine: "American "}, { $set: {cuisine: "American"}});

db.restaurants.updateOne({name: "Morris Park Bake Shop"}, { $set: {'address.street': 'Calle falsa 123'}});

db.restaurants.deleteMany({'address.zipcode': '10466'});






db.companies.find({name: "Facebook"});

db.companies.find({category_code: "web"}, {"name": 1});

db.companies.find({name: "Twitter"}, {"name": 1, "category_code": 1, "founded_year": 1});

db.companies.find({category_code: "web"}).limit(50);

db.companies.find({$and: [{category_code: "enterprise", founded_year: {$eq: 2005}}]}, {name: 1, category_code: 1, founded_year: 1});

db.companies.find({$or:[{founded_year: {$eq: 2005}}, {number_of_employees: {$eq: 20}}]}, {"founded_year": 1, "number_of_employees": 1}).sort({"number_of_employees": -1})