import {Link} from 'react-router-dom'
import './Header.css';
const Header = () => {
    return (
        <div className="header container">
            <div className="brand">
                <div className="logo">VA</div>
                <div className="brand-title">
                    <div className="title">Vite Shop</div>
                    <div className="subtitle">Fast. Light. Beautiful.</div>
                </div>
            </div>
            <nav className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
        </div>
    )
}

export default Header