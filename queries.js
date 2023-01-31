print("Employees");

// List all the employees.
print("1. List all Employees");
db.employees.find({}).forEach(printjsononeline);

// Find the employee with whose name is Steve
db.employees.find({ name: "Steve" });

//Find all employees whose age is greater than 30.
db.employees.find({ age: { $gt: 30 } });

// Find the employee whose extension is 2143.
db.employees.find({ "phone.ext": "5623" });

// Find all employees that are over 30.
db.employees.find({ age: { $gte: 30 } });

// Find all the employees whose favorite food is pizza.
db.employees.find({ "favorites.food": "pizza" });

// Change Willy’s personal phone number to "93-123-45-67".
db.employees.updateOne(
  { name: "Willy" },
  { $set: { "phone.personal": "93-123-45-67" } }
);

// Change Bob’s privilege to normal user.
db.employees.updateOne({ name: "Bob" }, { $set: { privileges: "normal" } });

// Find all employees whose favorite artist is equal to Picasso.
db.employees.find({ "favorites.artist": "Picasso" });

// Delete the user John.
db.employees.deleteOne({ name: "John" });

print("Employees");
// List all the restaurants
db.restaurants.find();

//Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({}, { _id: 1, name: 1, borough: 1, cuisine: 1 });

//Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({}, { _id: 1, name: 1, borough: 1, "address.zipcode": 1 });

//Find the restaurants which are in the borough Bronx.
db.restaurants.find({ borough: "Bronx" });

//Find the restaurants which are in the borough Brooklyn with Steak cuisine.
