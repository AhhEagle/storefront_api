# Udacity: Storefront Backend Endpoints
This is a project completed in fullfillment of udacity nanodegree. It is built with NodeJs. The API route and database schema is contained in the [REQUIREMENT.md](https://github.com/AhhEagle/storefront_api/blob/main/REQUIREMENTS.md)

## Exploring The Project

You can either clone or fork the repo, after which you can run the command below to install all the packages.

`npm install`

## Database
Follow the following steps to create a database for both the dev and test environment:
- connect to postgres  by starting psql `psql postgres`
- in psql run the following:
    `CREATE USER postgres WITH PASSWORD 'password123';`
- in psql run the following to create the test and dev database:
    `CREATE DATABASE Udacity_projecttesttest;`
    `CREATE DATABASE Udacity_project;`
- connect to each database and grant user all privileges i.e
    `\c Udacity_project`
    `GRANT ALL PRIVILEGES ON DATABASE Udacity_project TO postgres;`
- to test that it is working run `\dt` and the output should be "No relations found." 
### Migrate
- at the command line run db-migrate up followed by the table name you want to create. This should be done for the users, orders and products table i.e
    `db-migrate up 20210429051933-users-table-up`
- to drop a table, run the corresponding down file to drop any table

### Environment Variables
This should not be typically included in a project but for this purpose:
     `POSTGRES_HOST=127.0.0.1`
     `POSTGRES_USER=postgres`
     `POSTGRES_PASSWORD=password123`
     `POSTGRES_DB=Udacity_project`
     `POSTGRES_PORT=5432`
     `POSTGRES_DB_TEST=Udacity_projecttesttest`
     `BCRYPT_PASSWORD=olatejuoladimeji` 
     `PEPPER=peppergang`
     `TOKEN_SECRET=InterestingSecret123$`
     `ENV=dev`
     
 ### Testing
 To test run `npm run test`. It will change the environment to test and utilize the test database. It will as well run the necessary db-migration files and when the test is done, it drops the database.



