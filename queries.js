//1. list restaurants
db.restaurants.find()

//2. Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

//3. Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1 })

// Find the restaurants which are in the borough Bronx.
db.restaurants.find({ borough: 'Bronx' })

// Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({ borough: 'Brooklyn', cuisine: 'Steak' })

// Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({ 'grades.score': { $gt: 90 } })

// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.restaurants.find({ cuisine: { $ne: 'Bakery' }, 'grades.score': { $gte: 70 } })


// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
db.restaurants.find({ cuisine: { $ne: 'Chinese' }, borough: { $ne: 'Manhattan' }, 'grades.grade': 'A' })   

// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
db.restaurants.updateMany({ cuisine: 'American ' }, { $set: { cuisine: 'American' } })

// Update Morris Park Bake Shop address street to Calle falsa 123.
db.restaurants.updateOne({ name: 'Morris Park Bake Shop' }, { $set: { 'address.street': 'Calle falsa 123' } })

// Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany({ 'address.zipcode': '10466' })




// Find all the companies that include 'Facebook' on the name field.
db.companies.find({ name:/Facebook/ })

// Find all the companies which category_code is 'web'. Retrive only their name field:
db.companies.find({ category_code:'web' }, { name: 1, _id: 0 })

// Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
db.companies.find({ name:'Twitter' }, { name: 1, category_code: 1, founded_year: 1,_id: 0 })

// Find all the companies who have web as their category_code, but limit the search to 50 companies.
db.companies.find({ category_code:'web' }).limit(50)

// Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
db.companies.find({ category_code:'enterprise', founded_year: 2005 }, { name: 1, founded_year: 1, _id: 0 })

// **Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
db.companies.find({ $or: [{ founded_year: 2005 }, { number_of_employees: 20 }] }, {number_of_employees: 1}).sort( { number_of_employees: -1 } )

// Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
db.companies.find({ $nor: [{ category_code:'web' }, {  category_code:'social' }] }, {name: 1, category_code: 1, _id: 0}).limit(20)

// Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
db.companies.find({ founded_month: { $ne: 6 } }, {name: 1, founded_month: 1, _id: 0}).skip(5)

// Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
db.companies.find({ number_of_employees: 50, category_code: { $ne: 'web' } })

// Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.
// Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
// Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.