import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/book/:pk" element={<BookDetail />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
