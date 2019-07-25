module Types
  class UpdateRatingQuestionResponseResult < BaseUnion
    possible_types RatingQuestionResponseType, DocumentNotFoundError
    
    def self.resolve_type(object, _context)
      if object.is_a?(Mongoid::Errors::DocumentNotFound)
        DocumentNotFoundError
      else
        RatingQuestionResponseType
      end
    end
  end
end