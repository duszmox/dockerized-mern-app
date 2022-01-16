# Dockerized MERN app

## Setup

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [Node JS](https://nodejs.org/en/download/) (tested 16+)
3. Install Choco in **PowerShell**:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

4. Install make with Choco run CMD/PoweShell **as administrator**:

```
choco install make
```

5. Clone the repo

```
git clone https://github.com/duszmox/dockerized-mern-app.git
cd dockerized-mern-app/
```

## Development enviroment

This is the way you edit the code, and it refreshes in real time.

**You have to run every command in the CMD you cannot use PowerShell, because it does not work with make**

When you run it for **the first time** on a new machine you have to build the development containers first, which can be done by the following command:

```
make build-dev
```

Then to run it just use:

```
make run-dev
```

And voilà! You have yourself a development environment!

Front-end is served on http://localhost:3000  
Back-end is served on http://localhost:5000

## Local Environment

If you want to build your project and deploy it locally you can do it.

First we have to specify an environment variable called `ENV` to be set to `local` which we can do by entering:

```
set ENV=local
```

This will set the environment variable for the lenght of the terminal session and will clear it once we close the terminal window.

Then we have to build our project with:

```
make build-local
```

And run it with:

```
make run-local
```

Your project is served on http://localhost:80

## Production

You have to git clone the app into the /mnt/data/www/ directory. Then set your Github secrets in your Github repo's settings.   
(https://github.com/your_username/repo_name/settings/secrets/actions)  
Secrets to be set:
```
# SSH 
SSH_HOST = your ssh host
SSH_USER = your ssh user
SSH_PRIVATE_KEY = your ssh private key
SSH_PORT = your ssh port

# MONGODB
MONGODB_INITDB_ROOT_USERNAME = your mongo username to be used in production
MONGODB_INITDB_ROOT_PASSWORD = your mongo password to be used in production
```

You can also use other ways to authenticate via ssh please read more about in the [SSH-action documentation](https://github.com/appleboy/ssh-action).

Please set out your url in the following places:  

1. **client/Makefile**: under build-prodution  
2. **client/Caddyfile.production** both your domain and the email you registered the domain with
3. Create a production.env file under server/config with the following content:
```
MONGO_URL="mongodb://MONGODB_INITDB_ROOT_USERNAME:MONGODB_INITDB_ROOT_PASSWORD@localhost:27017"
```
fill in with your own mongo username and password.

Then all you have to do is to run a github action or commit to this repo and voilà! Your project is served on your server

Clients can be served on https://your_domain.com  
Api can be served on https://your_domain.com/api
