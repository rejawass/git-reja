const express=require('express');
const multer=require('multer');
const mysql=require('mysql');
const path=require('path');
require('dotenv').config()
const app=express();
var pool = mysql.createConnection({  
    host: 'localhost',  
    user : 'root', 
    port :'3307' ,
    password : '1234',   
    database : 'wldemo' 
});  
  
// To check whether the connection is succeed for Failed while running the project in console.  
pool.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
app.get('/displayImage',(req,res)=>{  
    pool.query('SELECT operator_image FROM ptr_operator',(err,data,fields)=>{  
    if(!err)   
    res.json(
        {success:1,
            url:`http://localhost:3000/displayImage/${req.data}`

        });  
    else {
        console.log(err); 
    }  
        console.log(data);
})  
}); 
// To Run the server with Port Number
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


