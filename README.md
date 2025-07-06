# Product Wishlist App

A React application that allows users to browse products and manage a personal wishlist.

## Features

- **Product List Display**: Browse through a list of available products
- **Wishlist Management**: Add and remove products from your personal wishlist
- **Duplicate Prevention**: Each product can only be added to the wishlist once
- **Interactive UI**: Clean, responsive interface with real-time updates

## Functionality

### Product List

- Displays all available products with names and descriptions
- Each product has an "Add" button to add it to the wishlist
- Button becomes disabled and shows "Added" when product is already in wishlist

### Wishlist

- Shows all products that have been added to the wishlist
- Each wishlist item has a "Remove" button to remove it from the wishlist
- Empty wishlist displays a helpful message

### Core Features

- ✅ Add products to wishlist by clicking "Add"
- ✅ Remove products from wishlist by clicking "Remove"
- ✅ No duplicate products allowed in wishlist
- ✅ Real-time UI updates when adding/removing items

## Project Structure

```
src/
├── components/
│   ├── ProductList.jsx      # Individual product item component
│   ├── Wishlist.jsx         # Individual wishlist item component
│   └── ShoppingInterface.jsx # Main container component
├── data/
│   └── index.js            # Product data
├── App.jsx                 # Root component
├── App.css                 # Styling
└── main.jsx               # Entry point
```

## Component Architecture

### ProductList Component

- **Props**: `product`, `onAdd`, `isInWishlist`
- **Responsibility**: Renders individual product cards with add functionality
- **Features**: Disabled state when product is already in wishlist

### Wishlist Component

- **Props**: `product`, `onRemove`
- **Responsibility**: Renders individual wishlist items with remove functionality
- **Features**: Clean layout with product name and remove button

### ShoppingInterface Component

- **Responsibility**: Main container that manages state and coordinates between components
- **State Management**: Handles wishlist array and add/remove operations
- **Functions**:
  - `addToWishlist()` - Adds product if not already present
  - `removeFromWishlist()` - Removes product by ID
  - `isProductInWishlist()` - Checks if product exists in wishlist

## Key Implementation Details

### State Management

- Uses React `useState` hook for wishlist state management
- State is lifted up to the main container component
- Props are passed down to child components for communication

### Duplicate Prevention

```javascript
const addToWishlist = (product) => {
  const isInWishlist = wishlist.some(
    (item) => item.id === product.id
  );
  if (!isInWishlist) {
    setWishlist([...wishlist, product]);
  }
};
```

### Component Separation

- Each product and wishlist item is a separate, reusable component
- Clean separation of concerns between display and logic
- Props-based communication between parent and child components
