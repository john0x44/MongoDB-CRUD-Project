Utilzing node to open a new server on the localhost and connecting MongoDB to the server. Handling request types with the database. 
This application utilizes the CRUD implementation to create and manage persisten data as an example used here is 'Profiles'. 

creating a new database on MongoDB
https://i.gyazo.com/da347a75d48cd32fc1e200b2ee7eeac6.png

establish a connection to MongoDB using mongoose 
https://i.gyazo.com/6e964918581d6cd9c607d40d28b5b35c.png

design the database diagaram and create a schema in 'profileModel.js'
https://i.gyazo.com/807c7d5e66add51611c6d795a129bc6f.png
https://i.gyazo.com/d199c0cc1bcc55be3eb9ab0418d43033.png

Testing type of requests and updating database
Adding a profile using a post request
https://i.gyazo.com/ec6800fbe3caf9b5c1036efb73d77718.png
Checking database for this update 
https://i.gyazo.com/ec5fbb71ce05a6bd979ef42393f26e80.png

Fetching a profile from database, by using GET request
https://i.gyazo.com/48791906a8c0a1d7ce9cc2b95feb5eb9.png

Adding a new profile and viewing ALL profiles in database by using POST request
https://i.gyazo.com/a1c069f1bb842289bd48633ecc3ca4ad.png
https://i.gyazo.com/e8720eed4116bff3b9d93b0c7cce5252.png

Viewing this new profile on the database from the server
https://i.gyazo.com/f3797d8520ba24a6d25a22f257d5fa11.png

Updating a profile from the database using PUT request
https://i.gyazo.com/3907ece24a720187cf719988354273e2.png
Now the updated profile can be seen in MongoDB
https://i.gyazo.com/8eb41677236c68a39e30414f8cf21fe9.png

Deleting a profile using DELETE request 
https://i.gyazo.com/f6908513ec3086b95815769e48723f7e.png
Now the deleted profile can be seen in MongoDB
https://i.gyazo.com/46e25ea6e0e92a70e5f586d53fdc104c.png

