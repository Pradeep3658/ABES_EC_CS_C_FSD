import { useEffect, useState } from 'react'
const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <div className="logo">EB</div>
        <div>
          <h1 className="title">E-Shop</h1>
          <div className="subtitle">Everyday essentials, thoughtfully curated</div>
        </div>
      </div>
      <div className="controls">
        <div className="chip">Free shipping over $50</div>
      </div>
    </div>
  )
}

const Search = ({ filterHandler }) => {
  return (
    <div className="search">
      <input type="text" name="search" id="search" placeholder="Search products..." onChange={(e) => filterHandler(e.target.value)} />
    </div>
  )
}

const Product = ({ product }) => {
  return (
    <div className="product" key={product.title}>
      <div className="product-media">
        <img src={product.img} alt={product.title} loading="lazy" />
        {/* optional badge example */}
        <div className="badge">New</div>
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">High quality product</p>
        <div className="product-row">
          <div className="price">${product.price.toFixed(2)}</div>
          <button className="add">Add</button>
        </div>
      </div>
    </div>
  )
}

const Body = ({ filteredData }) => {
  return (
    <div className="body">
      <div className="grid products">
        {filteredData && filteredData.length ? filteredData.map((product, idx) => <Product product={product} key={idx} />) : (
          <div className="empty">No products found</div>
        )}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">© {new Date().getFullYear()} E-Shop — Built with care</div>
  )
}
function App() {
  const [products, setProducts] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setFilteredData(data)
      })
      .catch((err) => console.log('unable to load data', err))
  }, [])

  const filterHandler = (query) => {
    if (!query) return setFilteredData(products)
    const data = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
    setFilteredData(data)
  }

  return (
    <div className="app">
      <Search filterHandler={filterHandler} />
      <Header />
      <Body filteredData={filteredData} />
      <Footer />
    </div>
  )
}
export default App
