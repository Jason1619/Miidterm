import React, {useState} from "react";
import {Link} from "react-router-dom"

import firebase from "../utils/firebase";

export default function Register () {
    const [payload, setPayload] = useState({ 
        email:"", 
        password:"",
        confirmpass:""
    });



    const handleChange =(prop) => (e) => {
        setPayload({ ...payload, [prop]: e.target.value});
    };

    const register = (e) => {
        e.preventDefault(); //para hindi mag re-load yung page

        if(!payload.email || !payload.password || !payload.confirmPass){
            alert("Please complete all fields")
        }
        else if (payload.password !== payload.confirmPass){
            alert("Passwords do not match");
        }
            else if (payload.password.lenght<5){
                alert("Password should be at least 6 characters");
        }
        else{
             //backend part
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email,payload.password)
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
            <h1> CREATE NEW ACCOUNT </h1>
                <div className="Login">
                    <label for="email"> Email </label>
                    <input className="formm" type="email" name="email" 
                    onChange={handleChange("email")} value={payload.email} />
                </div>
                <div className="Login">
                    <label for="password"> Password </label>
                    <input className="formm" type="password" name="password" 
                    onChange={handleChange("password")} value={payload.password}
                />

                    <label for="confirmPass"> Confirm Password </label>
                    <input 
                    className="formm" 
                    type="password" 
                    name="confirmPass" 
                    onChange={handleChange("confirmPass")} 
                    value={payload.confirmPass} />
                </div>    
                    <button className="button" onClick={register}> Register </button>
                    <Link to="/login"><center>Login</center></Link>
            </form>
            
        </div>
    )
}
