

        db.restaurants.find()
      
  
	db.restaurants.find({},{restaurant_id:1,name:1,_id:0,borough:1,cousine:1})


	db.restaurants.find({},{restaurant_id:1, name:1, _id:0, borough:1, "address.zipcode":1})


	db.restaurants.find({borough:"Bronx" },{ name:1, _id:0})

   
	db.restaurants.find({borough:"Brooklyn" , cuisine:"Steak"},{ name:1, _id:0})

  
	db.restaurants.find({"grades.score": {$gt: 90 }},{ name:1, _id:0})

   
	db.restaurants.find({"grades.score": {$gte: 70 }, cuisine: { $ne:["Bakery" ] }},{ name:1, _id:0})

   
	db.restaurants.find({"grades.grade": "A", cuisine: { $ne:["Chinese" ] },borough: { $ne:["Manhattan"]}},{ name:1, _id:0})


  
	db.restaurants.update({cuisine: "American "},{$set: {cuisine: "American"}})


  
	db.restaurants.update({name: "Morris Park Bake Shop"},{$set: {"address.street": "Calle falsa 123"}})


	db.restaurants.deleteMany({"address.zipcode": "10466"})

