const express = require('express');
const {sequelize} = require('./models/index');
const userR = require('./routes/userRoute')
const app = express();
// const user = require('./database/models/user')
// const note = require('./database/models/note')
// const UserR = require('./routes/userRoute')
const cors = require('./middleware/cors')
//Setting
const PORT = process.env.PORT || 3001;

//Middlelware
//para rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(userR);



//Routers
app.get('/', (req, res) => {
    res.json("Hola mundo")
});

app.get('/user',(req, res)=>{

})

//run the server
app.listen(PORT, function () {
    console.log('The app has started in http://localhost:' + PORT);
//conectarse a la base de datos
     sequelize.authenticate().then(() => {
        console.log('successful connection');
    }).catch((error) => {
        console.log('connection error',error);
    })
})
