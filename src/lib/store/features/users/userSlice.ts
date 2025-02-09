import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  user:{} | null
  isAuthenticated: boolean
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  }
})

const userReducer= userSlice.reducer
export {userReducer}
