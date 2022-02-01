import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';

import Top from './pages/Top';
import SearchResult from './pages/SearchResult';
import MyPage from './pages/MyPage';
import Form from './pages/Form';
import SignUp from './pages/SignUp';
import ComponentTest from './pages/ComponentTest';
import Recipe from './pages/Recipe';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Top />} />
        {/* <Route path='/results/:category' element={<SearchResult />} /> */}
        <Route path='/results/:id' element={<Recipe />} />{' '}
        <Route path='mypage' element={<MyPage />} />
        <Route path='form' element={<Form />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='/test' element={<ComponentTest />} />
      </Routes>
    </div>
  );
}

export default App;
