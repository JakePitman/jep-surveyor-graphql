ca = Account.create!({ name: "CultureAmp"})
coles = Account.create!({ name: "Coles"})

ca_user = User.create!({ name: "C.A.User", email: "user@cultureamp.com", password: "123456", account: ca})
ca_user2 = User.create!({ name: "C.A.User2", email: "user2@cultureamp.com", password: "123456", account: ca})
coles_user = User.create!({ name: "Coles.User", email: "user@coles.com", password: "123456", account: coles})
coles_user2 = User.create!({ name: "Coles2.User", email: "user2@coles.com", password: "123456", account: coles})

ca_survey_1 = Survey.create!({ name: "CA Survey 1", account: ca})
ca_survey_2 = Survey.create!({ name: "CA Survey 2", account: ca})
coles_survey_1 = Survey.create!({ name: "Coles Survey 1", account: coles})
coles_survey_2 = Survey.create!({ name: "Coles Survey 2", account: coles})

RatingQuestion.create!([
  { title: "CA_Survey_1_Question_1", survey: ca_survey_1},
  { title: "CA_Survey_1_Question_2", survey: ca_survey_1},
  { title: "CA_Survey_1_Question_3", survey: ca_survey_1},
  { title: "CA_Survey_1_Question_4", survey: ca_survey_1},
  { title: "CA_Survey_1_Question_5", survey: ca_survey_1},
  { title: "CA_Survey_2_Question_1", survey: ca_survey_2},
  { title: "CA_Survey_2_Question_2", survey: ca_survey_2},
  { title: "CA_Survey_2_Question_3", survey: ca_survey_2},
  { title: "CA_Survey_2_Question_4", survey: ca_survey_2},
  { title: "CA_Survey_2_Question_5", survey: ca_survey_2},
  { title: "Coles_Survey_1_Question_1", survey: coles_survey_1},
  { title: "Coles_Survey_1_Question_2", survey: coles_survey_1},
  { title: "Coles_Survey_1_Question_3", survey: coles_survey_1},
  { title: "Coles_Survey_1_Question_4", survey: coles_survey_1},
  { title: "Coles_Survey_1_Question_5", survey: coles_survey_1},
  { title: "Coles_Survey_2_Question_1", survey: coles_survey_2},
  { title: "Coles_Survey_2_Question_2", survey: coles_survey_2},
  { title: "Coles_Survey_2_Question_3", survey: coles_survey_2},
  { title: "Coles_Survey_2_Question_4", survey: coles_survey_2},
  { title: "Coles_Survey_2_Question_5", survey: coles_survey_2}
])

