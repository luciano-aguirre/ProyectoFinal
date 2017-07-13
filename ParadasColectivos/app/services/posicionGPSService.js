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
const posicionesGPSRepository = require('../repositories/posicionesGPSRepository');
/*
export function cargarPosiciones(linea: number, next) {

    request(
        {
            method: 'GET',
            uri: 'http://api.datos.bahiablanca.gob.ar/api/v2/datastreams/PARAD-DE-COLEC/data.json/?auth_key=a049a7553f75ed50c8fab78b1685e7ac83c8d0a4&filter0=column0[==]' + linea
        }
        , function (error, response, body) {
            if (error) {
                next(error, 0);
            }
            else {
                try {
                    const dataJSON = JSON.parse(body);
                    let paradas = dataJSON['result']['fArray'];//VER COMO TIPAR EL ARRAY
                    let numeroParadas: number = 0;
                    let posLatitud: number = 6;
                    let posLongitud: number = 7;
                    while (posLatitud < paradas.length && posLongitud < paradas.length) {
                        //console.log(`Parada ${++numeroParadas}: (${paradas[posLatitud]['fStr']}, ${paradas[posLongitud]['fStr']})`);
                        //crearPosicionGPS(paradas[posLatitud]['fStr'], paradas[posLongitud]['fStr']);
                        posicionesGPSRepository.create(paradas[posLatitud]['fStr'], paradas[posLongitud]['fStr']);
                        ++numeroParadas;
                        posLatitud += 4;
                        posLongitud += 4;
                    }
                    next(null, numeroParadas);
                    //res.send(`Total paradas linea ${linea} : ${numeroParadas}`);
                } catch (e) {
                    next(null, 0);
                    //res.send('Error al parsear el JSON');
                }
            }
        });
}
*/ //funcion con callback
function cargarPosiciones(linea) {
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
                    let posicionCreada;
                    while (posLatitud < paradas.length && posLongitud < paradas.length) {
                        posicionCreada = yield posicionesGPSRepository.create(paradas[posLatitud]['fStr'], paradas[posLongitud]['fStr']);
                        ++numeroParadas;
                        if (posicionCreada != null) {
                            console.log('Parada ' + numeroParadas + ' creada');
                        }
                        posLatitud += 4;
                        posLongitud += 4;
                    }
                    console.log('Se cargaron ' + numeroParadas + ' de la linea ' + linea);
                }
                catch (e) {
                    console.log('Error al cargar las posiciones');
                    throw e;
                }
            });
        });
    });
}
exports.cargarPosiciones = cargarPosiciones;
/*
export function obtenerPosicionesGPS(next) {
    posicionesGPSRepository.getAll(function (error, res) {
        if (error) {
            next(error, null);
        }
        else {
            next(null, res);
        }
    });
}*/ //funcion con callback
function obtenerPosicionesGPS() {
    return __awaiter(this, void 0, Promise, function* () {
        //try {
        //NUNCA VA A HABER UN ERROR
        let posicionesGPS = yield posicionesGPSRepository.getAll();
        if (posicionesGPS != null) {
            console.log('Se obtuvieron las posiciones desde el servicio');
        }
        else {
            console.log('Posiciones null en el controlador');
        }
        return posicionesGPS;
        //  } catch (error) {
        //     console.log('Error al obtener las paradas desde el servicio');
        //     return null;
        // }
    });
}
exports.obtenerPosicionesGPS = obtenerPosicionesGPS;
/*
export function eliminarPosicionesGPS(next) {
    posicionesGPSRepository.deleteAll(function (error) {
        if (error) {
            next(error);
        }
        else {
            next(null);
        }
    });
}*/ //funcion con callback
function eliminarPosicionesGPS() {
    return __awaiter(this, void 0, Promise, function* () {
        //try {NUNCA VA A HABER UN ERROR
        return yield posicionesGPSRepository.deleteAll();
        //} catch (error) {
        //   return false;
        //}
    });
}
exports.eliminarPosicionesGPS = eliminarPosicionesGPS;
//# sourceMappingURL=posicionGPSService.js.map