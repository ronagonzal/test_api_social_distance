# Social Distance - Simple Node.js RESTful API (for a technical test)
Simple RESTful API to get users and calculate distance between them.

## Requirement
A Social Network platform allows the following operations to its users: post, follows, re-post.
The platform provides application developers with the following API:

```bash
GET / <username> / followers
```
```json
{"User": "username", "Followers": ["user1", "user2", ... .. "user n"]}
```

```bash
GET / <username> / following
```
```json
{"User": "username", "Following": ["user1", "user2", ... .. "user n"]}
```

Implement an algorithm in any programming language, which calculates the distance between 2 users.

### Example:

```json
{"User": "userA", "Following": ["userB", "userD", "userE", "userG"]}
{"User": "userB", "Following": ["userC", "userJ", "userI", "userE"]}
{"User": "userC", "Following": ["userM", "userN", "userJ", "userI", "userE"]}
```

It is required to calculate the distance between "userA" and "userM".

When searching it is found that: User A follows User B. And User B follows User C. And User C follows User M.

So the distance between User A and User M is: 3.

## Installation
#### Install [NodeJS](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/)

#### Start installing the dependencies
```bash
npm install --save express
```
```bash
npm install --save-dev nodemon
```

#### Run the starter app. Making the server to start listening HTTP requests
```bash
npm run dev
```
To test the API, I highly recommend a great app called [Postman](https://www.postman.com/). 
It allows you to make simple HTTP requests.

## Testing
#### Users JSON structure
![User JSON Structure](/app/images/users_json.jpg)

#### API requests available
![API requests](/app/images/requests.jpg)

#### API call to calculate distance between UserA and UserM
![User distance calculation](/app/images/get_distance.jpg)