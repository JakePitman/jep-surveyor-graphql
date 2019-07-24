module Types
  class MissingArgumentError < Types::BaseObject
    field :errors, String, null: false

    def errors
      # "Missing an argument..."
      object.errors
    end
  end
end