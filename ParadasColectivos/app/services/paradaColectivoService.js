"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const request = require('request');
const posicionesGPSService = require('./posicionGPSService');
const paradaColectivoRepository = require('../repositories/paradaColectivoRepository');
function cargarParadasColectivo(linea) {
    return __awaiter(this, void 0, void 0, function* () {
        request({
            method: 'GET',
            uri: 'http://api.datos.bahiablanca.gob.ar/api/v2/datastreams/PARAD-DE-COLEC/data.json/?auth_key=a049a7553f75ed50c8fab78b1685e7ac83c8d0a4&filter0=column0[==]' + linea
        }, function (error, response, body) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const dataJSON = JSON.parse(body);
                    let paradas = dataJSON['result']['fArray']; //VER COMO TIPAR EL ARRAY
                    let numeroParadas = 0;
                    let posLatitud = 6;
                    let posLongitud = 7;
                    let posSentido = 9;
                    let nuevaPosicionGPS;
                    let nuevaParadaColectivo;
                    while (posLatitud < paradas.length && posLongitud < paradas.length && posSentido < paradas.length) {
                        nuevaPosicionGPS = yield posicionesGPSService.crearPosicionGPS(paradas[posLatitud]['fStr'], paradas[posLongitud]['fStr']);
                        ++numeroParadas;
                        //VER POSIBLE ERROR SI PASARA
                        nuevaParadaColectivo = yield paradaColectivoRepository.create(linea, nuevaPosicionGPS, paradas[posSentido]['fStr']);
                        if (nuevaParadaColectivo != null) {
                            console.log('Parada ' + numeroParadas + ' creada');
                        }
                        posLatitud += 4;
                        posLongitud += 4;
                        posSentido += 4;
                    }
                    console.log('Se cargaron ' + numeroParadas + ' de la linea ' + linea);
                }
                catch (e) {
                    console.log('Error al cargar las paradas');
                    throw e;
                }
            });
        });
    });
}
exports.cargarParadasColectivo = cargarParadasColectivo;
function obtenerParadasColectivo() {
    return __awaiter(this, void 0, Promise, function* () {
        try {
            let paradas = yield paradaColectivoRepository.getAll();
            console.log('Se obtuvieron las posiciones desde el servicio');
            return paradas;
        }
        catch (error) {
            console.log('Error al obtener las paradas desde el servicio');
            return null;
        }
    });
}
exports.obtenerParadasColectivo = obtenerParadasColectivo;
function eliminarParadasColectivos() {
    return __awaiter(this, void 0, Promise, function* () {
        try {
            yield paradaColectivoRepository.deleteAll();
            console.log('Se eliminaron las paradas de colectivo del repositorio');
            return true;
        }
        catch (error) {
            console.log('No se pudieron eliminar las paradas de colectivo del repositorio');
            return false;
        }
    });
}
exports.eliminarParadasColectivos = eliminarParadasColectivos;
//# sourceMappingURL=paradaColectivoService.js.map