import { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { loadUserFromToken } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();

  // Load user token and role when the app initializes or reloads
  useEffect(() => {
    dispatch(loadUserFromToken());
  }, [dispatch]);
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
