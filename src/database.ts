import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

const{POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB} = process.env;

const pool = new Pool ({
    host: '127.0.0.1',
    database:POSTGRES_DB,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD
});

export default pool;