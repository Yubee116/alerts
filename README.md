# Alerts App

This app demos client-server communication using ReactJS for the front-end and Rails (API only) backend.
<br>
Clone the repo to begin.

# Running The App
## The Backend (Rails)
1. Change working directory to the rails app `cd alerts_api`
```
$ cd alerts_api
```  

2. Run `bundle install`

3. Prepare the db. <br> The following commands create the db and seeds user data
```
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

4. Start the rails server using `rails s`. (Starts the server on port 3000)

## The Frontend (React)
1. Change working directory to the rails app `cd alerts_frontend`
```
$ cd alerts_frontend
```  

2. Run `npm install`

3. Start the server using `npm run start` (Starts the server on port 3001)

# Let's Begin
Running the react server should automatically open up a browser. <br>
Login with: <br>
- email: user1@example.com <br>
- password: 123456 

You can create a new user by calling the rails API auth endpoint and providing the following credentials: <br>
first_name, last_name, username, password, password_confirmation, email

You can use `curl` or an API tool like [Postman](https://www.postman.com). <br>
Curl Sample: <br>

```
$ curl --location 'http://localhost:3000/auth/' \
--form 'first_name="User1"' \
--form 'last_name="Example"' \
--form 'username="User1"' \
--form 'password="123456"' \
--form 'password_confirmation="123456"' \
--form 'email="user1@example.com"'
```

