const express = require('express')
const app = express();
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.post('/sendMessage', async(req,res)=>{
    let gname = req.body.gname;
    res.render('inde.ejs',{gname})
})

app.get('/',(req,res)=>{
    res.render('inde.ejs')
})

app.listen(3001,()=>{
    console.log("Listening to port number 3000")
})