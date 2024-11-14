const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{

    res.status(200).json({message:"this project"});
});
app.listen(port,()=>{
    console.log(`serve is running on port localhost:${port}`)
});
app.post('/',(req,res)=>{
res.status(100).json({message:"software post"});
})