Folgendem Tutorial wurde gefolgt:
https://github.com/laravel/laravel
https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c

Install dependencies first:

apt-get install curl

apt-get install docker.io

apt-get install docker-compose

// --ignore-platform-reqs to mute errors from composer image php version 
// https://hub.docker.com/r/library/composer/
docker run --rm -v $(pwd):/app composer/composer install --ignore-platform-reqs

Setting up laravel after docker-compose up
https://laravel-news.com/laravel-5-6-removes-artisan-optimize
docker-compose exec app php artisan optimize DO NOT DO THIS: NOT NEEDED ANYMORE