# Feedbacky Backend
This repository includes feedbacky backend codebase. This project developed with node.js, express.js and mongodb.

## Routes
Base url on localhost: http://localhost:80/ <br/>
Note: You have to add 'Authorization' to request headers.  <br/>
Example authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbmVtZSIsImlhdCI6MTY1Mjk1MTAyNCwiZXhwIjoxNjUyOTU0NjI0fQ.pJrbFlt1ynMYw0XtycqyZJLDbJDITMDqBVndh_I7LKI <br/>

Route| Http Verb | Post Body | Description
:--- | :---: | :---: | :---:
/user/createUser | `POST` | name,mail,password | Create a new user
/user/login | `POST` | name,mail | Login operation
/user/getDetails | `GET` | Empty | Get user details

Route| Http Verb | Post Body | Description
:--- | :---: | :---: | :---:
/form/createForm | `POST` | name,fields,userId | Create a new form
/form/getForms/:userId | `GET` | Empty | Get forms by user id

Route| Http Verb | Post Body | Description
:--- | :---: | :---: | :---:
/form/getFormAnswers/:formId | `GET` | Empty | Get all answers by form id
/form/createAnswer | `POST` | response,userAgent,formId | Create a new answer

## Postman Collecton
You can download postman collection from this repository. We added all request there.

## Project Setup

```sh
npm install
```

### Tests run

```sh
npm tests
```

### Start the project on port 80

```sh
npm start
```