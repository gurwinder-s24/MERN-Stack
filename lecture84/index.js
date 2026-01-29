const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// 1. Load environment variables
dotenv.config();

async function startServer() {
  // 2. Connect DB before handling any requests
  await connectDB(); // i.e., start server only after DB connects.

  // 3. Initialize express app
  const app = express();
  // 4. Global middlewares 
  app.use(express.json());

  // 5. Routes
  app.get('/', (req, res) => {
    console.log('Im inside homepage route handler'); 
    res.send('Welcome to the Homepage!');
  });
  app.use('/api', productRoutes);

  // 6. Start the server
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server is Up!`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});