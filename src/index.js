import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss';

//pages
import Home from './pages/home/Home';
import UsuarioList from './pages/usuario/UsuarioList';
import UsuarioForm from './pages/usuario/UsuarioForm';
import UsuarioEdit from './pages/usuario/UsuarioEdit';
import Login from './pages/login/Login';
import VerificarUsuario from './components/VerificarUsuario';

import UserProvider from './context/UserProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));

root.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>

                {/*ACONTINUACION ESTABLECEMOS LAS RUTAS DE NUESTRO SISTEMA*/}

                {/*ruta individual sin usar una como base*/}
                <Route index path='/Login' element={<Login />} />

                {/*Permite anidar rutas en base a una*/}
                <Route path='/' element={<App />}>

                    <Route index element={<Home />} />
                    <Route path='home' element={<VerificarUsuario> <Home /> </VerificarUsuario>} />
                    <Route path='usuario' element={<VerificarUsuario> <UsuarioList /> </VerificarUsuario>} />
                    <Route path='usuario/create' element={<VerificarUsuario> <UsuarioForm /> </VerificarUsuario>} />
                    <Route path='usuario/edit/:id' element={<VerificarUsuario> <UsuarioEdit /> </VerificarUsuario>} />

                </Route>
                
            </Routes>

        </UserProvider>
       

    </BrowserRouter>
);

