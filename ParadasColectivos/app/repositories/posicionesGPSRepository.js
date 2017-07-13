"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const posicionGPSModel = require('../models/posicionGPSModel');
var repository = posicionGPSModel.repository;
function create(latitud, longitud) {
    return __awaiter(this, void 0, Promise, function* () {
        try {
            return yield repository.create({ latitud: latitud, longitud: longitud });
        }
        catch (error) {
            console.log('No se pudo crear una posicion en el repositorio');
            return null;
        }
    });
}
exports.create = create;
function obtenerPosicionGPS(_id) {
    let nuevaPosicionGPS;
    repository.findById(_id, (error, posicionGPS) => {
        if (error) {
            console.log('Error al recuperar una posicion por su id');
        }
        nuevaPosicionGPS = posicionGPS;
    });
    return nuevaPosicionGPS;
}
exports.obtenerPosicionGPS = obtenerPosicionGPS;
/*
export function getAll(next) {

    
    repository.find({}, (error, posicionesGPS) => {
        if (error) {
            console.log('Error al recuperar las posiciones');
            next(error, null);
        }
        else {
            console.log('Paradas ' + posicionesGPS.length);
            next(null, posicionesGPS);
        }
    });
}*/ //funcion con callback
function getAll() {
    return __awaiter(this, void 0, Promise, function* () {
        try {
            let posicionesGPS = yield repository.find({}).exec();
            console.log('Se obtuvieron las posiciones desde el repositorio');
            return posicionesGPS;
        }
        catch (error) {
            console.log('Error al obtener las paradas desde el repositorio');
            return null;
        }
    });
}
exports.getAll = getAll;
/*
export function deleteAll(next) {
    
    repository.remove({}, (error) => {
        next(error);
    });
}*/ //funcion con callback
function deleteAll() {
    return __awaiter(this, void 0, Promise, function* () {
        try {
            yield repository.remove({}).exec();
            return true;
        }
        catch (error) {
            return false;
        }
    });
}
exports.deleteAll = deleteAll;
//# sourceMappingURL=posicionesGPSRepository.js.map