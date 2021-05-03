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
    `CREATE DATABASE udacity_projecttest;`
    `CREATE DATABASE udacity_project;`
- connect to each database and grant user all privileges i.e
    `\c udacity_project`
    `GRANT ALL PRIVILEGES ON DATABASE udacity_project TO postgres;`
- to test that it is working run `\dt` and the output should be "No relations found." 
### Migrate
- Run the below code to create db-migration files: 
        `db-migrate up --config config/database.json -e dev`
- to drop a table, run the corresponding down file to drop any table

### Environment Variables
 By default, when `yarn watch` is run, the environment is set to development and as such he database will run on the development server and on port 5432, when running the tests, the environment is changed to test and the database will still run on port 5432
     
 ### Testing
 To test run `npm run test`. It will change the environment to test and utilize the test database. It will as well run the necessary db-migration files and when the test is done, it drops the database. All test must pass as shown below:
 <img width="771" alt="Screenshot 2021-05-02 at 00 24 05" src="https://user-images.githubusercontent.com/24871973/116797382-22024300-aadd-11eb-8e32-e5037be069ae.png">




