FROM ruby:2.6

RUN apt-get update

RUN gem install bundler

WORKDIR /app

COPY Gemfile Gemfile.lock /app/

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES 1
RUN bundle install

RUN apt-get install -y nodejs

COPY . /app

ENTRYPOINT /bin/bash