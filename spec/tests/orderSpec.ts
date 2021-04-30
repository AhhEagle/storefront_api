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


   