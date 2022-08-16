import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {UserContext} from "../App";

const Logout = () => {
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/logout', {
            method:"POST",
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            credentials: "include"
        }).then((res)=>{
            dispatch({type:'USER', payload:false}) 
            navigate.push('/login', {replace: true});
            if(res.status!=200)
            {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
  return (
    <>
    <h1>LOGOUT PAGE</h1>
    </>
  )
}

export default Logout;