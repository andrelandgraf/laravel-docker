## Info
This is a walking skeleton web app for both development and production,
using:
- laravel (master / 5.6 / php >= 7.1.3)
- mariaDB
- docker / docker-compose
- ngix

! following guide does not work the same way for windows OS !

## Prerequisites
Also have a look at:
- https://github.com/laravel/laravel
- https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c

**Install docker and docker-compose**

```
apt-get install docker.io
```

```
apt-get install docker-compose
```

**Install dependencies**

```
docker run --rm -v $(pwd):/app composer/composer install --ignore-platform-reqs

```
--ignore-platform-reqs to mute errors from composer image php version, see: https://hub.docker.com/r/library/composer/

**Start the web app for dev**
 
 ```
docker-compose up

```

**Application key - Setting up laravel after docker-compose up**
 ```
docker-compose exec app php artisan key:generate

```
This has to be done only once. 

No need for "docker-compose exec app php artisan optimize" anymore, see: 
https://laravel-news.com/laravel-5-6-removes-artisan-optimize

