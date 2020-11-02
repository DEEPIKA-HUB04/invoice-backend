import React,{useState} from 'react'
import {Redirect } from 'react-router-dom'
import axios from 'axios'
import '../login.css'


var Login = ()=>{

    

    const [data ,setData] = useState({

        
        EmailId : "",
        Password : ""
    })
    const [isAuth,setIsAuth] = useState(true)

    
    if(!isAuth){

        return <Redirect to="/invoice"/>
    
          }

    let changeHandler =(e)=>{
    
    
       setData({...data,[e.target.name] : e.target.value})
    
        
    }

    

 let submitHandler =(e)=>{
     e.preventDefault() 
        console.log(data)  
        axios.post('http://localhost:5000/login',data)
        .then(response => {
            if(response.data === "success")
            alert('done')

            else if (response.data === "username and password wrong")

            alert("username and password wrong")

            else if(response.data === "user not found")
            alert("user not found")
        }).catch(error => {
            console.log(error)
        })

       

 }

return(
   
    <div className="loginform">
       
        <h1>Login </h1>
    <form onSubmit={submitHandler}>
    

 <div>
     <input type='text' name = "EmailId" value={data.EmailId} onChange={changeHandler} className="input-box" placeholder="Email-Id"/>
 </div>

<div>
    <input type="password" name ="Password" value={data.Password} onChange={changeHandler} className="input-box" placeholder="Password"/>
</div>
<button type="submit" className="button" onClick={()=> setIsAuth(false)}> submit</button>

    </form>

    </div>

)
}

export  default Login