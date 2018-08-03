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

## Start the dev env the first time after build
 
```
docker-compose up
```

**Installing npm_modules**
 ```
docker-compose exec app npm install
```
Npm and node are already installed inside the container, `npm install` inside 
the docker-container so you do not have to install npm locally on your machine.

**Setting up Git - Commit - ESLint**

If you use PhpStorm:
- Go to "File > Settings > Editor > File TypesSettings" and remove .git; from the Ignore files and folders text field
- IF the node runtime is missing, do: 
```
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -\
    && apt-get install -y nodejs
```

Add File .git/hooks/commit-msg and paste following code inside:
```
#!/bin/bash
files=$(git diff --cached --name-only | grep '\.jsx\?$')

# Prevent ESLint help message if no files matched
if [[ $files = "" ]] ; then
  exit 0
fi

failed=0
for file in ${files}; do
  git show :$file | eslint $file
  if [[ $? != 0 ]] ; then
    failed=1
  fi
done;

if [[ $failed != 0 ]] ; then
  echo "🚫🚫🚫 ESLint failed, git commit denied!"
  exit $failed
fi
```

This prevents bad JS code to get commited. -> Fix ESLint errors and try to commit again.

You can run ESLint on the terminal like that: `./node_modules/.bin/eslint myFile.js`

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

**Enable ESLint**

ESLint is na open source project and provides a pluggable linting utility for JavaScript. It will throw errors and warnings
according to the defined rules in the .eslintrc file. 

You cannot commit files that still have ESLint errors. See [#13](https://github.com/andrelandgraf/laravel-docker/issues/13) for more information

Make sure ESLint is enabled: `File > Settings > Languages & Frameworks > JavaScript > Code Qualitity Tools > ESLint` to receive the warnings within the IDE.


## Start Dev Environment

```
docker-compose up
```
This command starts all three containers and runs `npm run dev` already. 

**Check containers**

```
docker ps
```

**Work within the container**

This will open a bash within the docker container so you can interact with php artisan and other dev tools.
```
docker-compase exec app bash -b
```
For example use [php artisan tinker](https://scotch.io/tutorials/tinker-with-the-data-in-your-laravel-apps-with-php-artisan-tinker) to work with your database like follows:
```
root@dockercontainer:/var/www# php artisan tinker
>>> App\Pizza::count()
=> 10
>>> App\Pizze::all()
=> ...
```


## Start Production Environment


## Edit dockerfile
```
# check the current WORKDIR with:
RUN pwd
```
