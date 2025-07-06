import { useState } from 'react';
import ProductList from './ProductList';
import Wishlist from './Wishlist';
import { products } from '../data';

function ShoppingInterface() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    const isInWishlist = wishlist.some(
      (item) => item.id === product.id
    );
    if (!isInWishlist) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  const isProdInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <div className="Shopping-Interface">
      <div className="Product-List">
        <h1>Product list</h1>
        {products.map((product) => {
          return (
            <ProductList
              key={product.id}
              product={product}
              onAdd={addToWishlist}
              isInWishlist={isProdInWishlist(product.id)}
            />
          );
        })}
      </div>

      <div className="Wishlist">
        <h1 style={{ marginLeft: '5rem' }}>Wishlist</h1>

        <div className="wishlist-section">
          {wishlist.map((product) => {
            return (
              <Wishlist
                key={product.id}
                product={product}
                onRemove={removeFromWishlist}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingInterface;
