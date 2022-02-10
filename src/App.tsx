import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';

import Top from './pages/Top';
import SearchResult from './pages/SearchResult';
import MyPage from './pages/MyPage';
import Form from './pages/Form';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ComponentTest from './pages/ComponentTest';
import Recipe from './pages/Recipe';
//
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Top />} />
        {/* <Route path='/results/:category' element={<SearchResult />} /> */}
        <Route path='/results/:id' element={<Recipe />} />{' '}
        <Route path='mypage' element={<MyPage />} />
        <Route path='form' element={<Form />} />
        {/* <Route path='signUp' element={<SignUp />} /> */}
        <Route path='/test' element={<ComponentTest />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
