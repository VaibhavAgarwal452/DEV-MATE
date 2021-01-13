const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

connectDB();

app.use(express.json({ extended: false }));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`port started on ${PORT}`));
