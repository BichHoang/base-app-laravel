# Sử dụng image php:8.0-fpm-alpine
FROM php:8.0-fpm-alpine

LABEL maintainer="bichht.dev@gmail.com"

ARG DEBIAN_FRONTEND=noninteractive

# Cài đặt những thư viện cần thiết
RUN docker-php-ext-install \
 bcmath \
 pdo_mysql
