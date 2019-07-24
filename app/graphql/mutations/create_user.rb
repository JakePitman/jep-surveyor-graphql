module Mutations
  class CreateUser < Mutations::BaseMutation
    argument :name, String, required: true
    argument :email, String, required: false
    argument :password, String, required: true
    argument :account_id, ID, required: true

    type Types::UserType

    def resolve(name: nil, email: nil, password: nil, account_id: nil)
      User.create!(
        name: name,
        email: email,
        password: password,
        account_id: account_id
      )
    end
  end
end