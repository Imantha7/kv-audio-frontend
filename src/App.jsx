import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/admin/adminPage'
import HomePge from './pages/home/homePage'
import Testing from './components/testing'
import LoginPage from './pages/login/login'
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right"/>
      <Routes path="/*">
        <Route path='/' element={<HomePge/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/testing' element={<Testing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
