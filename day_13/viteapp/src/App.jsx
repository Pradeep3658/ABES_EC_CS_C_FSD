import Header from "./Component/Header"
import Body from "./Component/Body"
import Footer from "./Component/Footer"
import Home from "./Component/Home";
import About from "./Component/About";
import Search from "./Component/Search"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => { setProducts(data); setFilteredData(data) })
      .catch(err => console.log('unable to load products', err))
  }, [])

  const searchHandler = (query) => {
    if (!query) return setFilteredData(products)
    setFilteredData(products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())))
  }

  return (
    <div className="app">
      <div className="container">
        <div className="search-row">
          <Search searchHandler={searchHandler} />
        </div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Body filteredData={filteredData} />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
