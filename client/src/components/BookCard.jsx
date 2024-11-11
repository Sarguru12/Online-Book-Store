import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

function BookCard({ book }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className="w-48 flex-none">
      <div className="relative">
        <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-md" />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm">
          {book.discount}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-medium line-clamp-2">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(book.rating) ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">({book.reviews})</span>
        </div>
        <div className="mt-2">
          <span className="text-red-600 font-bold">₹{book.price}</span>
          <span className="text-sm text-gray-600 ml-2 line-through">₹{book.originalPrice}</span>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        <Link to={`/book/${book.id}`} className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          View Details
        </Link>
        <button onClick={handleAddToCart} className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;