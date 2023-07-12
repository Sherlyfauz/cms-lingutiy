import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login.js';
import Quiz from './pages/Quiz.js';
import AddQuiz from './pages/AddQuiz.js';
import User from './pages/User.js';
import EditUser from './pages/EditUser.js';
import AddUser from './pages/AddUser.js';
import HistoryUser from './pages/HistoryUser.js';
import EditAdmin from './pages/EditAdmin.js';
import AddAdmin from './pages/AddAdmin.js';
import Pronounce from './pages/Pronounce.js';
import AddPronounce from './pages/AddPronounce.js';
import Dashboard from './pages/Dashboard.js';
import Article from './pages/Article.js';
import AddArticle from './pages/AddArticle.js';
import EditArticle from './pages/EditArticle.js';


import './style.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pronounce" element={<Pronounce />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/user" element={<User />} />
        <Route path="/article" element={<Article />} />
        <Route path="/user/edituser" element={<EditUser />} />
        <Route path="/user/adduser" element={<AddUser />} />
        <Route path="/user/addadmin" element={<AddAdmin />} />
        <Route path="/user/editadmin" element={<EditAdmin />} />
        <Route path="/user/historyuser" element={<HistoryUser />} />
        <Route path="/quiz/addquiz" element={<AddQuiz />} />
        <Route path="/pronounce/addpronounce" element={<AddPronounce />} />
        <Route path="/article/addarticle" element={<AddArticle />} />
        <Route path="/article/editarticle" element={<EditArticle />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
