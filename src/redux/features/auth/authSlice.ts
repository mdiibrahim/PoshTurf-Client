import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  email: string;
  role: string;
  exp: number; // Token expiration time
  iat: number; // Token issued time
}

interface AuthState {
  token: string | null;
  role: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  role: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;

      // Decode the JWT token using `jwt-decode`
      const decoded: DecodedToken = jwtDecode<DecodedToken>(token);

      state.token = token;
      state.role = decoded.role; // Store the role
      state.isAuthenticated = true;

      // Store token in localStorage
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;

      // Remove token from localStorage
      localStorage.removeItem('token');
    },
    loadUserFromToken: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded: DecodedToken = jwtDecode<DecodedToken>(token); // Decode the token again
        state.token = token;
        state.role = decoded.role; // Restore the role
        state.isAuthenticated = true;
      }
    },
  },
});

export const { setCredentials, logout, loadUserFromToken } = authSlice.actions;
export default authSlice.reducer;
