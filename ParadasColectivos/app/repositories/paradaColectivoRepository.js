"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const paradaColectivoModel = require('../models/paradaColectivoModel');
var repository = paradaColectivoModel.repository;
function create(linea, posicionGPS, sentido) {
    return __awaiter(this, void 0, Promise, function* () {
        //CONTROLAR QUE SI EXISTE NO SE CREA DE VUELTAAAAAAAA
        //AGREGAR A  LA POSICION CUANTAS PARADAS LA REFERENCIAN
        return yield repository.create({ linea: linea, posicion_id: posicionGPS._id, sentido: sentido });
        //console.log('No se pudo crear una parada de colectivo en el repositorio');
    });
}
exports.create = create;
function obtenerParadaColectivo(_id) {
    let nuevaParada;
    repository.findById(_id, (error, parada) => {
        if (error) {
            console.log('Error al recuperar una posicion por su id');
        }
        nuevaParada = parada;
    });
    return nuevaParada;
}
exports.obtenerParadaColectivo = obtenerParadaColectivo;
function getAll() {
    return __awaiter(this, void 0, Promise, function* () {
        return yield repository.find({}).populate({
            path: 'posicion_id',
            model: 'PosicionGPS'
        }).exec();
        //console.log('Se obtuvieron las paradas de colectivo desde el repositorio');
        //console.log('Error al obtener las paradas desde el repositorio');
    });
}
exports.getAll = getAll;
function deleteAll() {
    return __awaiter(this, void 0, Promise, function* () {
        yield repository.remove({}).exec();
        return true;
    });
}
exports.deleteAll = deleteAll;
//# sourceMappingURL=paradaColectivoRepository.js.map