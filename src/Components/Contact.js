import React, { useState } from 'react';
import "../Styles/Propertypresent.css"

export const Contact = () => {

   const [formStatus, setFormStatus] = React.useState("send")
   const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("submitting...")
    const {name, email, message} = e.target.elements
    let conFom = { 
        name:name.value,
        email:email.value,
        message:message.value,
    }
    console.log(conFom);
    setTimeout(()=> {
    name.value = "";
    email.value ="";
    message.value = "";
    setFormStatus("send");
    },300)
    

   }

  return (
    <div className='contact'>
     <form  onSubmit={handleSubmit} >
        <label htmlFor='name'>Name</label>
        <input id='name' type="text" placeholder="Your Name" required/>
        <label htmlFor='email'>Email</label>
        <input id='email' type="email" placeholder="example@email.com" required/>
        <label htmlFor='message'>Message</label>
        <textarea placeholder='I Am Interested In This Property'id='message' required/>
        <button type="submit">{formStatus}</button>
     </form>
    </div>
  )
}
