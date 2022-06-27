import { BrowserRouter, Routes, Route} from "react-router-dom";

import MainPage from './main-page/main-page';
import LoginPage from './main-page/login-page';
import RegisterPage from './main-page/register-page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
