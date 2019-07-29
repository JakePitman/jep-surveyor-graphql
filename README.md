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
