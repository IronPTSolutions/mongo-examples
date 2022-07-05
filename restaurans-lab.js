// List all the restaurants.
on mongoDB compass open db, open collection, click FIND
// Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.

// Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
// Find the restaurants which are in the borough Bronx.
{ borough: "Bronx" } => FIND
// Find the restaurants which are in the borough Brooklyn with Steak cuisine.
{ borough: "Brooklyn", cuisine: "Steak" } => FIND
// Find the restaurants which have achieved a score bigger than 90.
{ "grades.score": { $gt: 90 } } => FIND
// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
{ cuisine: { $ne: "Bakery" }, "grades.score": { $gte: 70 } } => FIND
// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
{ cuisine: { $ne: "Chinese" }, "grades.grade": { $eq: "A" }, borough: { $ne: "Manhattan}" } } => FIND
// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
updateMany( { cuisine: "American " }, { cuisine: "American" })
// Update Morris Park Bake Shop address street to Calle falsa 123.
findOneAndUpdate( {"addres.street": "Morris Park Ave", cuisine: "Bakery" }, { "addres.street": "Calle falsa 123" } )
// Delete all the restaurants with address zipcode 10466.
deleteMany( { "addres.zipcode": "10466" } )