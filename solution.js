let c = db.companies;
//Find all the companies that include 'Facebook' on the name field.
c.find({ name: 'Facebook'  }).pretty();

// Let's do it one more together:
// Find all the companies which category_code is 'web'. Retrive only their name field:
c.find( { "category_code": "web" }, { "name": 1, "_id": 0 } );

// Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
c.find({"name": "Twitter"}, {"name": 1, "category_code": 1, "founded_year": 1, "_id": 0 });

// Find all the companies who have web as their category_code, but limit the search to 50 companies.
c.find({"category_code": "web"}).limit(50).pretty();

// Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
c.find({"category_code": "enterprise", "founded_year": 2005}, {"name": 1, "category_code": 1, "founded_year": 1, "_id": 0}).pretty();

// Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
c.find({ $or: [ {"founded_year": 2000}, {"number_of_employees": 20} ] }).sort({"number_of_employees": -1}).pretty();

// Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
c.find({"category_code": {$nin : ["social", "web"]}}, {"name": 1, "_id": 0, "category_code": 1}).limit(20).pretty();
// Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
c.find({"founded_month": {$ne: 6}}, {"founded_month": 1, "name": 1, "_id": 0}).skip(50);

// Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
c.find({"number_of_employees": 50, "category_code": {$ne: "web"}});

// Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.
c.find({"founded_month":1, "number_of_employees": {$ne: 50}, "category_code": {$ne: "web"}}, {"_id":0, "founded_day": 1}).limit(5);

// Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
c.find({"acquisition.price_amount": 30000000}).sort({"name": 1});

// Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.
c.find({"acquisition.acquired_month": 1, "acquisition.acquired_year": 2014}, {"acquisition": 1, "name": 1, "_id":0}).pretty();

