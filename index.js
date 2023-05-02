const express=require('express');
const app=express();
const cors=require('cors')
const port= 5000;


const chefsInfo=require('./data/chefsInfo.json');
const viewChefRecipes=require('./data/chefsInfo.json');





app.use(cors());


app.get('/',(req,res)=>{
    res.send('Chef Recipe is cooking')

});

app.get('/chefsInfo',(req,res)=>{
    res.send(chefsInfo);
})

// app.get('/chefInfo/:id',(req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     const selectedChefInfo=chefsInfo.find(n=>n.id==id);;
//     res.send(selectedChefInfo)
// })

app.get('/viewChefRecipes',(req,res)=>{
    res.send(viewChefRecipes);
})

app.get('/viewChefRecipes/:id',(req,res)=>{
    const id=req.params.id;
    const selectedViewChefsRecipes= viewChefRecipes.find(n=>n.id ==id);
    res.send(selectedViewChefsRecipes)

})

app.listen(port,()=>{
    console.log(`chef recipe cooking is running:${port}`)
})

