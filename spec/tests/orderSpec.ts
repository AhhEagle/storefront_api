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
            await user.Delete(id);
            await product.Delete(id);
        });
    it('should create an order', async() =>{
        const response = await order.Create({ status: "completed"}, id);
        
    })
});


   