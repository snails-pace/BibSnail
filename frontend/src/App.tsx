import BookDetail from './components/BookDetail';
import BookEdit from './components/BookEdit';
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 id='banner'>BibSnail</h1>
        <nav>
          <ul className='menu'>
            <li>All Books</li>
            <li>My Books</li>
            <li>Account</li>
          </ul>
        </nav>  
      </header>
      <main>
        <Routes>
          <Route path="*" element={<BookList />} />
          <Route path="/book/:pk" element={<BookDetail />} />
          <Route path="/book/:pk/edit" element={<BookEdit />} />
        </Routes>
      </main>
        

      
    </div>
  );
}

export default App;
