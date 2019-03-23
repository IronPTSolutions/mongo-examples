// Restaurants

    // • List all the restaurants. 
                    db.restaurants.find()
      
    // • Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine. 
	db.restaurants.find({},{restaurant_id:1,name:1,_id:0,borough:1,cousine:1})

    // • Find all the restaurants and display only the fields restaurant_id, name, borough and zip code. 
	db.restaurants.find({},{restaurant_id:1, name:1, _id:0, borough:1, "address.zipcode":1})

    // • Find the restaurants which are in the borough Bronx. 
	db.restaurants.find({borough:"Bronx" },{ name:1, _id:0})

    // • Find the restaurants which are in the borough Brooklyn with Steak cuisine. 
	db.restaurants.find({borough:"Brooklyn" , cuisine:"Steak"},{ name:1, _id:0})

    // • Find the restaurants which have achieved a score bigger than 90. 
	db.restaurants.find({"grades.score": {$gt: 90 }},{ name:1, _id:0})

    // • Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70. 
	db.restaurants.find({"grades.score": {$gte: 70 }, cuisine: { $ne:["Bakery" ] }},{ name:1, _id:0})

    // • Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan. 
	db.restaurants.find({"grades.grade": "A", cuisine: { $ne:["Chinese" ] },borough: { $ne:["Manhattan"]}},{ name:1, _id:0})


    // • Update restaurants with 'American ' cuisine to 'American' (without the space!!!) 
	db.restaurants.update({cuisine: "American "},{$set: {cuisine: "American"}})


    // • Update Morris Park Bake Shop address street to Calle falsa 123. 
	db.restaurants.update({name: "Morris Park Bake Shop"},{$set: {"address.street": "Calle falsa 123"}})


    // • Delete all the restaurants with address zipcode 10466. 
	db.restaurants.deleteMany({"address.zipcode": "10466"})

