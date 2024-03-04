import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path="*" element={<BookList />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
