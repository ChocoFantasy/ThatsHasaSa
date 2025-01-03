// pages/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="products-page">
      <h1>商品頁面</h1>
      <Link to="/">返回首頁</Link>
    </div>
  );
}

export default Products;