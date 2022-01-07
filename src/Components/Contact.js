import React from "react";
import { useState } from "react";
import { screen } from '@testing-library/react';


const Contact = () => {
  const[user, setUser]= useState({
    name:"",
    text:"",
  });

let name, value;
  const getUserData=(event) =>{
  name=event.target.name;
  value=event.target.value;

  setUser({...user,[name]:value});

  };


  const postData =async(e)=> { 
    e.preventDefault();

    const {name,text} = user;
    if( name && text){

   

    const res = await fetch(
      "https://formdata-189f4-default-rtdb.firebaseio.com/form-data.json",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify({
        name,
        text,
      }),

      
    }

    );

if(res){
  setUser({
    name:"",
    text:"",
  });
  alert("data Stored Successfully")
}
}else{

alert("Plese Fill data")


}




 };













  return (
  <div className=" h-screen w-full flex justify-center items-center"> 

 


    <form method="POST">


      <div className="flex flex-col  space-y-5 p-5 bg-slate-100 border-2 rounded-md items-center "> 
      <h1 className="font-semibold text-2xl">Contact Us </h1>

    <input name="name" autoComplete="off" placeholder='Enter your name...' value={user.name}  onChange={getUserData} className="border-2 rounded-md px-3 py-2 " autoFocus/>
    <textarea  name="text"  autoComplete="off" placeholder='' value={user.text}  onChange={getUserData} className="border-2 rounded-md px-5  py-2 " />
    



    <button onClick={postData} className="border-2 bg-cyan-300 text-white rounded-md px-7 py-2 "> Submit </button>
    <h1 className="text-sm"> Developed By <a href="#" className="text-blue-500 font-semibold underline hover:cursor-pointer">  SAGAR </a> @2021</h1>
    </div>

   
    </form>

  



    </div>




  )
}

export default Contact

