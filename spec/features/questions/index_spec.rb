require 'rails_helper'

RSpec.feature 'Viewing questions' do
  context "when a question exists" do
    let!(:question) { 
      account = Account.create!(name: "test account")
      survey = Survey.create!(name: "test survey", account: account)
      RatingQuestion.create!(title: "Hello World", survey: survey) 
    }

    # scenario "the question appears on the page" do
    #   visit "/"
    #   within("[data-automation-id=questions-list]") do
    #     expect(page).to have_content("Hello World")
    #   end
    # end
  end
end
