import './App.css';
import QuoteVoting from './components/Templates/QuoteVoting';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link to='/votation'>Votação</Link>
          </div>
          <Routes>
            <Route path='/votation' element={<QuoteVoting />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
