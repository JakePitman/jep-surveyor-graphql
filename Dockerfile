FROM ruby:2.6.4

COPY Gemfile Gemfile.lock package.json package-lock.json /app/

WORKDIR /app

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES 1

RUN ["gem", "install", "bundler"]

RUN ["bundle", "install"]

RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash

RUN apt-get install nodejs

RUN ["npm", "install", "-g", "yarn" ]

RUN ["yarn", "install"]

RUN apt-get install

COPY . /app

# ENTRYPOINT ["bundle", "exec", "rails", "s"] 3000 0.0.0.0
ENTRYPOINT ["bundle", "exec", "rspec"]