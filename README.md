## Using docker
### build & run containers
docker-compose up --build
### enter app terminal to execute commands
docker ps
docker exec -it <APP_CONTAINER_NAME> /bin/bash
### seed db (in app terminal)
rails db:seed

## Without docker
### Install packages
yarn
### Setup database
rails db:seed
### Start rails with secret (for jwt encoding/decoding)
SECRET="something" foreman start web
### Get css types
foreman start css-types

## Signing in & viewing surveys
- head to localhost:3000/account/show
- login with username either: user@cultureamp.com or user@coles.com
- password is the same for both users: 123456

## Survey Report
- tallies of all responses to a particular survey can be viewed at /survey_report/:survey_id
- (a :report_id can be retrieved from the database of the elixir ms
  - psql capture_dev
  - select * from responses

## Question Report
- not ready yet! one needs to be created for question_report/:question_id

## using graphql playground
- http://localhost:3000/graphql

### get JWT token
 mutation{
   signinUser(
     email:{
       email:"user@cultureamp.com",
       password:"123456"
     }
   ){
     token
     user {
       id
     }
   }
 }

### store the JWT in 'headers'
{
  "Authorization": "Bearer: abc123"
}
