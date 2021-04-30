import express, { Request, Response } from "express";
import { OrderController } from "../models/order";
import decodeToken from "../middlewares/decodeToken";

const order = new OrderController();

const create = async (req: Request, res: Response) => {
        console.log(res.locals.data.result.id);
    const response = await order.Create(req.body, res.locals.data.result.id);
    return res.status(200).json(response);
  };


 const show = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.user_id);
    const response = await order.Show(userId);
    return res.status(200).json(response);
  };

  export const order_routes = (app: express.Application) => {
    app.post("/orders", decodeToken, create);
    app.get("/orders/:user_id", decodeToken, show);
  };
  

