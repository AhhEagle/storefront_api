import {  AuthController } from '../../src/models/user';


const user = new AuthController();
const id : number = 1;


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

   it('should return all created users', async()=>{
    const result = await user.Index();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result[0].password.length).toBeGreaterThan(10);
    expect(result[0].firstname).toBeDefined();
    });

    it('should return the user with the given Id', async()=>{
        const result = await user.Show(id);
        expect(result.id).toBe(1);
        expect(result.firstname).toEqual('test');
        expect(result.password.length).toBeGreaterThan(10);
    });

    it('should return the details of the deleted user', async()=>{
        const result = await user.Delete(id);
        expect(result.id).toBe(1);
        expect(result.firstname).toEqual('test');
        expect(result.lastname).toEqual('user');
        expect(result.password.length).toBeGreaterThan(10);
    });


});