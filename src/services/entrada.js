import http from '../http-common';

const getAll = () => {
  return http.get("/entrada");
};

const create = data => {
    return http.post("/entrada", data);
  };

const EntradaService = {
    getAll,
    create
  };
  
  export default EntradaService;