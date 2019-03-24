//Find all the companies that include 'Facebook' on the name field.
let fbName = db.companies.find({name: "Facebook"}).pretty()
print(fbName);

//Find all the companies which category_code is 'web'. Retrive only their name field:
db.companies.find({category_code: "web"}, { name: 1, _id: 0}).pretty()

//Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.

db.companies.find({name: "Twitter"}, { name: 1, category_code: 1, founded_year: 1,  _id: 0}).pretty()

{ "name" : "Twitter", "category_code" : "social", "founded_year" : 2006 }

//Find all the companies who have web as their category_code, but limit the search to 50 companies.
db.companies.find({category_code: "web"}, { name: 1, _id: 0}).pretty().limit ( 50 )

//Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
db.companies.find({category_code: "enterprise"}, { name: 1, category_code: 1, founded_year: 1,  _id: 0}).pretty()

//Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
db.companies.find( { $or: [ { "founded_year": 2000 }, { "number_of_employees":20} ] } ).sort(  {number_of_employees: -1} ).pretty()

//Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
 db.companies.find( { $nor: [ { "category_code": "web" }, { "category_code": "social"} ] } ).pretty()

//Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
db.companies.find({ "funded_month": { $not: /6/ }}).pretty().skip(50);

//Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
db.companies.find({ $and: [{ "number_of_employees":50}, {"category_code": { $not: /web/} } ] }, {"number_of_employees":1}).pretty()

//Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
db.companies.find({})