import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { CookiesProvider } from "react-cookie";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
