import { createSlice, configureStore } from '@reduxjs/toolkit'



       

const counterSlice = createSlice({
    name: 'User',
    initialState: {
        user:null
    },
    reducers: {

      createUser: (state,action) => {
       state.user = action.payload;
       
      }
    }
  })
  
  export const store = configureStore({
    reducer: counterSlice.reducer
  })
 

  export const {createUser} = counterSlice.actions

  

  

  


  
  

  