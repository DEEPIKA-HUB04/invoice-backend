var express = require('express');
var router = express.Router();



var {MongoClient, url, dbname,ObjectId} = require('../config')



var bcrypt = require('bcrypt')

router.get('/',function(req,res){

  res.send("hello")
})

router.post('/signup',async function(req,res){
let client;
    try{

        client = await MongoClient.connect(url)
      
          let db = client.db(dbname)
          let salt =   await bcrypt.genSalt(10)

    let hash = await bcrypt.hash(req.body.Password,salt)

    req.body.Password = hash; 

          db.collection("userpost").insertOne(req.body)
    
    client.close()

    res.send("done")
    }
    catch(error){

        if(client) client.close()
        console.log(error);
    }
})

router.post('/login', async function (req,res) {


  let client;
  try{

      client = await MongoClient.connect(url)
    
        let db = client.db(dbname)

         // find the user with email

        let user = await db.collection("userpost").findOne({EmailId : req.body.EmailId})  

        console.log(user)

        if(user){       // if email is correct

          let result = await bcrypt.compare(req.body.Password,user.Password)
          
             if(result)  // if password is correct
          
          {
              client.close()

              res.send(
            
                  "success"
                  
              )   
            }
            else              // if password is incorrect
            client.close()
            
              res.send(
            
                   "username and password wrong"
          )   
            }
               else{        // if email is incorrect
            
                res.send(

             "user not found"

                )
               }
                                
              
              }
              catch(error){
            
                  if(client) client.close()
                  console.log(error);
              }

})

router.post('/invoice', function (req,res) {

  var d = req.body

res.send("done")


})

module.exports = router;
