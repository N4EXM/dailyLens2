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

  const [warningBox, setWarningBox] = useState(false)

  return (
    <>
      <div className='w-full h-full min-h-screen font-poppins bg-background dark:bg-darkBackground text-text dark:text-darkText relative '>
        <span className='z-10 w-screen h-56 bg-primary dark:bg-darkPrimary absolute top-0 left-0 '></span>

        {/* logout warning box */}
        <div className={`${warningBox ? "flex" : "hidden"} border border-text/20 dark:border-darkText/20 fixed w-4/5 h-32 z-40 bg-background flex-col rounded-sm dark:bg-darkBackground flex justify-between left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-none`}>
          
          <div className='w-full h-full gap-1 flex p-4 flex-col items-center justify-center'>
            <h1 className='text-sm font-medium h-fit text-center'>Are you sure you want to Logout</h1>
          </div>

          <div className='w-full h-full flex items-end p-2 flex-row gap-2'>
            <button onClick={() => setWarningBox(false)} className='w-full p-2 bg-secBackground font-medium dark:bg-secBackground/10 h-fit border border-text/20 dark:border-darkText/20 text-sm rounded-sm'>
              Cancel
            </button>
            <button onClick={() => handleNavigate("Login")} className='bg-rose-600 border border-rose-600 w-full h-fit text-darkText font-medium rounded-sm p-2 text-sm'> 
              Exit
            </button>
          </div>

        </div>

        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route 
                path='/' 
                element={<Home/>}
              />
              <Route 
                path='/Search' 
                element={<Search/>}
              />
              <Route
               path='/Settings' 
               element={<Settings/>}
              />
              <Route
               path='/Bookmarked' 
               element={<Bookmarked/>}
              />
              <Route
               path='/News' 
               element={<News/>}
              />
              <Route
               path='/CreateArticle' 
               element={<CreateArticle/>}
              />
              <Route
               path='/login' 
               element={<Login/>}
              />
              <Route
               path='/SignUp' 
               element={<SignUp/>}
              />
              <Route
               path='/UserEdit' 
               element={<UserEdit/>}
              />
              <Route
               path='/Article/:id' 
               element={<Article/>}
              />
            </Routes>
            <Sidebar/>
          </AuthProvider>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
