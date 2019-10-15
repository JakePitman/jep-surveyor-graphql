FROM ruby:2.6

RUN apt-get update

RUN gem install bundler

WORKDIR /app

COPY Gemfile Gemfile.lock package.json package-lock.json /app/

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES 1
RUN bundle install

COPY . /app
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs build-essential
RUN npm install yarn -g
# RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install

EXPOSE 3000


ENTRYPOINT /bin/bash
