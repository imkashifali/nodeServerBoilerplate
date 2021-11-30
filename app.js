const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./src/routes/user.Route');
const productRoutes = require('./src/routes/product.routes');
const userInfoRoutes = require('./src/routes/userInfo.Route')


const app = express();

app.use(express.json());

// DB CONFIG
const db = require('./src/config/keys').mongoURI;

//Connect To MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch( err=> console.log(err));

app.get('/', (req,res) => res.send('hello World'));


//Use Routes
app.use('/user',userRoutes);
app.use('/product',productRoutes);
app.use('/userInfo',userInfoRoutes);





const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server Running on ${port}` ));

