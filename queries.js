//Employees 1
db.employees.find().pretty()
//Employees 2
db.employees.find({name:"Steve"}).pretty()
//Employees 3
db.employees.find({age:{$gt:30}}).pretty()
//Employees 4
db.employees.find({"phone.ext":"2143"}).pretty()
//Employees 5 - errata?
db.employees.find({age:{$gt:30}}).pretty()
//Employees 6
db.employees.find({age:{$lte:30}}).pretty()
//Employees 7
db.employees.find({"favorites.food":"pizza"}).pretty()
//Employees 8
db.employees.updateOne({name:"Willy"},{$set:{"phone.personal":"93-123-45-67"}})
//Employees 9
db.employees.updateOne({name:"Bob"},{$set:{privileges:"normal user"}})
//Employees 10
db.employees.find({"favorites.artist":"Picasso"}).pretty()
//Employees 11
db.employees.deleteOne({name:"John"})
