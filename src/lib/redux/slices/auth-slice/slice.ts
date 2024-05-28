import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, IUser } from '@/types';

const initialState: AuthState = {
  auth: false,
  loginerror: '',
  user: null,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }: PayloadAction<IUser>) => {
      state.auth = true;
      state.loginerror = '';
      state.user = payload;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
