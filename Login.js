import React, {useState} from "react";
import {Link} from "react-router-dom";

import firebase from "../utils/firebase";


export default function Login () {
    const [payload, setPayload] = useState({ 
        email:"", 
        password:""});

    const handleChange =(prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value});
    };

    const login = (e) => {
        e.preventDefault(); //para hindi mag re-load yung page

        if(!payload.email || !payload.password){
            alert("Please complete all fields")
        }
        else{
             //backend part
        firebase
        .auth()
        .signInWithEmailAndPassword(payload.email,payload.password)
        .then((signedInUser)=>{
            //registered and signed in
            alert("registered and signed in" + signedInUser.user.email);
            console.log(signedInUser.user);

        })
        .catch((err)=>{
        let errorMessage = err.message;
        alert(errorMessage);

        });
        }

    };
 
    return (
        <div className="App">
            <form>
            <h1> PLEASE LOGIN </h1>
                <div className="Login">
                    <label for="email"> Email </label>
                    <input className="formm" type="email" name="email" 
                    onChange={handleChange("email")} value={payload.email} />
                </div>
                <div className="Login">
                    <label for="password"> Password </label>
                    <input className="formm" type="password" name="password" 
                    onChange={handleChange("password")} value={payload.password} />
                </div>    
                    <button className="button" onClick={login}> Login </button>
                  
                    <Link to="/register"><center>Create new Account</center></Link>
            </form>
            
        </div>
    )
}
