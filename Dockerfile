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

RUN git clone https://github.com/facebook/watchman.git &&\
    cd watchman &&\
    git checkout v4.7.0 &&\
    ./autogen.sh &&\
    ./configure &&\
    make &&\
    make install

RUN mkdir -p /app
WORKDIR /app

RUN npm i -g phantomjs-prebuilt yarn ember-cli@3.3.0