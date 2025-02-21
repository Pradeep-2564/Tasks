import './product.css'

const ProductComponent = ({name, price, description})=>{

    return(
        <div className="container">
            <h2>Product: {name}</h2>
            <p><b>Price: </b>Rs {price}/-</p>
            <p><b>Description: </b> {description}</p>
        </div>
    )
}

export default ProductComponent