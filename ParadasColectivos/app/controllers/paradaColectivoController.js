"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const paradaColectivoService = require('../services/paradaColectivoService');
function obtenerParadasColectivo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let paradas = yield paradaColectivoService.obtenerParadasColectivo();
        if (paradas != null) {
            res.status(200).json(paradas);
        }
        else {
            res.status(400).send('Error al obtener las paradas en el controlador');
        }
    });
}
exports.obtenerParadasColectivo = obtenerParadasColectivo;
function cargarParadasColectivo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let linea = req.params.linea;
        try {
            yield paradaColectivoService.cargarParadasColectivo(linea);
            res.status(200).send('Se cargaron las paradas de la linea ' + linea);
        }
        catch (error) {
            res.status(400).send('Error al cargar las paradas de la linea ' + linea);
        }
    });
}
exports.cargarParadasColectivo = cargarParadasColectivo;
function eliminarParadasColectivo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let resultado = yield paradaColectivoService.eliminarParadasColectivos();
        if (resultado) {
            res.status(200).send('Se eliminaron las paradas de la BD');
        }
        else {
            res.status(400).send('No se eliminaron las paradas de la BD');
        }
    });
}
exports.eliminarParadasColectivo = eliminarParadasColectivo;
//# sourceMappingURL=paradaColectivoController.js.map