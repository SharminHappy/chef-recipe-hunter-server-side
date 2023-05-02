const express=require('express');
const app=express();
const port= 5000;


app.get('/',(req,res)=>{
    res.send('Chef Recipe is cooking')

});

app.listen(port,()=>{
    console.log(`chef recipe cooking is running:${port}`)
})

