import { Paper, Box, CardActions, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextInput from '../Input/TextInput';
import { userData } from '../../Utilities/siteData';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Utilities/authProvider";

const LoginPage = () => {
    const navigate = useNavigate()
    //auth status and set auth status from Auth Context provider /Utilities/authProvider
    const { isLoggedIn, actions} = useAuth();
    //form state
    const [loginForm, setLoginForm] = useState({email: '', password: ''})
    const [isValid, setIsValid] = useState(false)
    

    //Handle email change
    const handleEmailChange = (e) => {
        setLoginForm({...loginForm, email: e.target.value})
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isEmailValid = emailRegex.test(e.target.value)
        console.log("IS EMAIL VALID: ", isEmailValid);
        console.log("IS VALID: ", isValid);

        
        setIsValid(isEmailValid)
    }

    //Handle password change
    const handlePasswordChange = (e) => {
        // console.log("PASSWORD TYPED: ", e.target.value);
        setLoginForm({...loginForm, password: e.target.value})
    }


    //handle login action
    const handleLogin = (e) => {
        //find user with email from the input
        const userExists = userData.find(user => user.email === loginForm.email)
        //if the user exists then check to see if the password from the input matches
        //if matches then redirect to user favorite page
        if(userExists){
            if (userExists.password === loginForm.password) {
                actions.logUserIn()
                return navigate('/user-favorited-page')
            } else {
                return console.log("INCORRECT CREDENTIALS")
            } 
        }
        //if there is no users that were found, then return
        console.log("NO USER FOUND");
        
    }

    //Login Form UI
     return (
        <Box height="70vh" display="flex" justifyContent="center" alignItems={'center'}>
            <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
                <Typography textAlign={'center'} variant={"h5"} marginY={2}>Sign In</Typography>
                <TextInput textLabel="Email" type="email" onChange={handleEmailChange} error={!isValid}/>
                <TextInput textLabel="Password" type="password" onChange={handlePasswordChange}/>
                <CardActions display='flex'>
                    <Button fullWidth onClick={handleLogin}>Login</Button>
                    <Button fullWidth>Sign up instead</Button>
                </CardActions>
            </Paper>
        </Box>
       
    )
}

export default LoginPage


