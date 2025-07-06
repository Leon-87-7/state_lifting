// import { products } from '../data';

function Wishlist({ product, onRemove }) {
  return (
    <div
      className="wishlist-card"
      key={product.id}
    >
      <h4>{product.name}</h4>
      <button
        onClick={() => {
          onRemove(product.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Wishlist;
