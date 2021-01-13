const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`port started on ${PORT}`));
