import ProductComponent from "../Product/Product";
import './parent.css'

const ParentComponent = ()=>{
    const products = [
        {
            name: "MI 15 pro",
            price: "15,000",
            description: "The Xiaomi 15 Pro is a premium offering in the Xiaomi 5G mobiles"
        },
        {
            name: "Xiaomi 14",
            price: "25,000",
            description: "Leica Summilux optical lens unlocks a significant improvement in the capture speed of the lens"
        },
        {
            name: "Nothing Phone (2)",
            price: "28,000",
            description: "Energy efficient display. Beauty lasts. Now bigger and brighter, Phone (2) has a 6.7” flexible LTPO AMOLED display with 1600 nits peak pixel brightness."
        },
    ];

    return(
        <div className="container">
            <h1>List of Products</h1>
            {products.map((product,index)=>(
                <ProductComponent
                    key={index}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                
                />
            ))}
        </div>
    )
}

export default ParentComponent