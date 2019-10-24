FROM ruby:2.6

RUN apt-get update

RUN gem install bundler

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES 1

# Find another way to do this :S
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs build-essential
RUN npm install yarn -g

EXPOSE 3000

ENTRYPOINT /bin/bash

