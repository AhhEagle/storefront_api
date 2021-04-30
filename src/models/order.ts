import pool from "../database";
import {PoolClient, QueryResult} from 'pg';


export type Order = {
    id?: number;
    status: string;
    quantity: number;
    product_id: number;
    user_id?: number
  };

  export class OrderController {

    async Create(order: Order, user_id:number): Promise<Order> {
        try {
          const conn:PoolClient = await pool.connect();
          const sql =
            "INSERT INTO orders (status, quantity, product_id, user_id) VALUES($1,$2, $3, $4) RETURNING *";
          const response : QueryResult = await conn.query(sql, [
            order.status, order.quantity, order.product_id, user_id
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
