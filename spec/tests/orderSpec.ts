import { OrderController } from '../../src/models/order';
import {AuthController} from '../../src/models/user';
import {ProductController} from '../../src/models/product';


const order = new OrderController();


describe("Order Model", ()=>{
    it('should have a create method', ()=>{
        expect(order.Create).toBeDefined();
    });

    it('should have a show method', ()=>{
        expect(order.Show).toBeDefined();
    });

});

describe('Creating an Order Model', ()=>{
    const user = new AuthController();
    const product = new ProductController();

    beforeAll(async()=>{
        await user.Create({
            firstname: "test",
            lastname: "user",
            password: "testuser"
        });
        await product.Create({
            name: 'test',
            price: '10',
            category: 'test'
        });
    });

    afterAll(async () =>{
        await user.Delete(1);
        await product.Delete(1);
    });
    it('should create an order', async()=>{
        const response = await order.Create({
            status: "completed",
            quantity: 10,
            product_id: 1
        },  1);

    expect(response).toBeTruthy();
    expect(response).toEqual({
        "id": 1,
        "status": "completed",
        "quantity": 10,
        "product_id": 1,
        "user_id": 1
    });
    });
});

   