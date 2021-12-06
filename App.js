
import './App.css';
import firebase from "./utils/firebase";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import React, {useState, useEffect} from "react"
/** PAGES */
//import Home from "./pages/Home";
import Firstpage from "./pages/Firstpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Link} from "react-router-dom";
import StudentEvaluation from "./pages/StudentEvaluation";

import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";


function App() {

  const [state, setState]=useState({
    isAuth: false,
    isLoading: true
  });
  
  useEffect (() => {
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        //user signed in
        setState({isAuth:true, isLoading: false})
      }
      else{
        //no user signed in
        setState({isAuth:false, isLoading: false})
      }
    });
  
  },[])
  
  if (state.isLoading){
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Switch>
      <div style={{
      backgroundColor: '#131414',
            height: '100vh'
    }}>
      
      <Firstpage />
    </div>
        <Route path="/" exact> 
          <Redirect to="/Firstpage" />
        </Route>
         
        <PublicRoute component={Login} 
        isAuth={state.isAuth} restricted= {true}  
        path="/login" exact />

        <PublicRoute component={Register} 
        isAuth={state.isAuth}  restricted= {true} 
        path="/register" exact />

      <PublicRoute component={StudentEvaluation}   
        isAuth={state.isAuth}  restricted= {true} 
        path="/StudentEvaluation" exact />
        
        <PrivateRoute component={Firstpage} isAuth={state.isAuth} path="/Firstpage" exact/>
        
      </Switch>
    </Router>
   
 /*bibigyan ko po ng 100 points si Jason Mark at Arjohn dahil kaming tatlo lng po ang nagtulungan sa code,
 bibigyan ko namn po ng 50 points si iris dahil po wala namn po siya nai ambag pero tinry naman daw po niya
 bibigyan ko namn po ng 50 si jampong dahil wala po syang naimbag sa code*/
  );
}

export default App;
