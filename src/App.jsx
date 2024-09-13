import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
         <Route path='/' element={<Home/>} />
        { /* <Route path='/about' element={} />
        <Route path='/rick-and-morty' element={} /> */}
      </Routes>
      <Footer />
    </>
  )
}