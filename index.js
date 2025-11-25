const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Connect to MongoDB
mongoose.connect('mongodb+srv://arulsesi:usha123@cluster0.kv3hmj0.mongodb.net/?appName=Cluster0')
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ Connection error", err));


// 2. Create Product Schema
const productSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: String
});

// 3. Create Model
const Product = mongoose.model('Product', productSchema);


// 4. CRUD Routes (Simple Version Only)

// Add Product
app.post('/product', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send("Product Created");
});

// Get All Products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


// Start Server
app.listen(5000, () => console.log("🚀 Server running at http://localhost:5000"));


