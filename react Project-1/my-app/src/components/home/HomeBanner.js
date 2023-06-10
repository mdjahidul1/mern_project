import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const HomeBanner = (jahid) => {

//Use State By Hooks-->Functional Component
    const [color,setColor]=useState("green")
    const NewBlue = () => {
             setColor("BLUE")
    }
    const NewGreen = () => {
        setColor("Green")
    }
//UseRef use
    let UserName=useRef();
    let password=useRef();

    const SubmitForm = () => {
      let a=UserName.current.value;
      let b=password.current.value;
      alert(a)
        alert(b)
    }


    let [product,setProduct]=useState([])

   // useEffect(()=>{

 //api call axios by useEffect
        axios.get("https://dummyjson.com/products")
            .then((res)=>{
                setProduct(res.data)
            })
            .catch((err)=>{

            })




        if(color==="blue"){
            return (
                <div>
                    <h1 style={{color:'blue'}}>this is color blue</h1>
                </div>
            );
    }
        else if(color==="red"){
            return (
                <div>
                    <h1 style={{color:'red'}}>this is color red</h1>
                </div>
            );
        }


    return (
        <div>
            <h1>{jahid.title}</h1>
            <h1>{jahid.subtaitle}</h1>
            <h1>{jahid.jsonTitle.name}</h1>
            <h1>{jahid.jsonTitle.lastName}</h1>
            <h1>{jahid.jsonTitle.age}</h1>


 //Use State By Hooks-->Functional Component
            <h1>{color}</h1>
            <button onClick={NewBlue}>Change Blue</button>
            <button onClick={NewGreen}>Change Green</button><br/><br/><br/><br/>
 //UseRef use--------========>
            <input id="user" ref={UserName} placeholder="User Name" type="text"/>
            <input ref={password} placeholder="Password" type="text"/>
            <button onClick={SubmitForm}>Submit</button>


            {JSON.stringify(product)}


        </div>
    );
};

export default HomeBanner;