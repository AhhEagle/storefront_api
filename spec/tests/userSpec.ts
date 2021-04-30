import {  AuthController } from '../../src/models/user';


const user = new AuthController();


describe("User Model", ()=>{
    it('should have a create method', ()=>{
        expect(user.Create).toBeDefined();
    });

    it('should have a show method', ()=>{
        expect(user.Show).toBeDefined();
    });

    it('should have an index method', ()=>{
        expect(user.Index).toBeDefined();
    });

    it('should have a delete method', ()=>{
        expect(user.Delete).toBeDefined();
    });

   it('should create a user using the create method', async()=>{
       const result = await user.Create({
           firstname: 'test',
           lastname: 'user',
           password: "testpassword"
       });
       expect(result.password).toBeDefined();
       expect(result).toBeTruthy();
   });
});