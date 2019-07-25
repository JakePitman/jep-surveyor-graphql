### Install packages
yarn
### Setup database
rails db:reset
### Start rails with secret (for jwt encoding/decoding)
SECRET="something" foreman start web
### Get css types
foreman start css-types
