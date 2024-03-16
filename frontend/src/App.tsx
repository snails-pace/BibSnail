import BookDetail from './components/BookDetail';
import BookEdit from './components/BookEdit';
import BookList from './components/BookList';
import { Route, Routes } from 'react-router-dom';
import banner from './static/img/english-library2.jpg';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div id='banner'>
          <h1>BibSnail</h1>
        </div>
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
