# Overview 

## Features

- Keep track of how many times a coin's data has been visited
  - In total
  - Daily
- Daily resets 


---

## TODO:

- [ ] SSL certificate
- [ ] Load balancing with nginx
- [ ] Cron job to reset daily visits


## Technologies

### Written in Typescript :

### Front End

- Next JS 
    - Hosted with Vercel
- React
- ChakraUI

### Backend   

- Server hosted on AWS EC2
    - PM2 manages process 

- PostgresSQL
    - Hosted using AWS RDS    

- Express (NodeJS)

## Deploy

``` bash
$ git clone https://github.com/wAndrewx/coin-wallet-data-server.git
```

``` bash
$ npm install
```

``` bash
$ npm run pm2
```

# Development

## Database setup:

### Environment variables
``` vim 
DB_USER= <User>
DB_PW= <Password>
DB_HOST= <localhost | host provider>
DB_PORT= <Port> //5432
DB_NAME= <Database-Name>
```

### Table setup
```sql

CREATE TABLE coins (
    token_name varchar[50]
    token_ticker varchar[50]
    total_visits bigint
    daily_visits integer
)

```

### Clone and install dependencies

##### If Typescript does not work for you try:

``` bash
$ npm i typescript -g
```

``` bash
$ git clone https://github.com/wAndrewx/coin-wallet-data-server.git
```

``` bash
$ npm install
```

## AWS EC2 vm Setup

 Once you have set up your EC2 machine, ssh into your server and install all dependencies

``` bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
##### Install Node, I used version Node 16

```
$ nvm install <version>
```
```
$ sudo yum install -y git
```
Now you can clone the repo and install project repositories and install pm2

``` cli
$ npm install -g pm2

$ npm run pm2
```

## Local Machine

```
$ npm i

$ npm run dev
```
