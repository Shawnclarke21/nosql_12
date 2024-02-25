const db =require('./db/connection');
const express=require('express');
const startInq=('./lib/departments')
const PORT=process.env.PORT ||3001;
const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req,res)=>{
    res.status(404).end();
})

db.connect(err=>{
    if(err)throw err;
    console.log('connected to database');
    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
        startInq();
    });
});