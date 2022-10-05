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

const update = (id, data) => {
  return http.put(`/usuarios/${id}`, data);
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
  update,
  remove
  //findByTitle
};

export default UsuarioService;