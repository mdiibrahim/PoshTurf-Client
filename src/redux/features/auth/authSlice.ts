import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  email: string;
  _id: string;
  role: string;
  exp: number;
  iat: number;
}

interface AuthState {
  token: string | null;
  role: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  role: null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;

      const decoded: DecodedToken = jwtDecode<DecodedToken>(token);

      state.token = token;
      state.role = decoded.role;
      state.isAuthenticated = true;

      localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },
    loadUserFromToken: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
        state.token = token;
        state.role = decoded.role;
        state.isAuthenticated = true;
      }
    },
  },
});

export const { setCredentials, logout, loadUserFromToken } = authSlice.actions;
export default authSlice.reducer;
