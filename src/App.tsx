import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from './components/Auth.tsx';
import Login from './views/Login.tsx';
import { useAppSelector } from './hooks/hooks.ts';
import SignUp from './views/SignUp.tsx';
import Dashboard from './views/Dashboard.tsx';
import ErrorRoute from './components/ErrorRoute.tsx';

function App() {
  const userActive = useAppSelector(state=>state.userActive);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={
              <Auth isAllowed={userActive.user===""?false:true}>
                    <Dashboard />
              </Auth>}>
        </Route>
        <Route path='*' element={<ErrorRoute/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
