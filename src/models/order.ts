import pool from "../database";
import {PoolClient, QueryResult} from 'pg';


export type Order = {
    id?: number;
    status: string;
    user_id?: number
  };

  export class OrderController {

    async Create(order: Order, user_id:number): Promise<Order> {
        try {
          const conn:PoolClient = await pool.connect();
          const sql =
            "INSERT INTO orders (status,user_id) VALUES($1,$2,) RETURNING *";
          const response : QueryResult = await conn.query(sql, [
            order.status,  user_id
          ]);
          conn.release();
          const result = response.rows[0];
          return result;
        } catch (err) {
          throw new Error(
            `unable to create order : ${err}`
          );
        }
      }
   
    
      async Show(userId: number): Promise<Order[]> {
        try {
          const conn = await pool.connect();
          const sql = "SELECT * FROM orders WHERE user_id=$1";
          const response = await conn.query(sql, [userId]);
          const result = response.rows;
          conn.release();
          return result;
        } catch (err) {
          throw new Error(`unable to get order ${userId} ${err}`);
        }
      }
  }
