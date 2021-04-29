import express, { Request, Response } from 'express';
import { User, AuthController } from '../models/user';

const user = new AuthController();

const create = async (req:Request, res:Response)=>{
    const response = await user.Create(req.body);

return res.status(200).send({ message: "Operation successful" });
}


export const users_routes = (app:express.Application)=>{
    app.post('/users', create);
}