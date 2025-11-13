const Product = ({ product }) => {
    return (
        <div className="product">
            <div style={{overflow:'hidden',borderRadius:8}}>
              <img src={product.img} alt={product.title} />
            </div>
            <h2>{product.title}</h2>
            <h3>${product.price.toFixed(2)}</h3>
        </div>
    )
}

export default Product