const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("HRA-private-API-v0.1.0b1");
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB', error));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 6969;
app.listen(port, () => console.log(`Server running on port ${port}`));