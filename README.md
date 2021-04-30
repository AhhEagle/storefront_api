# Udacity: Storefront Backend Endpoints
This is a project completed in fullfillment of udacity nanodegree. It is built with NodeJs. The API route and database schema is contained in the [REQUIREMENT.md](https://github.com/AhhEagle/storefront_api/blob/main/REQUIREMENTS.md)

## Exploring The Project

You can either clone or fork the repo, after which you can run the command below to install all the packages.

`npm install`

## Database
Follow the following steps to create a database for both the dev and test environment:
- connect to postgres  by starting psql `psql postgres`
- in psql run the following:
    `CREATE USER shopping_user WITH PASSWORD 'password123';`
- in psql run the following to create the test and dev database:
    `CREATE DATABASE shoppingdb_test;`
    `CREATE DATABASE shoppingdb;`
- connect to each database and grant user all privileges i.e
    `\c shoppingdb`
    `GRANT ALL PRIVILEGES ON DATABASE shoppingdb TO shopping_user;`
- to test that it is working run `\dt` and the output should be "No relations found." 
### Migrate
- at the command line run db-migrate up followed by the table name you want to create. This should be done for the users, orders and products table i.e
    `db-migrate up 20210429051933-users-table-up`
- to drop a table, run the corresponding down file to drop any table

### Environment Variables
This should not be typically included in a project but for this purpose:
    `POSTGRES_HOST=127.0.0.1`
     `POSTGRES_USER=shopping_user`
     `POSTGRES_PASSWORD=password123`
     `POSTGRES_DB=shoppingdb`
     `POSTGRES_PORT=5432`
     `POSTGRES_DB_TEST=shoppingdb_test`
     `BCRYPT_PASSWORD=olatejuoladimeji` 
     `PEPPER=peppergang`
     `TOKEN_SECRET=InterestingSecret123$`
     `ENV=dev`



