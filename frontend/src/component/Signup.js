import React,{useState} from 'react'
import axios from 'axios'
import '../style.css'


var Signup = ()=>{

    const [data ,setData] = useState({

        FirstName:"",

        LastName : "",
        EmailId : "",
        Password : ""
    })
 
    let changeHandler =(e)=>{
    
    
       setData({...data,[e.target.name] : e.target.value})
    
        
    }

 let submitHandler =(e)=>{
     e.preventDefault() 
        console.log(data)  
        axios.post('http://localhost:5000/signup',data)
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })

       

 }

return(
   
    <div className="signup-form">
       
        <h1>Sign Up </h1>
    <form onSubmit={submitHandler}>
    <div>
     <input type='text' name = "FirstName" value={data.FirstName} onChange={changeHandler} className="input-box" placeholder="First Name"/>
 </div>
 <div>
     <input type='text' name = "LastName" value={data.LastName} onChange={changeHandler} className="input-box" placeholder="Last Name"/>
 </div>

 <div>
     <input type='text' name = "EmailId" value={data.EmailId} onChange={changeHandler} className="input-box" placeholder="Email-Id"/>
 </div>

<div>
    <input type="password" name ="Password" value={data.Password} onChange={changeHandler} className="input-box" placeholder="Password"/>
</div>
<button type="submit" className="button"> submit</button>

    </form>

    </div>

)
}

export  default Signup