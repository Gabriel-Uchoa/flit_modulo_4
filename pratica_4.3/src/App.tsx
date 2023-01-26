import Home from './components/Templates/HomeTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/FormProduct/Form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/AddProduct' element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
