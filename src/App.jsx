import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import About from './pages/About/index'
import Api from './pages/Api/index'
import Error from './components/Error'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={ <About/> } />
         <Route path='/api' element={<Api/>} />
         <Route path='/error' element={<Error/>} />
      </Routes>
      <Footer />
    </>
  )
}