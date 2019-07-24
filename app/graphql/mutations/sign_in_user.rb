require 'jwt'
module Mutations
  class SignInUser < BaseMutation
    null true

    argument :email, Types::AuthProviderSignupData, required: false

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(email: nil)
      return unless email
      user = User.find_by email: email[:email]
      return unless user
      return unless user.authenticate(email[:password])

      payload = {
        email: user.email,
        id: user.id.to_s
      }
      token = JWT.encode payload, ENV["SECRET"], 'HS256'

      { user: user, token: token }
    end
  end
end