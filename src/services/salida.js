import http from '../http-common';

const getAll = () => {
    return http.get("/salida");
};

const create = data => {
    return http.post("/salida", data);
};

const SalidaService = {
    getAll,
    create
}

export default SalidaService;