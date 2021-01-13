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

Companies

1 db.companies.find({name:'Facebook'})
2 db.companies.find({category_code:'web'}, {name:1, '_id':0})
3 db.companies.find({name:'Twitter'}, {name:1, '_id':0, category_code:1, founded_year:1})
4 db.companies.aggregate( [ {$match: {'category_code' : 'web'}}, {$limit:50} ])
5 db.companies.find({category_code:'enterprise', founded_year:2005}, {name:1, category_code:1, founded_year:1, '_id':0})
6 db.companies.find({$or:[{founded_year:2000},{number_of_employees:20}]}, {number_of_employees:1,founded_year:1, '_id':0}).sort({number_of_employees:-1})
7 db.companies.find({$and:[{category_code:'enterprise'}, {founded_year:2005}]}, {name:1, category_code:1, founded_year:1, '_id':0})
8 db.companies.find({$or:[{number_of_employees:20}, {founded_year:2000}]}).sort({number_of_employees:-1})
9 db.companies.find({$nor:[{category_code:'social'}, {homepage_url:'null'}]}, {name:1, category_code:1, '_id':0}).limit(20)
10 db.companies.find({founded_month:{$ne:6}}, {name:1, founded_month:1, '_id':0}).skip(50)  
11 db.companies.find({number_of_employees:50, category_code:{$ne:'web'}})

// AMB AQUEST TIND DUBTES AMB LA TRADUCCIÓ. ENTENC QUE ELS QUE TENEN MENSY DE 5 I AL POSSAR NOR ES GT A VEURE QUÈ ENTENS TU//
12 db.companies.find({$and:[{$nor:[{category_code:'web'}, {number_of_employees:{$gt:50}}]}, {founded_day:1}]}, {name:1, number_of_employees:1,founded_day:1, '_id':0}).limit(5)
13 db.companies.find({'acquisition.price_amount':40000000}).sort({name:1})
14 db.companies.find({$and:[{'acquisition.acquired_year':2014}, {'acquisition.acquired_month':1}]}, {name:1, acquisition:1, '_id':0})
