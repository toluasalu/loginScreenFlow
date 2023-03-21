import { createSlice, createSelector  } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
          addUser: (state, action) => {
               const individual =  action.payload.name
          }
    }

})
