import { ProductController } from '../../src/models/product';


const product = new ProductController();
const id : number = 2;


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
    console.log("loggged second");
       const result = await product.Create({
           name: 'test',
           price: '100',
           category: "test"
       });
       console.log("product result", result);
       expect(result.category).toBeDefined();
       expect(result).toBeTruthy();
   });

   it('should return all created products', async()=>{
    const result = await product.Index();
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result[0].name).toBeDefined();
    expect(result[0].name).toBe('test');
    });

    it('should return the product with the given Id', async()=>{
        const result = await product.Show(id);
        expect(result.id).toBe(id);
        expect(result.name).toEqual('test');
        expect(result.category).toBe('test');
    });

    it('should return the details of the deleted product', async()=>{
        const result = await product.Delete(id);
        expect(result.id).toBe(id);
        expect(result.name).toEqual('test');
        expect(result.category).toEqual('test');
    });
});