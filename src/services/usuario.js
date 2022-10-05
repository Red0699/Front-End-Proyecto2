import http from '../http-common';

const getAll = () => {
  return http.get("/usuarios");
};

const get = id => {
  return http.get(`/usuarios/${id}`);
};

const create = data => {
  return http.post("/usuarios", data);
};

export const updateUsuario = async (id, data) => {
  return await fetch(`http://localhost:5000/api/usuarios/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "primerNombre": String(data.primerNombre).trim(),
          "segundoNombre": String(data.segundoNombre).trim(),
          "apellidoPaterno": String(data.apellidoPaterno).trim(),
          "apellidoMaterno": String(data.apellidoMaterno).trim(),
          "telefono": String(data.telefono).trim(),
          "correo": String(data.correo).trim(),
          "contraseña": String(data.contraseña).trim(),
          "idRol": parseInt(data.idRol)
      })
  });
};

const remove = id => {
  return http.delete(`/usuarios/${id}`);
};

/*
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};
*/


const UsuarioService = {
  getAll,
  get,
  create,
  updateUsuario,
  remove
  //findByTitle
};

export default UsuarioService;