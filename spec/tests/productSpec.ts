import { ProductController } from '../../src/models/product';


const product = new ProductController();


describe("Product Model", ()=>{
    it('should have a create method', ()=>{
        expect(product.Create).toBeDefined();
    });

    it('should have a show method', ()=>{
        expect(product.Show).toBeDefined();
    });

    it('should have an index method', ()=>{
        expect(product.Index).toBeDefined();
    });

    it('should have a delete method', ()=>{
        expect(product.Delete).toBeDefined();
    });

   it('should create a product using the create method', async()=>{
       const result = await product.Create({
           name: 'test',
           price: '100',
           category: "test"
       });
       expect(result.category).toBeDefined();
       expect(result).toBeTruthy();
   });
});