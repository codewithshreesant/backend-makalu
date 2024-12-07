
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    BookNowPackages:[{name:"shreesant"}]
}

export const packageSlice=createSlice({
    name:"package",
    initialState,
    reducers:{
        addPackages: (state, action)=>{
            console.log("add packages payload ",action.payload);
            state.BookNowPackages.push(action.payload);
        },
        getPackages:(state, action)=>{
            pass 
        },
        updatePackages:(state, action)=>{
            console.log(action.payload.id);
        },
        deletePackages:(state, action)=>{
            console.log(action.payload.id);
        }
    }
})

export const{addPackages, getPackages, updatePackages, deletePackages}=packageSlice.actions;



export default packageSlice.reducer;