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

import ProveedorList from './pages/proveedor/ProveedorList';
import ProveedorForm from './pages/proveedor/ProveedorForm';
import ProveedorEdit from './pages/proveedor/ProveedorEdit';

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

                    <Route path='proveedor' element={<VerificarUsuario> <ProveedorList /> </VerificarUsuario>} />
                    <Route path='proveedor/create' element={<VerificarUsuario> <ProveedorForm /> </VerificarUsuario>} />
                    <Route path='proveedor/edit/:id' element={<VerificarUsuario> <ProveedorEdit /> </VerificarUsuario>} />
                </Route>
                
            </Routes>

        </UserProvider>
       

    </BrowserRouter>
);

