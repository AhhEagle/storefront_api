import { OrderController } from '../../src/models/order';
import {AuthController} from '../../src/models/user';
import {ProductController} from '../../src/models/product';


const order = new OrderController();
const user = new AuthController();
const product = new ProductController();
const id : number = 1;


describe("Order Model", ()=>{
    it('should have a create method', ()=>{
        expect(order.Create).toBeDefined();
       
    });

    it('should have an index method', ()=>{
        expect(order.Index).toBeDefined();
    });


    it('should have a show method', ()=>{
        expect(order.Show).toBeDefined();
    });

    it('should have a addOrderProduct method', ()=>{
        expect(order.addOrderProduct).toBeDefined();
    });

});

describe('Orders test with a foreign key', ()=>{
        beforeAll(async() =>{
         await user.Create({
                firstname: 'test',
                lastname: 'user',
                password: "testpassword"
            });
            await product.Create({
                name: 'test',
                price: '100',
                category: "test"
             });
        
        });

        afterAll(async() =>{
            await order.Delete('1');
            await user.Delete(id);
            await product.Delete(id);
            console.log("was product called at all");
        });
    it('should create an order', async() =>{
        const response = await order.Create({ status: "completed"}, id);
        expect(response).toBeDefined();
        expect(response).toBeTruthy();
        expect(response.status).toBeDefined();
        expect(response.id).toBe(id);
    });

    it('should show current order by the given user id', async() =>{
        const response = await order.Show(id);
        expect(response).toBeDefined();
        expect(response).toBeTruthy();
        expect(response.status).toBeDefined();
        expect(response.id).toBe(id);
    });
});


   