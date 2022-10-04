import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/home/Home';
import UsuarioList from './pages/usuario/UsuarioList';
import UsuarioForm from './pages/usuario/UsuarioForm';

function App() {
  return (
    <Router>

      <div className='flex'>
        <Sidebar />
        <div className='content w-100'>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/usuarios" element={<UsuarioList />} />
            <Route path="/usuarios/create" element={<UsuarioForm />} />
            <Route path="/usuarios/edit/:id" element={<UsuarioForm />} />
          </Routes>
        </div>

      </div>
    </Router>
  );

}

export default App;
