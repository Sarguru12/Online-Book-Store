const mongoose = require('mongoose');
const Book = require('../models/Book');

// MongoDB connection string - adjust this to your configuration
const MONGODB_URI = 'mongodb://localhost:27017/your_database_name';

const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    originalPrice: 19.99,
    discount: "35%",
    rating: 4.5,
    reviews: 2547,
    image: "https://example.com/great-gatsby.jpg",
    description: "A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.",
    category: "Fiction",
    isBestSeller: true,
    isNewArrival: false
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    price: 14.99,
    originalPrice: 24.99,
    discount: "40%",
    rating: 4.8,
    reviews: 3856,
    image: "https://example.com/dune.jpg",
    description: "Set in the distant future, Dune tells the story of young Paul Atreides on the desert planet Arrakis.",
    category: "Science Fiction",
    isBestSeller: true,
    isNewArrival: true
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.99,
    originalPrice: 21.99,
    discount: "23%",
    rating: 4.9,
    reviews: 5263,
    image: "https://example.com/atomic-habits.jpg",
    description: "A proven framework for improving every day through tiny changes in your habits.",
    category: "Self-Help",
    isBestSeller: true,
    isNewArrival: false
  }
];

async function seedBooks() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing books
    await Book.deleteMany({});
    console.log('Cleared existing books');

    // Insert sample books
    const insertedBooks = await Book.insertMany(sampleBooks);
    console.log(`Successfully inserted ${insertedBooks.length} books`);

  } catch (error) {
    console.error('Error seeding books:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeding function
seedBooks(); 