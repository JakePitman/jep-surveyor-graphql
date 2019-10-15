FROM ruby:2.6

RUN apt-get update

RUN gem install bundler

WORKDIR /app

COPY Gemfile Gemfile.lock package.json package-lock.json /app/

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES 1
RUN bundle install

RUN apt-get install -y nodejs
RUN node --version
RUN npm install yarn
RUN yarn --version
RUN yarn install --check-files

COPY . /app

ENTRYPOINT /bin/bash