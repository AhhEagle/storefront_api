import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();



const{POSTGRES_HOST,POSTGRES_PASSWORD_TEST,POSTGRES_USER, POSTGRES_DB_TEST, POSTGRES_PASSWORD, POSTGRES_DB,POSTGRES_USER_TEST, ENV} = process.env;


  const pool:Pool = new Pool ({
    host: POSTGRES_HOST,
    database: process.env.ENV === 'test' ? 'Udacity_Project_Test':'Udacity_project',
    user:'postgres',
    password:'root123$',
    port: 5432
});




/*host: POSTGRES_HOST,
database:POSTGRES_DB,
user:POSTGRES_USER,
password:POSTGRES_PASSWORD

host: POSTGRES_HOST,
database:POSTGRES_DB_TEST,
user:POSTGRES_USER_TEST,
password:POSTGRES_PASSWORD_TEST
*/ 

export default pool;