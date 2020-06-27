// List all the restaurants.
db.restaurants.find().pretty()
// Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
db.restaurants.find({}, {
  name: 1,
  restaurant_id: 1,
  borough: 1,
  cuisine: 1,
  _id: 0
}).pretty()
// Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
db.restaurants.find({}, {
  name: 1,
  restaurant_id: 1,
  borough: 1,
  'address.zipcode': 1,
  _id: 0
}).pretty()
// Find the restaurants which are in the borough Bronx.
db.restaurants.find({
  borough: 'Bronx'
}).pretty()
// Find the restaurants which are in the borough Brooklyn with Steak cuisine.
db.restaurants.find({
  borough: 'Brooklyn',
  cuisine: 'Steak'
}).pretty()
// Find the restaurants which have achieved a score bigger than 90.
db.restaurants.find({
  'grades.score': {
    $gte: 70
  }
}).pretty()
// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
db.restaurants.find({
  'grades.score': {
    $gte: 70
  },
  cuisine: {
    $ne: 'Bakery'
  }
}).pretty()
// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
db.restaurants.find({
  'grades.grade': 'A',
  cuisine: {
    $ne: 'Chinese'
  },
  borough: {
    $ne: 'Manhattan'
  }
}).pretty()
// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
db.restaurants.updateMany({
  cuisine: 'American '
}, {
  $set: {
    cuisine: 'American'
  }
})
// Update Morris Park Bake Shop address street to Calle falsa 123.
db.restaurants.updateOne({
  name: 'Morris Park Bake Shop'
}, {
  $set: {
    'address.street': 'Calle falsa 123'
  }
})
// Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany({
  'address.zipcode': '10466'
})