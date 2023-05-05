const express=require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5000;


const chefsInfo=require('./data/chefsInfo.json');
const viewChefRecipes=require('./data/chefsInfo.json');
const details=require('./data/chefsInfo.json');

app.use(cors());


app.get('/',(req,res)=>{
    res.send('Chef Recipe is cooking')

});

app.get('/chefsInfo',(req,res)=>{
    res.send(chefsInfo);
})

app.get('/viewChefRecipes',(req,res)=>{
    res.send(viewChefRecipes);
})

app.get('/viewChefRecipes/:id',(req,res)=>{
    const id=req.params.id;
    const selectedViewChefsRecipes= viewChefRecipes.find(n=>n.id ==id);
    res.send(selectedViewChefsRecipes)

})

app.get('/details',(req,res)=>{
    res.send(details);
})

app.get('/details/:id',(req,res)=>{
    
    const id=req.params.id;
    const some=id.split('-');
    const selectedDetails=details.find(s=>s.id == some[0]);
     res.send(selectedDetails.recipe_info.find(s=>s.recipe_id == some[1]))
  
})

app.listen(port,()=>{
    console.log(`chef recipe cooking is running:${port}`)
})

