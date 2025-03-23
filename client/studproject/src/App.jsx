import './App.css'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import { ToastContainer, } from 'react-toastify';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
      </Routes>

      <ToastContainer/>
    </>
  )
}

export default App
