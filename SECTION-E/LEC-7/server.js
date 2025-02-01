const express = require('express');
const userRoutes = require('./routes/userRoute.js');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));  // Ensure static files are served correctly

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/u1', userRoutes);

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000/u1/user/all');
});
