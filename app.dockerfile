FROM php:7.1.3-fpm

WORKDIR /var/www/

RUN apt-get update && apt-get install -y libmcrypt-dev git zip\
    mysql-client libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install mcrypt pdo_mysql

# install npm and nodejs
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -\
    && apt-get install -y nodejs

# update npm
# RUN npm i -g npm

# we should do this in dev mode only, composer should not be available in production
RUN curl --silent --show-error https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

# laravel needs write access to /bootstrap and /storage
# for the production container this has to be mapped to an outside volume
# see #9
# RUN chmod -R o+rw html/bootstrap html/storage


