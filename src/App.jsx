import { RouterProvider } from "react-router-dom";
import AuthProvider from "@contexts/auth-provider";
import router from "@config/router";

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App