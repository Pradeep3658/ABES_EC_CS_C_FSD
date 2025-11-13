import Product from "./Product"
const Body = ({ filteredData }) => {
    return (
        <div className="body container">
            <div className="products">
                {filteredData && filteredData.length ? filteredData.map((product, idx) => <Product product={product} key={idx} />) : (
                    <div style={{padding:40,textAlign:'center',color:'var(--muted)'}}>No products found</div>
                )}
            </div>
        </div>
    )
}

export default Body