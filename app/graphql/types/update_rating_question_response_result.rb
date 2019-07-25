module Types
  class UpdateRatingQuestionResponseResult < BaseUnion
    possible_types RatingQuestionType, DocumentNotFoundError
    
    def self.resolve_type(object, _context)
      if object.is_a?(Mongoid::Errors::DocumentNotFound)
        DocumentNotFoundError
      else
        RatingQuestionType
      end
    end
  end
end