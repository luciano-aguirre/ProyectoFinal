"use strict";
const controller = require("../controllers/paradaColectivoController");
function obtenerParadasColectivoS(req, res) {
    controller.obtenerParadasColectivo(req, res);
}
exports.obtenerParadasColectivoS = obtenerParadasColectivoS;
;
function cargarParadasColectivo(req, res) {
    controller.cargarParadasColectivo(req, res);
}
exports.cargarParadasColectivo = cargarParadasColectivo;
;
function eliminarParadasColectivo(req, res) {
    controller.eliminarParadasColectivo(req, res);
}
exports.eliminarParadasColectivo = eliminarParadasColectivo;
;
//# sourceMappingURL=paradaColectivoRoutes.js.map