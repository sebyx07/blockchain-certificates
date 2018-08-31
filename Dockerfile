FROM ruby:2.5.1

RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -

RUN apt-get update && \
  apt-get install -y \
  build-essential \
  libpq-dev \
  nodejs \
  python-dev \
  libmagickwand-dev \
  tesseract-ocr \
  bison \
  vim

RUN mkdir -p /app
WORKDIR /app

RUN npm i -g phantomjs-prebuilt yarn ember-cli@3.3.0

RUN gem install bundler
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 20 --retry 5