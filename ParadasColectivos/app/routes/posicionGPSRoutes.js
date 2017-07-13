"use strict";
const controller = require("../controllers/posicionGPSController");
/*
export function list(req: express.Request, res: express.Response) {
    res.send("respond with a resource");
};
*/
/*
export function create(req: express.Request, res: express.Response) {
    controller.createPosicionGPS(req, res);
};
*/
/*
export function read(req: express.Request, res: express.Response) {
    controller.obtenerPosicionGPS(req, res);
};*/
function obtenerPosicionesGPS(req, res) {
    controller.obtenerPosicionesGPS(req, res);
}
exports.obtenerPosicionesGPS = obtenerPosicionesGPS;
;
function cargarPosicionesGPS(req, res) {
    controller.cargarPosicionesGPS(req, res);
}
exports.cargarPosicionesGPS = cargarPosicionesGPS;
;
function eliminarPosicionesGPS(req, res) {
    controller.eliminarPosicionesGPS(req, res);
}
exports.eliminarPosicionesGPS = eliminarPosicionesGPS;
;
//# sourceMappingURL=posicionGPSRoutes.js.map