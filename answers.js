//RESTAURANTS
// List all the restaurants
db.restaurants.find({}, {name:1, _id:0})

// Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0})

// Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({}, {restaurant_id:1, name:1, borough:1, 'address.zipcode':1, _id:0})

// Find the restaurants which are in the borough Bronx.
db.restaurants.find({borough: 'Bronx'}, {})

// Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({borough: 'Bronx', cuisine: 'Steak'}, {})

// Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({'grades.score': {$gt: 90}}, {})

// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.restaurants.find({ $and: [{'grades.score': {$gte: 70}}, { cuisine: {$ne: 'Bakery'}}]})

// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
db.restaurants.find({ $and: [{'grades.grade': {$eq: 'A'}}, { cuisine: {$ne: 'Chinese'}, borough: {$ne: 'Manhattan'}}]})

// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
db.restaurants.updateMany({cuisine: "American "}, { $set: {cuisine: "American"}})

// Update Morris Park Bake Shop address street to Calle falsa 123.
db.restaurants.update({name: "Morris Park Bake Shop"}, { $set: {'address.street': 'Calle falsa 123'}})

// Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany({'address.zipcode': '10466'})

//COMPANIES
// Find all the companies that include 'Facebook' on the name field.

// Let's do it one more together:
// Find all the companies which category_code is 'web'. Retrive only their name field:
// Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
// Find all the companies who have web as their category_code, but limit the search to 50 companies.
// Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
// Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
// Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
// Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
// Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
// Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.
// Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
// Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.