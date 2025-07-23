import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search' 
import News from './pages/News'
import Settings from './pages/Settings'
import Bookmarked from './pages/Bookmarked'
import Navbar from './components/generalComponents/Navbar';
import CreateArticle from './pages/CreateArticle';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserEdit from './pages/UserEdit';
import Sidebar from './components/generalComponents/Sidebar';
import Article from './pages/Article'
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <>
      <div className='w-full h-full min-h-screen font-poppins bg-background dark:bg-darkBackground text-text dark:text-darkText relative '>
        <span className='z-10 w-screen h-56 bg-primary dark:bg-darkPrimary absolute top-0 left-0 '></span>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Search' element={<Search/>}></Route>
              <Route path='/Settings' element={<Settings/>}></Route>
              <Route path='/Bookmarked' element={<Bookmarked/>}></Route>
              <Route path='/News' element={<News/>}></Route>
              <Route path='/CreateArticle' element={<CreateArticle/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/SignUp' element={<SignUp/>}></Route>
              <Route path='/UserEdit' element={<UserEdit/>}></Route>
              <Route path='/Article/:id' element={<Article/>}></Route>
            </Routes>
            <Sidebar/>
          </AuthProvider>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
