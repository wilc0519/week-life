const express = require('express');
const {sequelize} = require('./models/index');
const userRoute = require('./routes/userRoute')
const app = express();
const cors = require('./middleware/cors')

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(userRoute);

app.listen(PORT, function () {
    console.log('The app has started in http://localhost:' + PORT);
     sequelize.authenticate().then(() => {
        console.log('successful connection');
    }).catch((error) => {
        console.log('connection error',error);
    })
})
