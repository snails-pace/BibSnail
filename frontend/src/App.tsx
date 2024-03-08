import BookDetail from './components/BookDetail';
import BookEdit from './components/BookEdit';
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path="*" element={<BookList />} />
          <Route path="/book/:pk" element={<BookDetail />} />
          <Route path="/book/:pk/edit" element={<BookEdit />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
