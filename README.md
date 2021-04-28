# basic-nodejs-auth-api
This is a basic authentication API using [express](https://github.com/expressjs/express) and [nedb-promises](https://github.com/bajankristof/nedb-promises).

## Table of Contents
  - [Usage](#usage)
  - [Authentication](#authentication)
  - [Default Account](#default-account)
  - [Routes](#routes)
    - [Signup](#signup)
    - [Signin](#signin)
    - [Get your user](#get-your-user)

## Usage
```bash
$ git clone https://github.com/CodingWithNuke/basic-nodejs-auth-api.git <name>
$ cd <name>
$ npm install
$ npm run dev
```

## Authentication
To authenticate, make a request to the signin route, this will return a token. This token is a Bearer token, your authentication header should be like this `Bearer [token here]`.

## Default Account
This API comes with a default user account. The login credentials for this account are:  
**Username**: `admin`  
**Password**: `admin`  

> If you wish to disable the default account, head over to [`src/database/index.js`](src/database/index.js) and remove the onload function.

## Routes

### Signup
**URL**: `/auth/signup`  
**Method**: `POST`  
**Auth required**: No  
**Data example**  
```json
{
  "username": "admin",
  "password": "admin"
}
```
---
### Signin
**URL**: `/auth/signin`  
**Method**: `POST`  
**Auth required**: No  
**Data example**  
```json
{
  "username": "admin",
  "password": "admin"
}
```
---
### Get your user
**URL**: `/users/me`  
**Method**: `GET`  
**Auth required**: Yes  