PRÀCTICA 3

IMPORTAR JSON o CSV:

mongoimport --db users --collection contacts --file contacts.json

mongoimport --db users --collection contacts --type csv --headerline --file /opt/backups/contacts.csv

Database: foursquare
> show dbs
local 0.000GB
> use foursquare
switched to db foursquare
> db
foursquare
> db.createCollection(“restaurants”)
{“ok”: 1}
> show collections
restaurants

> mongoimport --help
> mongoimport --host 127.0.0.1 --port 27017 --db foursquare --collection restaurants --type json --file restaurants.json --drop --stopOnError --jsonArray

> show dbs
foursquare 0.005GB
local 0.000GB
> show collections
restaurants
> db.restaurants.count()
25359
> db.restaurants.findOne()
> db.restaurants.remove({})
WriteResult({ "nRemoved" : 25359 })
> db.restaurants.drop()
true

Database: twitter
> show dbs
foursquare 0.005GB
local
0.000GB
> use twitter
switched to db twitter
> db
twitter
> db.createCollection(“tweets”)
{“ok”: 1}
> show collections
tweets

mongoimport --host 127.0.0.1 --port 27017 --db twitter --collection tweets --type json --file tweets.json --drop --stopOnError --jsonArray

>>>> oooo sense --jsonArry


mongoimport --host 127.0.0.1 --port 27017
--db twitter --collection tweets
--type json --file tweets.json
--drop --stopOnError


Database: imdb
> use imdb
switched to db imdb
> db
imdb
> db.createCollection("movies")
{“ok”: 1}
> db.createCollection("oscars")
{“ok”: 1}
> db.createCollection("people")
{“ok”: 1}
> show collections
movies oscars people

mongoimport --host 127.0.0.1 --port 27017 --jsonArray --db imdb --collection movies --type csv --file movies.json --drop --stopOnError  --headerline --ignoreBlanks; 
mongoimport --host 127.0.0.1 --port 27017 --jsonArray --db imdb --collection oscars --type csv --file oscars.json --drop --stopOnError  --headerline --ignoreBlanks;
mongoimport --host 127.0.0.1 --port 27017 --jsonArray --db imdb --collection people --type csv --file people.json --drop --stopOnError  --headerline --ignoreBlanks

mongoimport --host 127.0.0.1 --port 27017 --db imdb --collection people --type json --file people.json --drop --stopOnError
mongoimport --host 127.0.0.1 --port 27017 --db imdb --collection movies --type json --file movies.json --drop --stopOnError
mongoimport --host 127.0.0.1 --port 27017 --db imdb --collection oscars --type json --file oscars.json --drop --stopOnError



############################################################################################################################################################
############################################################################################################################################################
#####################  					D A T A B A S E: imdb | C O L L E C T I O N: people                            #####################
############################################################################################################################################################
############################################################################################################################################################

//1.- Buscar las personas que sólo han actuado (no dirigido) (1909)
db.people.find({"hasActed":true,"hasDirected":null}).count()

-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 
{
        "_id" : "0000002",
        "name" : "Lauren Bacall",
        "dob" : "1924-9-16",
        "pob" : "New York, New York, USA",
        "hasActed" : true
}
{
        "_id" : "0000004",
        "name" : "John Belushi",
        "dob" : "1949-1-24",
        "pob" : "Chicago, Illinois, USA",
        "hasActed" : true
}
....

//2.- Buscar las personas que sólo han dirigido (no actuado) (341)
db.people.find({"hasDirected":true,"hasActed":null}).count()

-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : "0000033",
        "name" : "Alfred Hitchcock",
        "dob" : "1899-8-13",
        "pob" : "Leytonstone, London, England, UK",
        "hasDirected" : true
}
{
        "_id" : "0000040",
        "name" : "Stanley Kubrick",
        "dob" : "1928-7-26",
        "pob" : "Bronx, New York, USA",
        "hasDirected" : true
}
....

//3.- Buscar las personas que han actuado y dirigido (20)
db.people.find({"hasDirected":true,"hasActed":true}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : "0000059",
        "name" : "Laurence Olivier",
        "dob" : "1907-5-22",
        "pob" : "Dorking, Surrey, England, UK",
        "hasActed" : true,
        "hasDirected" : true
}
{
        "_id" : "0000095",
        "name" : "Woody Allen",
        "dob" : "1935-12-1",
        "pob" : "Brooklyn, New York, USA",
        "hasActed" : true,
        "hasDirected" : true
}
...


//4.- Buscar las personas que ni han actuado ni dirigido (29)
db.people.find({"hasDirected":null,"hasActed":null}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : "0000076",
        "name" : "Francois Truffaut",
        "dob" : "1932-2-6",
        "pob" : "Paris, France"
}
{
        "_id" : "0000334",
        "name" : "Yun-Fat Chow",
        "dob" : "1955-5-18",
        "pob" : "Lamma Island, Hong Kong"
}
...

############################################################################################################################################################
############################################################################################################################################################
#####################  					D A T A B A S E: edx   | C O L L E C T I O N: bios                             #####################
############################################################################################################################################################
############################################################################################################################################################

mongoimport --host 127.0.0.1 --port 27017 --db edx --collection bios --type json --file bios.json --drop --stopOnError
mongoimport --host 127.0.0.1 --port 27017 --db edx --collection books --type json --file books.json --drop --stopOnError
mongoimport --host 127.0.0.1 --port 27017 --db edx --collection students --type json --file students.json --drop --stopOnError

//1.- Buscar las personas con premios otorgados en el año 2001 (3)
db.bios.find({"awards.year":2001}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : 4,
        "name" : {
                "first" : "Kristen",
                "last" : "Nygaard"
        },
        "birthYear" : 1906,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 5,
        "name" : {
                "first" : "Ole-Johan",
                "last" : "Dahl"
        },
        "birthYear" : 1926,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 6,
        "name" : {
                "first" : "Guido",
                "last" : "van Rossum"
        },
        "birthYear" : 1931,
        "contribs" : [
                "Python"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : 2001,
                        "by" : "Free Software Foundation"
                },
                {
                        "award" : "NLUUG Award",
                        "year" : 2003,
                        "by" : "NLUUG"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//2.- Buscar las personas que hayan obtenido el premio 'Turing Award' (5)
db.bios.find({"awards.award":"Turing Award"}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 

{
        "_id" : 1,
        "name" : {
                "first" : "John",
                "last" : "Backus"
        },
        "birthYear" : 1924,
        "deathYear" : 2007,
        "contribs" : [
                "Fortran",
                "ALGOL",
                "Backus-Naur Form",
                "FP"
        ],
        "awards" : [
                {
                        "award" : "W.W. McDowell Award",
                        "year" : 1967,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1975,
                        "by" : "National Science Foundation"
                },
                {
                        "award" : "Turing Award",
                        "year" : 1977,
                        "by" : "ACM"
                },
                {
                        "award" : "Draper Prize",
                        "year" : 1993,
                        "by" : "National Academy of Engineering"
                }
        ]
}
{
        "_id" : 2,
        "name" : {
                "first" : "John",
                "last" : "McCarthy"
        },
        "birthYear" : 1927,
        "deathYear" : 2011,
        "contribs" : [
                "Lisp",
                "Artificial Intelligence",
                "ALGOL"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1971,
                        "by" : "ACM"
                },
                {
                        "award" : "Kyoto Prize",
                        "year" : 1988,
                        "by" : "Inamori Foundation"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1990,
                        "by" : "National Science Foundation"
                }
        ]
}
{
        "_id" : 4,
        "name" : {
                "first" : "Kristen",
                "last" : "Nygaard"
        },
        "birthYear" : 1906,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 5,
        "name" : {
                "first" : "Ole-Johan",
                "last" : "Dahl"
        },
        "birthYear" : 1926,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 7,
        "name" : {
                "first" : "Dennis",
                "last" : "Ritchie"
        },
        "birthYear" : 1956,
        "deathYear" : 2011,
        "contribs" : [
                "UNIX",
                "C"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1983,
                        "by" : "ACM"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1998,
                        "by" : "United States"
                },
                {
                        "award" : "Japan Prize",
                        "year" : 2011,
                        "by" : "The Japan Prize Foundation"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//3.- Buscar las personas que haya obtenido un premio del tipo 'National Medal of' (4)
db.bios.find({"awards.award":/^National Medal of/}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 
{
        "_id" : 1,
        "name" : {
                "first" : "John",
                "last" : "Backus"
        },
        "birthYear" : 1924,
        "deathYear" : 2007,
        "contribs" : [
                "Fortran",
                "ALGOL",
                "Backus-Naur Form",
                "FP"
        ],
        "awards" : [
                {
                        "award" : "W.W. McDowell Award",
                        "year" : 1967,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1975,
                        "by" : "National Science Foundation"
                },
                {
                        "award" : "Turing Award",
                        "year" : 1977,
                        "by" : "ACM"
                },
                {
                        "award" : "Draper Prize",
                        "year" : 1993,
                        "by" : "National Academy of Engineering"
                }
        ]
}
{
        "_id" : 2,
        "name" : {
                "first" : "John",
                "last" : "McCarthy"
        },
        "birthYear" : 1927,
        "deathYear" : 2011,
        "contribs" : [
                "Lisp",
                "Artificial Intelligence",
                "ALGOL"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1971,
                        "by" : "ACM"
                },
                {
                        "award" : "Kyoto Prize",
                        "year" : 1988,
                        "by" : "Inamori Foundation"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1990,
                        "by" : "National Science Foundation"
                }
        ]
}
{
        "_id" : 3,
        "name" : {
                "first" : "Grace",
                "last" : "Hopper"
        },
        "title" : "Rear Admiral",
        "birthYear" : 1915,
        "deathYear" : 1992,
        "contribs" : [
                "UNIVAC",
                "compiler",
                "FLOW-MATIC",
                "COBOL"
        ],
        "awards" : [
                {
                        "award" : "Computer Sciences Man of the Year",
                        "year" : 1969,
                        "by" : "Data Processing Management Association"
                },
                {
                        "award" : "Distinguished Fellow",
                        "year" : 1973,
                        "by" : " British Computer Society"
                },
                {
                        "award" : "W. W. McDowell Award",
                        "year" : 1976,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1991,
                        "by" : "United States"
                }
        ]
}
{
        "_id" : 7,
        "name" : {
                "first" : "Dennis",
                "last" : "Ritchie"
        },
        "birthYear" : 1956,
        "deathYear" : 2011,
        "contribs" : [
                "UNIX",
                "C"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1983,
                        "by" : "ACM"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1998,
                        "by" : "United States"
                },
                {
                        "award" : "Japan Prize",
                        "year" : 2011,
                        "by" : "The Japan Prize Foundation"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//4.- Buscar las personas con fecha de nacimiento de la que no conste su fecha de defunción (3)
db.bios.find({"birthYear":{$exists:true},"deathYear":{$exists:false}}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 
> 

{
        "_id" : 6,
        "name" : {
                "first" : "Guido",
                "last" : "van Rossum"
        },
        "birthYear" : 1931,
        "contribs" : [
                "Python"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : 2001,
                        "by" : "Free Software Foundation"
                },
                {
                        "award" : "NLUUG Award",
                        "year" : 2003,
                        "by" : "NLUUG"
                }
        ]
}
{
        "_id" : 8,
        "name" : {
                "first" : "Yukihiro",
                "aka" : "Matz",
                "last" : "Matsumoto"
        },
        "birthYear" : 1941,
        "contribs" : [
                "Ruby"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : "2011",
                        "by" : "Free Software Foundation"
                }
        ]
}
{
        "_id" : 9,
        "name" : {
                "first" : "James",
                "last" : "Gosling"
        },
        "birthYear" : 1965,
        "contribs" : [
                "Java"
        ],
        "awards" : [
                {
                        "award" : "The Economist Innovation Award",
                        "year" : 2002,
                        "by" : "The Economist"
                },
                {
                        "award" : "Officer of the Order of Canada",
                        "year" : 2007,
                        "by" : "Canada"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//5.- Buscar las personas de la colección bios que destaquen en el terreno de OOP (2)
db.bios.find({"contribs":"OOP"}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 
{
        "_id" : 4,
        "name" : {
                "first" : "Kristen",
                "last" : "Nygaard"
        },
        "birthYear" : 1906,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 5,
        "name" : {
                "first" : "Ole-Johan",
                "last" : "Dahl"
        },
        "birthYear" : 1926,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}

//6.- Buscar las personas de la colección bios que destaquen en el terreno de Java, Ruby o Python (3)
db.bios.find({"contribs":{$in:["Java", "Ruby","Python"]} }).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 

{
        "_id" : 6,
        "name" : {
                "first" : "Guido",
                "last" : "van Rossum"
        },
        "birthYear" : 1931,
        "contribs" : [
                "Python"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : 2001,
                        "by" : "Free Software Foundation"
                },
                {
                        "award" : "NLUUG Award",
                        "year" : 2003,
                        "by" : "NLUUG"
                }
        ]
}
{
        "_id" : 8,
        "name" : {
                "first" : "Yukihiro",
                "aka" : "Matz",
                "last" : "Matsumoto"
        },
        "birthYear" : 1941,
        "contribs" : [
                "Ruby"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : "2011",
                        "by" : "Free Software Foundation"
                }
        ]
}
{
        "_id" : 9,
        "name" : {
                "first" : "James",
                "last" : "Gosling"
        },
        "birthYear" : 1965,
        "contribs" : [
                "Java"
        ],
        "awards" : [
                {
                        "award" : "The Economist Innovation Award",
                        "year" : 2002,
                        "by" : "The Economist"
                },
                {
                        "award" : "Officer of the Order of Canada",
                        "year" : 2007,
                        "by" : "Canada"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//7.- Buscar las personas de la colección bios que destaquen en el terreno de OOP y Simula (2)
db.bios.find({"contribs":["OOP","Simula"] }).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 
> 

{
        "_id" : 4,
        "name" : {
                "first" : "Kristen",
                "last" : "Nygaard"
        },
        "birthYear" : 1906,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 5,
        "name" : {
                "first" : "Ole-Johan",
                "last" : "Dahl"
        },
        "birthYear" : 1926,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}


############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//8.- Buscar las personas de la colección bios sin premios logrados (1)
db.bios.find({"awards":null}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 
{
        "_id" : 10,
        "name" : {
                "first" : "Martin",
                "last" : "Odersky"
        },
        "contribs" : [
                "Scala"
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//9.- Buscar las personas de la colección bios con 1 premio conseguido (1)
db.bios.find({"awards":{$size:1}})
-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 

{
        "_id" : 8,
        "name" : {
                "first" : "Yukihiro",
                "aka" : "Matz",
                "last" : "Matsumoto"
        },
        "birthYear" : 1941,
        "contribs" : [
                "Ruby"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : "2011",
                        "by" : "Free Software Foundation"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//10.- Buscar las personas de la colección bios con 3 o más premios conseguidos (6)

more_than_2 = function(){
	return typeof(this.awards) == "object" && this.awards != null && this.awards.length > 2;
}
db.bios.find(more_than_2);

-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 

{
        "_id" : 1,
        "name" : {
                "first" : "John",
                "last" : "Backus"
        },
        "birthYear" : 1924,
        "deathYear" : 2007,
        "contribs" : [
                "Fortran",
                "ALGOL",
                "Backus-Naur Form",
                "FP"
        ],
        "awards" : [
                {
                        "award" : "W.W. McDowell Award",
                        "year" : 1967,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1975,
                        "by" : "National Science Foundation"
                },
                {
                        "award" : "Turing Award",
                        "year" : 1977,
                        "by" : "ACM"
                },
                {
                        "award" : "Draper Prize",
                        "year" : 1993,
                        "by" : "National Academy of Engineering"
                }
        ]
}
{
        "_id" : 2,
        "name" : {
                "first" : "John",
                "last" : "McCarthy"
        },
        "birthYear" : 1927,
        "deathYear" : 2011,
        "contribs" : [
                "Lisp",
                "Artificial Intelligence",
                "ALGOL"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1971,
                        "by" : "ACM"
                },
                {
                        "award" : "Kyoto Prize",
                        "year" : 1988,
                        "by" : "Inamori Foundation"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1990,
                        "by" : "National Science Foundation"
                }
        ]
}
{
        "_id" : 3,
        "name" : {
                "first" : "Grace",
                "last" : "Hopper"
        },
        "title" : "Rear Admiral",
        "birthYear" : 1915,
        "deathYear" : 1992,
        "contribs" : [
                "UNIVAC",
                "compiler",
                "FLOW-MATIC",
                "COBOL"
        ],
        "awards" : [
                {
                        "award" : "Computer Sciences Man of the Year",
                        "year" : 1969,
                        "by" : "Data Processing Management Association"
                },
                {
                        "award" : "Distinguished Fellow",
                        "year" : 1973,
                        "by" : " British Computer Society"
                },
                {
                        "award" : "W. W. McDowell Award",
                        "year" : 1976,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1991,
                        "by" : "United States"
                }
        ]
}
{
        "_id" : 4,
        "name" : {
                "first" : "Kristen",
                "last" : "Nygaard"
        },
        "birthYear" : 1906,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 5,
        "name" : {
                "first" : "Ole-Johan",
                "last" : "Dahl"
        },
        "birthYear" : 1926,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 7,
        "name" : {
                "first" : "Dennis",
                "last" : "Ritchie"
        },
        "birthYear" : 1956,
        "deathYear" : 2011,
        "contribs" : [
                "UNIX",
                "C"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1983,
                        "by" : "ACM"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1998,
                        "by" : "United States"
                },
                {
                        "award" : "Japan Prize",
                        "year" : 2011,
                        "by" : "The Japan Prize Foundation"
                }
        ]
}

############################################################################################################################################################
############################################################################################################################################################
############################################################################################################################################################

//11.- Buscar las personas de la colección bios con entre 2 y 4 premios conseguidos (8)

or_2_or_4 = function(){
	return typeof(this.awards) == "object" && this.awards != null && this.awards.length >= 2 && this.awards.length <= 4;
}
db.bios.find(or_2_or_4);

-------------------------------------------------------------------------------------------------------------------------------------------------------------

> 

{
        "_id" : 1,
        "name" : {
                "first" : "John",
                "last" : "Backus"
        },
        "birthYear" : 1924,
        "deathYear" : 2007,
        "contribs" : [
                "Fortran",
                "ALGOL",
                "Backus-Naur Form",
                "FP"
        ],
        "awards" : [
                {
                        "award" : "W.W. McDowell Award",
                        "year" : 1967,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1975,
                        "by" : "National Science Foundation"
                },
                {
                        "award" : "Turing Award",
                        "year" : 1977,
                        "by" : "ACM"
                },
                {
                        "award" : "Draper Prize",
                        "year" : 1993,
                        "by" : "National Academy of Engineering"
                }
        ]
}
{
        "_id" : 2,
        "name" : {
                "first" : "John",
                "last" : "McCarthy"
        },
        "birthYear" : 1927,
        "deathYear" : 2011,
        "contribs" : [
                "Lisp",
                "Artificial Intelligence",
                "ALGOL"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1971,
                        "by" : "ACM"
                },
                {
                        "award" : "Kyoto Prize",
                        "year" : 1988,
                        "by" : "Inamori Foundation"
                },
                {
                        "award" : "National Medal of Science",
                        "year" : 1990,
                        "by" : "National Science Foundation"
                }
        ]
}
{
        "_id" : 3,
        "name" : {
                "first" : "Grace",
                "last" : "Hopper"
        },
        "title" : "Rear Admiral",
        "birthYear" : 1915,
        "deathYear" : 1992,
        "contribs" : [
                "UNIVAC",
                "compiler",
                "FLOW-MATIC",
                "COBOL"
        ],
        "awards" : [
                {
                        "award" : "Computer Sciences Man of the Year",
                        "year" : 1969,
                        "by" : "Data Processing Management Association"
                },
                {
                        "award" : "Distinguished Fellow",
                        "year" : 1973,
                        "by" : " British Computer Society"
                },
                {
                        "award" : "W. W. McDowell Award",
                        "year" : 1976,
                        "by" : "IEEE Computer Society"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1991,
                        "by" : "United States"
                }
        ]
}
{
        "_id" : 4,
        "name" : {
                "first" : "Kristen",
                "last" : "Nygaard"
        },
        "birthYear" : 1906,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 5,
        "name" : {
                "first" : "Ole-Johan",
                "last" : "Dahl"
        },
        "birthYear" : 1926,
        "deathYear" : 2002,
        "contribs" : [
                "OOP",
                "Simula"
        ],
        "awards" : [
                {
                        "award" : "Rosing Prize",
                        "year" : 1999,
                        "by" : "Norwegian Data Association"
                },
                {
                        "award" : "Turing Award",
                        "year" : 2001,
                        "by" : "ACM"
                },
                {
                        "award" : "IEEE John von Neumann Medal",
                        "year" : 2001,
                        "by" : "IEEE"
                }
        ]
}
{
        "_id" : 6,
        "name" : {
                "first" : "Guido",
                "last" : "van Rossum"
        },
        "birthYear" : 1931,
        "contribs" : [
                "Python"
        ],
        "awards" : [
                {
                        "award" : "Award for the Advancement of Free Software",
                        "year" : 2001,
                        "by" : "Free Software Foundation"
                },
                {
                        "award" : "NLUUG Award",
                        "year" : 2003,
                        "by" : "NLUUG"
                }
        ]
}
{
        "_id" : 7,
        "name" : {
                "first" : "Dennis",
                "last" : "Ritchie"
        },
        "birthYear" : 1956,
        "deathYear" : 2011,
        "contribs" : [
                "UNIX",
                "C"
        ],
        "awards" : [
                {
                        "award" : "Turing Award",
                        "year" : 1983,
                        "by" : "ACM"
                },
                {
                        "award" : "National Medal of Technology",
                        "year" : 1998,
                        "by" : "United States"
                },
                {
                        "award" : "Japan Prize",
                        "year" : 2011,
                        "by" : "The Japan Prize Foundation"
                }
        ]
}
{
        "_id" : 9,
        "name" : {
                "first" : "James",
                "last" : "Gosling"
        },
        "birthYear" : 1965,
        "contribs" : [
                "Java"
        ],
        "awards" : [
                {
                        "award" : "The Economist Innovation Award",
                        "year" : 2002,
                        "by" : "The Economist"
                },
                {
                        "award" : "Officer of the Order of Canada",
                        "year" : 2007,
                        "by" : "Canada"
                }
        ]
}


############################################################################################################################################################
############################################################################################################################################################
#####################  					D A T A B A S E: edx   | C O L L E C T I O N: books                            #####################
############################################################################################################################################################
############################################################################################################################################################

//1.- Buscar todos los libros con precio superior a 100 USD (7)
db.books.find({"price.msrp":{$gt:100}},{price:1,author:1} ).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : ObjectId("4d59b5b6cad49870530000f4"),
        "author" : [
                "Johannes Itten"
        ],
        "isbn" : "9780471289289",
        "price" : {
                "currency" : "USD",
                "discount" : 76.78,
                "msrp" : 120
        },
        "publicationYear" : 1997,
        "publisher" : "Wiley",
        "tags" : [
                "use of color",
                "color theory",
                "color",
                "johannes itten",
                "graphic design",
                "arts",
                "design",
                "art",
                "bd",
                "colour"
        ],
        "title" : "The Art of Color: The Subjective Experience and Objective Rationale of Color - Revised Edition"
}
...

//2.- Buscar todos los libros publicados por "Martin Fowler" (4)
db.books.find({"author":"Martin Fowler"}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : ObjectId("4d59b40acad4987053000013"),
        "author" : [
                "Kent Beck",
                "Martin Fowler"
        ],
        "isbn" : "0201710919",
        "price" : {
                "currency" : "USD",
                "discount" : 26.58,
                "msrp" : 38.99
        },
        "publicationYear" : 2001,
        "publisher" : "Addison-Wesley",
        "tags" : [
                "xp",
                "agile",
                "software engineering",
                "programming",
                "2007",
                "book - computer - software engineering",
                "kent beck",
                "mybooks",
                "software development",
                "thesis",
                "todo"
        ],
        "title" : "Planning Extreme Programming"
}
....


//3.- Buscar los libros que tengan el tag 'programming', 'agile' y "java" (5)
db.books.find({"tags":{$all:["programming","agile","java"]}}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 
{
        "_id" : ObjectId("4d59b410cad4987053000017"),
        "author" : [
                "Kent Beck"
        ],
        "isbn" : "0321413091",
        "price" : {
                "currency" : "USD",
                "discount" : 33.73,
                "msrp" : 39.99
        },
        "publicationYear" : 2007,
        "publisher" : "Addison-Wesley",
        "tags" : [
                "patterns",
                "programming",
                "java",
                "agile",
                "coding",
                "design patterns",
                "kent beck signature book",
                "object-oriented design",
                "development",
                "readable code",
                "rns",
                "signature series",
                "software development"
        ],
        "title" : "Implementation Patterns"
}


//4.- Buscar aquellos libros que han sido escritos por Martin Fowler y Kent Beck (2)
 db.books.find({"author":{$all:["Martin Fowler","Kent Beck"]}}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : ObjectId("4d59b40acad4987053000013"),
        "author" : [
                "Kent Beck",
                "Martin Fowler"
        ],
        "isbn" : "0201710919",
        "price" : {
                "currency" : "USD",
                "discount" : 26.58,
                "msrp" : 38.99
        },
        "publicationYear" : 2001,
        "publisher" : "Addison-Wesley",
        "tags" : [
                "xp",
                "agile",
                "software engineering",
                "programming",
                "2007",
                "book - computer - software engineering",
                "kent beck",
                "mybooks",
                "software development",
                "thesis",
                "todo"
        ],
        "title" : "Planning Extreme Programming"
}
...

//5.- Buscar los libros escritos por 3 autores (17)
db.books.find({"author":{$size:3}}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

{
        "_id" : ObjectId("4d59b751cad49870530001c1"),
        "author" : [
                "James Snell",
                "Doug Tidwell",
                "Paul Kulchenko"
        ],
        "isbn" : "0596000952",
        "price" : {
                "currency" : "USD",
                "discount" : 22.83,
                "msrp" : 34.95
        },
        "publicationYear" : 2002,
        "publisher" : "O'Reilly & Associates, Inc",
        "tags" : [
                "web programming",
                "xml",
                "linux",
                "networking",
                "web services"
        ],
        "title" : "Programming Web Services with SOAP"
}
....


//6.- Buscar los libros escritos por mas de un autor (106)
more_than_1 = function(){
	return typeof(this.author) == "object" && this.author != null && this.author.length > 1;
}
db.books.find(more_than_1).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 



############################################################################################################################################################
############################################################################################################################################################
#####################  					D A T A B A S E: geo | C O L L E C T I O N: countries                          #####################
############################################################################################################################################################
############################################################################################################################################################

mongoimport --host 127.0.0.1 --port 27017 --db geo --collection cities --type json --file cities.json --drop --stopOnError
mongoimport --host 127.0.0.1 --port 27017 --db geo --collection countries --type json --file countries.json --drop --stopOnError

//1.- Buscar aquellos paises donde el español es lenguaje nativa (24)
db.countries.find({"languages.spa":"Spanish"}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

//2.- Buscar aquellos paises donde el español es lenguaje oficial (21)
db.countries.find({"nativeLanguage":"spa"}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 

//3.- Mostrar aquellos paises donde sólo el español es lengua oficial (y no hay más)
db.countries.find({"languages":{"spa":"Spanish"}}).count()
-------------------------------------------------------------------------------------------------------------------------------------------------------------
> 
