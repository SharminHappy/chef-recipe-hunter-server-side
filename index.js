const express=require('express');
const app=express();
const cors=require('cors')
const port= 5000;


const chefsInfo=require('./data/chefsInfo.json');


app.use(cors());


app.get('/',(req,res)=>{
    res.send('Chef Recipe is cooking')

});

app.get('/chefsInfo',(req,res)=>{
    res.send(chefsInfo);
})

app.listen(port,()=>{
    console.log(`chef recipe cooking is running:${port}`)
})

