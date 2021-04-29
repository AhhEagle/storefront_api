import pool from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const{PEPPER} = process.env;

export type User = {
    id: number,
    firstname: string,
    lastname: string,
    password: string
}

export class AuthController{
    async Create(user:User): Promise<User>{
    try{
    const conn = await pool.connect();
    const sql = 'INSERT INTO users (firstname,lastname,password) VALUES($1,$2, $3) RETURNING *'
const hash = bcrypt.hashSync(
        user.password + PEPPER, 10
      );
const response = await conn.query(sql, [user.firstname, user.lastname, hash]);
const result = response.rows[0];
conn.release;
return result;
}catch(err){
    throw new Error(`unable to create user ${user.firstname} ${user.lastname} : ${err}`);
}
}
    
}



export default AuthController;