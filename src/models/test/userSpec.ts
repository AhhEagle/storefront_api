import { User, AuthController } from '../../models/user';
import express from 'express';
import Supertest from 'supertest';
import app from '../../server'

const user = new AuthController();
const request =  Supertest(app);



describe("Creating User Model", ()=>{
    it('should have a create method', ()=>{
        expect(user.Create).toBeDefined();
    });

    it('should create a new user', async(done)=>{
       const response = await request.post('/users')
    })
})