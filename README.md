This is a node base js project template, which anyone can use as it has been prepared , by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

"src" -> Inside the src folder all the actual  source code are regarding the project woll reside, this will not include any kind of tests. (You might want to make  separete tests folders.)

Lets take a look inside the `src` folder

-`config` ->In this folder anything and everything regarding any configuration or setup of a library or module will be done. For example: setting up`dotenv` so that we can use the environment variables anywhere in a cleaner fashion.Thos is done in the `server-config.js`. One more example can be to setup your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

-`routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

-`middlewares` -> They are just going to intercept the incoming requests where we can write our validators,authencators etc.

-`controllers` -> They are kind of the the last middlewares as post them you call the business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, snd once business layer returns an output, we structure the API response in controllers and send the output.

-`repositories` -> This folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

-`service` -> contains the business logic and interacts with repositories for data from the database.

-`utils` ->contains helper methods, classes etc.


### Setup the project

- Download this templete from github and open it in text editor.
- In tge root directory create a `.env` file andadd the following env variables
```
PORT=<port number of your choice>
```
ex:
```
PORT=3000
```
-Inside the `src/config` folder create a file named as `confi.json` and write the following code:
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- I you are setting your development environment, then write the username of your BD, password of your DB and in dialect mention whatever db you are using . For eg: mysql,mariadb etc.
- If you're setting up test or production environment , make sure you also replsce the host  with the hosted DB url.