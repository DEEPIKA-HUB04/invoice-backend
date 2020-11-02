import React,{useState} from 'react'
import './invoice.css'
import axios from 'axios'


var Invoice = ()=>{

const [details,setDetails]= useState({

    shipping: {
        name: " ",
        address: " ",
    
        city: "",
        state: "",
        country: "",
        postal_code:""
      },
      items: [
        {
          item: "",
          description: "",
          quantity: "",
          price: "", 
          tax: ""
        }
        
     ],
      subtotal: "",
      total: "",
      order_number: "",
      header:{
          company_name: "Fresho.co",
          company_logo: "",
          company_address: "Fresho.co, 123 William Street 1th Floor New York, NY 123456"
      },
      footer:{
        text: "pay invoice within 15 days"
      },
      currency_symbol:"", 
      date: {
        billing_date: "01 November 2020",
        due_date: "16 November 2020",
      
      }

})

let changeHandler =(e)=>{
    
    
    setDetails({...details,
    
        shipping: {
            name: document.getElementById("name").value,
            address: document.getElementById("address").value,
            city:document.getElementById("city").value,
            state:document.getElementById("state").value,
            country:document.getElementById("country").value,
            postal_code:document.getElementById("postal_code").value
        },

    items: [
        {
          item: document.getElementById("item").value,
          description: document.getElementById("description").value,
          quantity:document.getElementById("quantity").value,
          price: document.getElementById("price").value, 
          tax: document.getElementById("tax").value
        }
        
     ],
     subtotal: "",
     total: document.getElementById("quantity").value*document.getElementById("price").value*document.getElementById("tax").value,
     order_number: "",


    })
 
     
 }

 let submitHandler =(e)=>{
    e.preventDefault() 
    console.log(details)  
    axios.post('http://localhost:5000/invoice',details)
    .then(response => {
        if(response.data === "done")

            alert('Invoice Data Collected')

    }).catch(error => {
        console.log(error)
    })
 }

return (

    <div className="invoiceform">
        <h1>Invoice</h1>
        <form onSubmit ={submitHandler}>

        <div>
           <label>Name</label> 
     <input type='text' name ="name" id="name" value={details["shipping"]["name"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
    <label>Address</label>
     <input type='text' name ="address" id="address" value={details["shipping"]["address"]} onChange={changeHandler} className="input-box"/>
 </div>
        
 <div>
 <label>City</label>
     <input type='text' name ="city" id="city" value={details["shipping"]["city"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>State</label>
     <input type='text' name ="state" id="state" value={details["shipping"]["state"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Country</label>
     <input type='text' name ="country" id="country" value={details["shipping"]["country"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Postal_Code</label>
     <input type='text' name ="postal_code" id="postal_code" value={details["shipping"]["postal_code"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Item</label>
     <input type='text' name ="item" id="item" value={details["items"]["item"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Text</label>
     <input type='text' name ="description" id="description" value={details["items"]["description"]} onChange={changeHandler} className="input-box"/>
 </div>
 
 <div>
 <label>Quantity</label>
     <input type='text' name ="quantity" id="quantity" value={details["items"]["quantity"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Price</label>
     <input type='text' name ="price" id="price" value={details["items"]["price"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Tax</label>
     <input type='text' name ="tax" id="tax" value={details["items"]["tax"]} onChange={changeHandler} className="input-box" />
 </div>
 <div>
 <label>Total</label>
     <input type='text' name ="total" id="total" value={details["total"]} onChange={changeHandler} className="input-box" />
 </div>
 
 
 <button type="submit" className="button"> submit</button>


        </form>
    
    </div>






)


}

export default Invoice