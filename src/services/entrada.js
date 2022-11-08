import http from '../http-common';

const getAll = () => {
  return http.get("/entrada");
};

const create = data => {
    return http.post("/entrada", data);
};

const get = id => {
  return http.get(`/entrada/${id}`);
};

const EntradaService = {
    getAll,
    create,
    get
  };
  
  export default EntradaService;