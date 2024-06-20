const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config();

const PORT=3000;

app.use(express.json());
app.use(cors());

const {dbConnect}=require('./db/database');
dbConnect()

const doctorRoute=require('./routes/doctor');

app.use('/api/v1', doctorRoute);


app.listen(PORT, ()=>{
    console.log(`App started at PORT ${PORT}`);
})