FROM composer:2.0

FROM php:8.0

LABEL maintainer="bichht.dev@gmail.com"

ARG DEBIAN_FRONTEND=noninteractive

# Cài đăt composer
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
  software-properties-common locales

# Cài đặt các tool cần thiết
RUN apt-get update && apt-get install -y \
  git \
  curl \
  vim \
  nano \
  net-tools \
  pkg-config \
  iputils-ping \
  apt-utils \
  zip \
  unzip

# Cài đặt các thư viện cần thiết
RUN docker-php-ext-install \
  bcmath \
  pdo_mysql

# Cài đặt nodejs
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash

RUN apt-get install -y nodejs
