import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Account from './pages/Account.jsx';
import NotFound from './pages/NotFound.jsx';

import { products } from './data/products.js';

export default function StudentWork() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    firstName: 'Avery',
  });

  // keeping the product list in state even though it's not edited anywhere yet
  const [productList] = useState(products);

  function toggleLogin() {
    setUser((u) => ({ ...u, isLoggedIn: !u.isLoggedIn }));
  }

  return (
    <BrowserRouter>
      <div
        style={{
          fontFamily: 'system-ui, Arial',
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        <aside
          style={{
            padding: 12,
            marginTop: 8,
            background: '#fafafa',
            border: '1px solid #eee',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Debug Panel</h3>
          <p>
            Toggle login to test protected routing behavior. When logged out,
            typing <code>/account</code> should NOT show Account.
          </p>
          <button onClick={toggleLogin}>Toggle Logged In</button>
        </aside>

        <Header user={user} />

        <main style={{ padding: 12 }}>
          <Routes>
            <Route path="/" element={<Home products={productList} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails products={productList} />} />
            {/* only register the account route while the user is logged in */}
            {user.isLoggedIn && (
              <Route path="/account" element={<Account user={user} />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
