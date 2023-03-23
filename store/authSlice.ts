import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
    
    
}


//Sign up logic
export const createUser = createAsyncThunk('createUser', async(body) => {
    

    const res = await axios.post('http://192.168.80.115:4000/createUser', body, {
       headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
       },
         
   })
    console.log(res.status)

    return await res.data;
})

//Login logic
export const loginUser = createAsyncThunk('loginUser', async({email, password}) => {
    

     const res = await axios.post('http://192.168.80.115:4000/login', {
        name: email,
        password
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
          
    })
     console.log(res.data)

     return await res.data;
})


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
          addToken: (state, action) => {
           state.token = AsyncStorage.getItem('userToken')
          },
          addUser: (state, action) => {
           state.user = AsyncStorage.getItem('user')
          },
          logoutUser: (state, action) => {
           state.token = null;
           AsyncStorage.multiRemove(['userToken', 'user'])
          }
    }, 
    extraReducers: {
        [loginUser.pending]: (state, action)=> {
            state.loading = true;
        }, 
        [loginUser.fulfilled]: (state, {payload:{error,msg,token,user}})=> {
            state.loading = false;
            
            if(error){
                state.error = error;
            } else {
                
                state.msg = msg;
                state.token = token;
                state.user = user;

                AsyncStorage.setItem('userToken', token);
                AsyncStorage.setItem('user', JSON.stringify(user));
            }
        },
        [createUser.rejected]: (state, action)=> {
            state.loading = true;

        },
        [createUser.fulfilled]: (state, {payload:{error,msg}})=> {
            state.loading = false;

            if(error){
                state.error = error;
            } else {
                state.msg = msg;
            }
        },
        [createUser.rejected]: (state, action)=> {
            state.loading = false;
        },      
    }

})






    







export const { addToken, addUser, logoutUser} = authSlice.actions;

export default authSlice.reducer;