# Express-mongoose-jest boilerplate

## **(WIP)** A server boilerplate using express, mongoose and jest

⏳ Will include complete functionality for **User Authentication** (local auth with email & password / JWT) and CRUD operations for
**Posts** (with various fields/types) which can easily modified for any other data type.
_____
**// TODO:**
1. ✔️ Connect to the database (atlasDB)
2. [] Write test specs for Users
3. [] Write test specs for Posts
4. [] Implement User Authentication and Authorization
5. [] Implement Post CRUD
6. [] Setup Rules for data (e.g. length of password, valid email format etc. for users)

## Setup

1. **Connect to the Database (mongodb Atlas):**

Create a **.env** file at the root of the app and add
```process.env.DATABASE_URL = "your database path"```

Inside the database path replace ```".mongodb.net/test"``` with ```".mongodb.net/name_of_your_database"```

Make sure your ip is whitelisted inside Atlas or use ```0.0.0.0/0``` to whitelist all connections

***Make sure to change this setting when in production**
