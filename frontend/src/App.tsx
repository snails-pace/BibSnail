import BookDetail from './components/BookDetail';
import BookEdit from './components/BookEdit';
import BookList from './components/BookList';
import { Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div id='banner'>
          <h1>BibSnail</h1>
        </div>
        <nav>
          <ul className='menu'>
            <li><Link to={`*`} >All Books</Link></li>
            <li><Link to={`*`} >My Books</Link></li>
            <li><Link to={`*`} >Account</Link></li>
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
