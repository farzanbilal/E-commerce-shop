// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css'; // Import CSS file

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/150' },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Render the NavBar component */}
        <header className="App-header">
          <h1>Basic E-commerce Website</h1>
        </header>
        <main>
          <Routes>
            {/* Define routes for different components */}
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/products" element={<ProductList />} /> {/* Products route */}
            <Route path="/cart" element={<Cart />} /> {/* Cart route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// NavBar component
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to Home */}
        <li><Link to="/products">Products</Link></li> {/* Link to Products */}
        <li><Link to="/cart">Cart</Link></li> {/* Link to Cart */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact */}
      </ul>
    </nav>
  );
};

// Home component
const Home = () => {
  return (
    <div className="section">
      <h2>Welcome to Our Store</h2>
      <p>Discover our amazing products and shop to your heart's content!</p>
    </div>
  );
};

// ProductList component
const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} /> // Render Product component for each product
      ))}
    </div>
  );
};

// Product component
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} /> {/* Product image */}
      <h2>{product.name}</h2> {/* Product name */}
      <p>${product.price.toFixed(2)}</p> {/* Product price */}
      <button>Add to Cart</button> {/* Add to Cart button */}
    </div>
  );
};

// Cart component
const Cart = () => {
  return (
    <div className="section">
      <h2>Your Cart</h2>
      <p>Your cart is currently empty. Start adding some products!</p>
    </div>
  );
};

// Contact component
const Contact = () => {
  return (
    <div className="section">
      <h2>Contact Us</h2>
      <p>For any inquiries, please reach out to us at contact@store.com.</p>
    </div>
  );
};

export default App;

