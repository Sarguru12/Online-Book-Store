import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice';
import BookCarousel from '../components/BookCarousel';

function Home() {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    console.log(books);
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const bestSellers = books.filter(book => book.isBestSeller);
  const newArrivals = books.filter(book => book.isNewArrival);

  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <h2 className="text-2xl font-serif mb-6">Best Sellers</h2>
        <BookCarousel books={bestSellers} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-serif mb-6">New Arrivals</h2>
        <BookCarousel books={newArrivals} />
      </section>
    </div>
  );
}

export default Home;