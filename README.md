### Install packages
yarn
### Setup database
rails db:reset
### Start rails with secret (for jwt encoding/decoding)
SECRET="something" foreman start web
### Get css types
foreman start css-types


## using graphql playground
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
