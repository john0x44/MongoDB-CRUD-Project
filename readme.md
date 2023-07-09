# CRUD Project

Demonstrating how to utilize Node.js to open a new server on the localhost and connect MongoDB to the server. Handling different request types with the database. This application implements CRUD (Create, Read, Update, Delete) operations to create and manage persistent data. In this example, we are working with 'Profiles' as the data model. I have included my project files in the 'MongoDB-CRUD-Project' folder dependencies required are : node, express, mongoose, nodemon

To start the server run: npm run dev

## Demonstrations

### Creating a new database on MongoDB
![Create Database](https://i.gyazo.com/da347a75d48cd32fc1e200b2ee7eeac6.png)

### Establishing a connection to MongoDB using Mongoose
![Connect to MongoDB](https://i.gyazo.com/6e964918581d6cd9c607d40d28b5b35c.png)

### Designing the database diagram and creating a schema in 'profileModel.js'
![Database Diagram](https://i.gyazo.com/807c7d5e66add51611c6d795a129bc6f.png)
![Schema Creation](https://i.gyazo.com/d199c0cc1bcc55be3eb9ab0418d43033.png)

### Testing different request types and updating the database

#### Adding a profile using a POST request
![Add Profile](https://i.gyazo.com/ec6800fbe3caf9b5c1036efb73d77718.png)

#### Checking the database for the added profile
![Check Profile](https://i.gyazo.com/ec5fbb71ce05a6bd979ef42393f26e80.png)

#### Fetching a profile from the database using a GET request
![Fetch Profile](https://i.gyazo.com/48791906a8c0a1d7ce9cc2b95feb5eb9.png)

#### Adding a new profile and viewing all profiles in the database using a POST request
![Add and View Profiles](https://i.gyazo.com/a1c069f1bb842289bd48633ecc3ca4ad.png)
![View All Profiles](https://i.gyazo.com/e8720eed4116bff3b9d93b0c7cce5252.png)

#### Viewing the newly added profile in the database from the server
![View New Profile](https://i.gyazo.com/f3797d8520ba24a6d25a22f257d5fa11.png)

#### Updating a profile in the database using a PUT request
![Update Profile](https://i.gyazo.com/3907ece24a720187cf719988354273e2.png)
Now the updated profile can be seen in MongoDB
![Updated Profile](https://i.gyazo.com/8eb41677236c68a39e30414f8cf21fe9.png)

#### Deleting a profile using a DELETE request
![Delete Profile](https://i.gyazo.com/f6908513ec3086b95815769e48723f7e.png)
Now the deleted profile can be seen in MongoDB
![Deleted Profile](https://i.gyazo.com/46e25ea6e0e92a70e5f586d53fdc104c.png)

