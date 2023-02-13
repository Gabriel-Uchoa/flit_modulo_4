import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import LendBook from './pages/LendBook/LendBook';


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/LendBook' element={<LendBook />} />
        {/* <Route path='/' element={<Form />} />  */}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
