 
import Child from "../Product Table/product"; 
import './parent.css'

const ParentComp = ()=>{
    const products = [
        {name:"Rice bag",price: 9000,quantity:2},
        {name:"Gold Drop Oil",price: 3000,quantity:3},
        {name:"MI Television",price: 6000,quantity:1},
        {name:"Laptop",price: 10000,quantity:1},
    ];
    const totalInventory = products.reduce((total, product) =>total+ (product.price * product.quantity), 0);
    return(
        <div>
            <h1>Products</h1>
            <Child products ={products} totalInventory={totalInventory} />
        </div>
    );
}
export default ParentComp
 