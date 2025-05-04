const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const lostItemRoutes = require('./routes/lost-items');
const notificationRoutes = require('./routes/notifications');
const reportRoutes = require('./routes/reports');
const uploadRoutes = require('./routes/upload');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect("mongodb+srv://shanto465islam:Iamgroot@cluster0.bd6pm.mongodb.net/campusconnect?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/users', userRoutes);
app.use('/lost-items', lostItemRoutes);
app.use('/notifications', notificationRoutes);
app.use('/reports', reportRoutes);
app.use('/upload', uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  