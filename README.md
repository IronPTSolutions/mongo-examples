# mongo-examples

Mongo Shell Quick Reference:

https://docs.mongodb.com/manual/reference/mongo-shell/

## Employees

Configure your environment:

__1__ Download [employees.json](https://raw.githubusercontent.com/IronPTSolutions/mongo-examples/master/datasets/employees.json)

__2__ Load employees into work database (terminal) : `mongoimport --drop --db work --collection employees --file path/to/employees.json --jsonArray`

__3__ Check if the data was loaded properly (terminal) : `mongo work --eval "db.employees.find().pretty()"`

__4__ Connect to mongo shell (terminal) : `mongo`

Employee schema:

```
{
  "name": "Sue",
  "age": 19,
  "phone": {
    "personal": "555-123-123",
    "work": "555-456-456",
    "ext": "2342"
  },
  "privileges": "user",
  "favorites": { 
    "artist": "Picasso",
    "food": "pizza"
  },
  "finished": [ 17, 3 ],
  "badges": [ "blue", "black" ],
  "points": [
    { "points": 85, "bonus": 20 },
    { "points": 85, "bonus": 10 }
  ]
}
```

__Test:__

  * List all the employees.
  * Find the employee with whose name is Steve.
  * Find all employees whose age is greater than 30.
  * Find the employee whose extension is 2143.
  * Find all employees that are over 30.
  * Find all employees that are less than or equal to 30.
  * Find all the employees whose favorite food is pizza.
  * Change Willy’s personal phone number to "93-123-45-67".
  * Change Bob’s privilege to normal user.
  * Find all employees whose favorite artist is equal to Picasso.
  * Delete the user John.
  * Add a bonus of 15 to all those who have a bonus less than 10.

## Restaurants

Configure your environment:

__1__ Download [restaurants.json](https://raw.githubusercontent.com/IronPTSolutions/mongo-examples/master/datasets/restaurants.json)

__2__ Load employees into places database (terminal) : `mongoimport --drop --db places --collection restaurants --file path/to/restaurants.json --jsonArray`

__3__ Check if the data was loaded properly (terminal) : `mongo places --eval "db.restaurants.find().pretty()"`

__4__ Connect to mongo shell (terminal) : `mongo`

Restaurant schema:

```
{
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
  "address": {
    "building": "1007",
    "coord": [-73.856077, 40.848447],
    "street": "Morris Park Ave",
    "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
    { 
      "date": {$date": 1393804800000},
      "grade": "A",
      "score": 2
    },
    { 
      "date": {$date": 1378857600000},
      "grade": "B",
      "score": 14
    }
  ]
}
```

__Test:__

  * List all the restaurants.
  * Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.
  * Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.
  * Find the restaurants which are in the borough Bronx.
  * Find the restaurants which are in the borough Brooklyn with Steak cuisine.
  * Find the restaurants which have achieved a score bigger than 90.
  * Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.
  * Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.
  * Update restaurants with 'American ' cuisine to 'American' (without the space!!!)
  * Update Morris Park Bake Shop address street to Calle falsa 123.
  * Delete all the restaurants with address zipcode 10466.

## Companies (Crunchbase)

Configure your environment:

__1__ Download [companies.json](https://raw.githubusercontent.com/IronPTSolutions/mongo-examples/master/datasets/companies.json)

__3__ Load employees into work database (terminal) : `mongoimport --drop --db crunch --collection companies --file path/to/companies.json`

__4__ Check if the data was loaded properly (terminal) : `mongo crunch --eval "db.companies.find().pretty()"`

__5__ Connect to mongo shell (terminal) : `mongo`

Company Schema:

```
{
  "_id": {
    "$oid": "52cdef7c4bab8bd675297d8a"
  },
  "name": "Wetpaint",
  "permalink": "abc2",
  "crunchbase_url": "http://www.crunchbase.com/company/wetpaint",
  "homepage_url": "http://wetpaint-inc.com",
  "blog_url": "http://digitalquarters.net/",
  "blog_feed_url": "http://digitalquarters.net/feed/",
  "twitter_username": "BachelrWetpaint",
  "category_code": "web",
  "number_of_employees": 47,
  "founded_year": 2005,
  "founded_month": 10,
  "founded_day": 17,
  "deadpooled_year": 1,
  "tag_list": "wiki, seattle, elowitz, media-industry, media-platform, social-distribution-system",
  "alias_list": "",
  "email_address": "info@wetpaint.com",
  "phone_number": "206.859.6300",
  "description": "Technology Platform Company",
  "created_at": {
    "$date": 1180075887000
  },
  "updated_at": "Sun Dec 08 07:15:44 UTC 2013",
  "overview": "<p>Wetpaint is a technology platform company that uses its proprietary state-of-the-art technology and expertise in social media to build and monetize audiences for digital publishers. Wetpaint’s own online property, Wetpaint Entertainment, an entertainment news site that attracts more than 12 million unique visitors monthly and has over 2 million Facebook fans, is a proof point to the company’s success in building and engaging audiences. Media companies can license Wetpaint’s platform which includes a dynamic playbook tailored to their individual needs and comprehensive training. Founded by Internet pioneer Ben Elowitz, and with offices in New York and Seattle, Wetpaint is backed by Accel Partners, the investors behind Facebook.</p>",
  "image": {
    "available_sizes": [
      [
        [
          150,
          75
        ],
        "assets/images/resized/0000/3604/3604v14-max-150x150.jpg"
      ],
      [
        [
          250,
          125
        ],
        "assets/images/resized/0000/3604/3604v14-max-250x250.jpg"
      ],
      [
        [
          450,
          225
        ],
        "assets/images/resized/0000/3604/3604v14-max-450x450.jpg"
      ]
    ]
  },
  "products": [
    {
      "name": "Wikison Wetpaint",
      "permalink": "wetpaint-wiki"
    },
    {
      "name": "Wetpaint Social Distribution System",
      "permalink": "wetpaint-social-distribution-system"
    }
  ],
  "relationships": [
    {
      "is_past": false,
      "title": "Co-Founder and VP, Social and Audience Development",
      "person": {
        "first_name": "Michael",
        "last_name": "Howell",
        "permalink": "michael-howell"
      }
    },
    {
      "is_past": false,
      "title": "Co-Founder/CEO/Board of Directors",
      "person": {
        "first_name": "Ben",
        "last_name": "Elowitz",
        "permalink": "ben-elowitz"
      }
    },
    {
      "is_past": false,
      "title": "COO/Board of Directors",
      "person": {
        "first_name": "Rob",
        "last_name": "Grady",
        "permalink": "rob-grady"
      }
    },
    {
      "is_past": false,
      "title": "SVP, Strategy and Business Development",
      "person": {
        "first_name": "Chris",
        "last_name": "Kollas",
        "permalink": "chris-kollas"
      }
    },
    {
      "is_past": false,
      "title": "Board",
      "person": {
        "first_name": "Theresia",
        "last_name": "Ranzetta",
        "permalink": "theresia-ranzetta"
      }
    },
    {
      "is_past": false,
      "title": "Board Member",
      "person": {
        "first_name": "Gus",
        "last_name": "Tai",
        "permalink": "gus-tai"
      }
    },
    {
      "is_past": false,
      "title": "Board",
      "person": {
        "first_name": "Len",
        "last_name": "Jordan",
        "permalink": "len-jordan"
      }
    },
    {
      "is_past": false,
      "title": "Head of Technology and Product",
      "person": {
        "first_name": "Alex",
        "last_name": "Weinstein",
        "permalink": "alex-weinstein"
      }
    },
    {
      "is_past": true,
      "title": "CFO",
      "person": {
        "first_name": "Bert",
        "last_name": "Hogue",
        "permalink": "bert-hogue"
      }
    },
    {
      "is_past": true,
      "title": "CFO/ CRO",
      "person": {
        "first_name": "Brian",
        "last_name": "Watkins",
        "permalink": "brian-watkins"
      }
    },
    {
      "is_past": true,
      "title": "Senior Vice President, Marketing",
      "person": {
        "first_name": "Rob",
        "last_name": "Grady",
        "permalink": "rob-grady"
      }
    },
    {
      "is_past": true,
      "title": "VP, Technology and Product",
      "person": {
        "first_name": "Werner",
        "last_name": "Koepf",
        "permalink": "werner-koepf"
      }
    },
    {
      "is_past": true,
      "title": "VP Marketing",
      "person": {
        "first_name": "Kevin",
        "last_name": "Flaherty",
        "permalink": "kevin-flaherty"
      }
    },
    {
      "is_past": true,
      "title": "VP User Experience",
      "person": {
        "first_name": "Alex",
        "last_name": "Berg",
        "permalink": "alex-berg"
      }
    },
    {
      "is_past": true,
      "title": "VP Engineering",
      "person": {
        "first_name": "Steve",
        "last_name": "McQuade",
        "permalink": "steve-mcquade"
      }
    },
    {
      "is_past": true,
      "title": "Executive Editor",
      "person": {
        "first_name": "Susan",
        "last_name": "Mulcahy",
        "permalink": "susan-mulcahy"
      }
    },
    {
      "is_past": true,
      "title": "VP Business Development",
      "person": {
        "first_name": "Chris",
        "last_name": "Kollas",
        "permalink": "chris-kollas"
      }
    }
  ],
  "competitions": [
    {
      "competitor": {
        "name": "Wikia",
        "permalink": "wikia"
      }
    },
    {
      "competitor": {
        "name": "JotSpot",
        "permalink": "jotspot"
      }
    },
    {
      "competitor": {
        "name": "Socialtext",
        "permalink": "socialtext"
      }
    },
    {
      "competitor": {
        "name": "Ning by Glam Media",
        "permalink": "ning"
      }
    },
    {
      "competitor": {
        "name": "Soceeo",
        "permalink": "soceeo"
      }
    },
    {
      "competitor": {
        "name": "Yola",
        "permalink": "yola"
      }
    },
    {
      "competitor": {
        "name": "SocialGO",
        "permalink": "socialgo"
      }
    },
    {
      "competitor": {
        "name": "IslamNor",
        "permalink": "islamnor"
      }
    }
  ],
  "providerships": [],
  "total_money_raised": "$39.8M",
  "funding_rounds": [
    {
      "id": 888,
      "round_code": "a",
      "source_url": "http://seattlepi.nwsource.com/business/246734_wiki02.html",
      "source_description": "",
      "raised_amount": 5250000,
      "raised_currency_code": "USD",
      "funded_year": 2005,
      "funded_month": 10,
      "funded_day": 1,
      "investments": [
        {
          "company": null,
          "financial_org": {
            "name": "Frazier Technology Ventures",
            "permalink": "frazier-technology-ventures"
          },
          "person": null
        },
        {
          "company": null,
          "financial_org": {
            "name": "Trinity Ventures",
            "permalink": "trinity-ventures"
          },
          "person": null
        }
      ]
    },
    {
      "id": 889,
      "round_code": "b",
      "source_url": "http://pulse2.com/2007/01/09/wiki-builder-website-wetpaint-welcomes-95m-funding/",
      "source_description": "",
      "raised_amount": 9500000,
      "raised_currency_code": "USD",
      "funded_year": 2007,
      "funded_month": 1,
      "funded_day": 1,
      "investments": [
        {
          "company": null,
          "financial_org": {
            "name": "Accel Partners",
            "permalink": "accel-partners"
          },
          "person": null
        },
        {
          "company": null,
          "financial_org": {
            "name": "Frazier Technology Ventures",
            "permalink": "frazier-technology-ventures"
          },
          "person": null
        },
        {
          "company": null,
          "financial_org": {
            "name": "Trinity Ventures",
            "permalink": "trinity-ventures"
          },
          "person": null
        }
      ]
    },
    {
      "id": 2312,
      "round_code": "c",
      "source_url": "http://www.accel.com/news/news_one_up.php?news_id=185",
      "source_description": "Accel",
      "raised_amount": 25000000,
      "raised_currency_code": "USD",
      "funded_year": 2008,
      "funded_month": 5,
      "funded_day": 19,
      "investments": [
        {
          "company": null,
          "financial_org": {
            "name": "DAG Ventures",
            "permalink": "dag-ventures"
          },
          "person": null
        },
        {
          "company": null,
          "financial_org": {
            "name": "Accel Partners",
            "permalink": "accel-partners"
          },
          "person": null
        },
        {
          "company": null,
          "financial_org": {
            "name": "Trinity Ventures",
            "permalink": "trinity-ventures"
          },
          "person": null
        },
        {
          "company": null,
          "financial_org": {
            "name": "Frazier Technology Ventures",
            "permalink": "frazier-technology-ventures"
          },
          "person": null
        }
      ]
    }
  ],
  "investments": [],
  "acquisition": {
    "price_amount": 30000000,
    "price_currency_code": "USD",
    "term_code": "cash_and_stock",
    "source_url": "http://allthingsd.com/20131216/viggle-tries-to-bulk-up-its-social-tv-business-by-buying-wetpaint/?mod=atdtweet",
    "source_description": " Viggle Tries to Bulk Up Its Social TV Business by Buying Wetpaint",
    "acquired_year": 2013,
    "acquired_month": 12,
    "acquired_day": 16,
    "acquiring_company": {
      "name": "Viggle",
      "permalink": "viggle"
    }
  },
  "acquisitions": [],
  "offices": [
    {
      "description": "",
      "address1": "710 - 2nd Avenue",
      "address2": "Suite 1100",
      "zip_code": "98104",
      "city": "Seattle",
      "state_code": "WA",
      "country_code": "USA",
      "latitude": 47.603122,
      "longitude": -122.333253
    },
    {
      "description": "",
      "address1": "270 Lafayette Street",
      "address2": "Suite 505",
      "zip_code": "10012",
      "city": "New York",
      "state_code": "NY",
      "country_code": "USA",
      "latitude": 40.7237306,
      "longitude": -73.9964312
    }
  ],
  "milestones": [
    {
      "id": 5869,
      "description": "Wetpaint named in Lead411's Hottest Seattle Companies list",
      "stoned_year": 2010,
      "stoned_month": 6,
      "stoned_day": 8,
      "source_url": "http://www.lead411.com/seattle-companies.html",
      "source_text": null,
      "source_description": "LEAD411 LAUNCHES \"HOTTEST SEATTLE COMPANIES\" AWARDS",
      "stoneable_type": "Company",
      "stoned_value": null,
      "stoned_value_type": null,
      "stoned_acquirer": null,
      "stoneable": {
        "name": "Wetpaint",
        "permalink": "wetpaint"
      }
    },
    {
      "id": 8702,
      "description": "Site-Builder Wetpaint Makes One For Itself, Using the Demand Media Playbook",
      "stoned_year": 2010,
      "stoned_month": 9,
      "stoned_day": 6,
      "source_url": "http://mediamemo.allthingsd.com/20100906/site-builder-wetpaint-makes-one-for-itself-using-the-demand-media-playbook/",
      "source_text": null,
      "source_description": "All Things D",
      "stoneable_type": "Company",
      "stoned_value": null,
      "stoned_value_type": null,
      "stoned_acquirer": null,
      "stoneable": {
        "name": "Wetpaint",
        "permalink": "wetpaint"
      }
    }
  ],
  "video_embeds": [],
  "screenshots": [
    {
      "available_sizes": [
        [
          [
            150,
            86
          ],
          "assets/images/resized/0016/0929/160929v2-max-150x150.png"
        ],
        [
          [
            250,
            143
          ],
          "assets/images/resized/0016/0929/160929v2-max-250x250.png"
        ],
        [
          [
            450,
            258
          ],
          "assets/images/resized/0016/0929/160929v2-max-450x450.png"
        ]
      ],
      "attribution": null
    }
  ],
  "external_links": [
    {
      "external_url": "http://www.geekwire.com/2011/rewind-ben-elowitz-wetpaint-ceo-building-type-media-company",
      "title": "GeekWire interview: Rewind - Ben Elowitz, Wetpaint CEO, on building a new type of media company"
    },
    {
      "external_url": "http://techcrunch.com/2012/06/17/search-and-social-how-two-will-soon-become-one/",
      "title": "Guest post by CEO Ben Elowitz in TechCrunch"
    },
    {
      "external_url": "http://allthingsd.com/20120516/what-to-expect-when-facebook-is-expecting-five-predictions-for-facebooks-first-public-year/",
      "title": "Guest post by CEO Ben Elowitz in AllThingsD"
    },
    {
      "external_url": "http://adage.com/article/digitalnext/facebook-biggest-player-advertising-s-540-billion-world/235708/",
      "title": "Guest post by CEO Ben Elowitz in AdAge"
    },
    {
      "external_url": "http://www.businessinsider.com/facebook-captures-14-percent-of-our-online-attention-but-only-4-percent-of-ad-spending-online-2012-6",
      "title": "Guest post by CEO Ben Elowitz in Business Insider"
    },
    {
      "external_url": "http://allfacebook.com/wetpaint-media-data_b75963",
      "title": "AllFacebook coverage of Wetpaint"
    },
    {
      "external_url": "http://adage.com/article/digital/celeb-site-wetpaint-shows-media-profit-facebook/237828/",
      "title": "Profile of Wetpaint in Ad Age"
    },
    {
      "external_url": "http://allthingsd.com/20121018/how-to-boost-your-facebook-traffic-tips-and-tricks-from-wetpaint/",
      "title": "Interview with Wetpaint CEO Ben Elowitz in All Things D"
    },
    {
      "external_url": "http://www.xconomy.com/seattle/2012/10/19/wetpaint-starts-licensing-its-facebook-based-media-distribution-tech/",
      "title": "Profile of Wetpaint in Xconomy"
    }
  ],
  "partners": []
}
```

__Test:__

  * Find all the companies that include 'Facebook' on the name field.
  * Let's do it one more together:
  * Find all the companies which category_code is 'web'. Retrive only their name field:
  * Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.
  * Find all the companies who have web as their category_code, but limit the search to 50 companies.
  * Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.
  * Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.
  * Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.
  * Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.
  * Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.
  * Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.
  * Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.
  * Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.
