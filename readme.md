## Installing packages
Run ```npm install``` to install all packages
## Starting the application

## DATABASE URL
Before the application can connect to the Database, it needs to locate the Database URL.

Create ".env" file in the root of the project and paste this Database url below:

### TEMPORARY TEST DATABASE
```javascript
// copy and paste this in .env
DATABASE_URL=mongodb+srv://dev:dev@cluster0.qbc48.mongodb.net/test?retryWrites=true&w=majority
```

You can start the application by running 

```node index.js```

or ```npm run start```

## PORT
By default, the application will start on PORT 8080.
This is the port that the frontend will connect to.