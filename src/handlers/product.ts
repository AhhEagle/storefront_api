import express, { Request, Response } from 'express';
import { Product, ProductController } from '../models/product';

const user = new ProductController();

const create = async (req:Request, res:Response)=>{
    const input: Product = {
        name: req.body.name,
        price: req.body.price,
        category:req.body.category
    };
   const response =  await user.Create(input);

return res.status(200).send({ message: response });
}

const index = async (req:Request, res:Response)=>{
    const response = await user.Index();
    console.log(response);
return res.status(200).send(response);
}

const show = async (req:Request, res:Response)=>{
    const productId = parseInt(req.params.id);
    const response = await user.Show(productId);
return res.status(200).send(response);
}

const deleteProduct = async (req:Request, res:Response)=>{
    const productId = parseInt(req.params.id);
    const response = await user.Delete(productId);
return res.status(200).send(response);
}


export const users_routes = (app:express.Application)=>{
    app.post('/users', create);
    app.get('/users', index);
    app.get('/users/:id', show);
    app.delete('/users/:id', deleteProduct);
}