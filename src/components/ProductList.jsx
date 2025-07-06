// import { products } from '../data';

function ProductList({ product, onAdd, isInWishlist }) {
  return (
    <div className="Product-List">
      <div
        className="card"
        key={product.id}
      >
        <h3>{product.name}</h3>
        <div className="inner-card">
          <p className="desc">{product.description}</p>
          <button
            onClick={() => {
              onAdd(product);
            }}
            disabled={isInWishlist}
            className={`${isInWishlist && 'disabled-btn'}`}
          >
            {isInWishlist ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
