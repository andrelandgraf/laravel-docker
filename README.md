## Info
This is a walking skeleton web app for both development and production,
using:
- laravel (master / 5.6 / php >= 7.1.3)
- mariaDB
- docker / docker-compose
- ngix

## Feedback
Feel free to get inspired and more importantly provide [your feedback](https://github.com/andrelandgraf/laravel-docker/issues) on structure and style. I'm more than happy to learn how to improve my code and architecture.

## Prerequisites
Also have a look at:
- https://github.com/laravel/laravel
- https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c
- https://github.com/shipping-docker/php-app

! following guide does not work the same way for windows OS !

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

## Working with PhpStorm

**Install the Laravel Plugin**

- Install plugin under "Settings > Plugins > Laravel Plugin"
- Activate it per Project under "Settings > Languages & Frameworks > PHP > Laravel"

**Configure Docker Compose**

1. Click on Edit Configurations... (next to the Play/Run Button)
2. Click New (The New button), create a new Docker Configuration
3. Select the compose file: ./docker-compose.yml
4. Apply changes and select the configuration and run (Play/Run Button) for "docker-compose up"

**Add the Data Source**

1. Make sure docker-compose up is running
2. Go to View > Tool Windows > Database
3. Click New (The New button), point to Data Source, and then choose MySQL (MariaDB).
4. Set the host name to local, port to 33061, database and user names to homestead, and set password to secret
5. If necessary, download the driver and test the connection.
6. For more information see the [jetbrains documentation](https://www.jetbrains.com/help/idea/running-a-dbms-image.html).


## Start Dev Environment

```
docker-compose up

```

**Check containers**

```
docker ps
```

## Start Production Environment


## Edit dockerfile
```
# check the current WORKDIR with:
RUN pwd
```
