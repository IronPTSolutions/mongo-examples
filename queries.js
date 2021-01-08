Employees

1 db.employees.find({}).pretty() // también es válido find()
2 db.employees.find({name:'Steve'})
3 db.employees.find({age:{$gt:30}})
4 db.employees.find({'phone.ext':'2143'}) 
5 db.employees.find({age:{$gte:30}})
6 db.employees.find({age:{$lte:30}})
7 db.employees.find({'favorites.food':'pizza'})
8 db.employees.updateOne({name:'Willy'}, {$set : {'phone.personal':'93-123-45-67'}})
9 db.employees.updateOne({name:'Bob'}, {$set : {privileges:'normal'}})
10 db.employees.find({'favorites.artist':'Picasso'})

Restaurants

1 db.restaurants.find()
2 db.restaurants.find({}, {name:1, restaurant_id:1, borough:1, '_id':0, cuisine:1})
3 db.restaurants.find({}, {name:1, restaurant_id:1, borough:1, '_id':0, 'address.zipcode':1})
4 db.restaurants.find({borough : 'Brooklyn', cuisine : 'Steak'})
5 db.restaurants.find({'grades.score': {$gt : 90}})
6 db.restaurants.find({'cuisine' : {$ne : 'Bakery'}, 'grades.score': {$gte : 70}})
7 db.restaurants.find({cuisine : {$ne: 'Chinese'}, 'grades.grade' : 'A', borough : {$ne : 'Manhattan'}})
8 db.restaurants.updateMany({cuisine:'American '} , {$set : {cuisine: 'American'}})
9 db.restaurants.find({name:'Morris Park Bake Shop'}) //para buscarlo
  db.restaurants.updateOne({'address.street':'Morris Park Ave'}, {$set : {'address.street':'Calle false 123'}}) //el cambio
10 db.restaurants.deleteMany({'address.zipcode' : '10466'})
