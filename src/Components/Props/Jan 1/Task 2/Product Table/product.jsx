import './product.css'

const Product = ({ products, totalInventory })=>{
    return(
        <div className="container">
            <table align="center" >
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Value</th>
                </tr>
                </thead>
                <tbody>

                {products.map((product, index) => (
                    <tr key= { index } >
                    <td> { product.name } </td>
                    <td>Rs. { product.price.toFixed(2) } </td>
                    <td> { product.quantity } </td>
                    <td>Rs. {(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>Total Inventory Value: Rs. {totalInventory.toFixed(2)}/-</h2>
        </div>
    );
}
export default Product