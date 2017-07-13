"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const posicionGPSService = require('../services/posicionGPSService');
/*
export function obtenerPosicionGPS(req: express.Request, res: express.Response) {

    let posicionGPSID: string = req.params.id;
    let posicionGPS: IPosicionGPS = posicionesGPSRepository.obtenerPosicionGPS(posicionGPSID);

    if (posicionGPS == null) {
        res.send('No se pudo recuperar la posicion especificada');
    } else {
        res.send('Posicion GPS ID: ' + posicionGPS.id + ' (' + posicionGPS.latitud + ',' + posicionGPS.longitud + ')');
    }
}
*/
/*
export function obtenerPosicionesGPS(req: express.Request, res: express.Response) {

    posicionGPSService.obtenerPosicionesGPS(function (error, posicionesGPS) {
        if (error) {
            res.status(400).send('Error al obtener posiciones');
        }
        else {
            res.set('Content-Type', 'application/json');
            res.status(200).send(posicionesGPS);
        }
    });
}
*/ //funcion con callback
function obtenerPosicionesGPS(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //try {NUNCA VA A HABER UN ERROR
        let posicionesGPS = yield posicionGPSService.obtenerPosicionesGPS();
        if (posicionesGPS != null) {
            //res.set('Content-Type', 'application/json');
            res.status(200).json(posicionesGPS);
        }
        else {
            res.status(400).send('Posiciones null en el controlador');
        }
        //} catch (error) {
        //    res.status(400).send('Error al obtener las posiciones desde el controlador');
        //}
    });
}
exports.obtenerPosicionesGPS = obtenerPosicionesGPS;
/*
export function cargarPosicionesGPS(req: express.Request, res: express.Response) {

    let linea: number = req.params.linea;
    posicionGPSService.cargarPosiciones(linea, function (error, numeroParadas) {
        if (error) {
            res.status(400).send('Error al cargar las posiciones de la linea ' + linea);
        }
        else {
            res.status(200).send('Se cargaron ' + numeroParadas + ' paradas de la linea ' + linea);
        }
    });
}*/ //funcion con callback
function cargarPosicionesGPS(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let linea = req.params.linea;
        try {
            yield posicionGPSService.cargarPosiciones(linea);
            res.status(200).send('Se cargaron las paradas de la linea ' + linea);
        }
        catch (error) {
            res.status(400).send('Error al cargar las posiciones de la linea ' + linea);
        }
    });
}
exports.cargarPosicionesGPS = cargarPosicionesGPS;
/*
export function eliminarPosicionesGPS(req: express.Request, res: express.Response) {

    posicionGPSService.eliminarPosicionesGPS(function (error) {
        if (error) {
            res.status(400).send('Error al eliminar la BD');
        }
        else {
            res.status(200).send('Se borro la BD');
        }

    });
    //https://nodejs.org/api/http.html#http_class_http_incomingmessage
    //https://github.com/request/request#requestoptions-callback
    //https://github.com/francotripi/Proyecto-Final-IAW-2015-Colectivos/blob/master/Cliente/modules/map.js
}*/ //funcion con callback
function eliminarPosicionesGPS(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // try {NUNCA VA A HABER UN ERROR
        let resultado = yield posicionGPSService.eliminarPosicionesGPS();
        if (resultado) {
            res.status(200).send('Se borro la BD');
        }
        else {
            res.status(400).send('Eliminar la BD no dio error, dio falso');
        }
        //} catch (error) {
        //    res.status(400).send('Error al eliminar la BD');
        //}
    });
}
exports.eliminarPosicionesGPS = eliminarPosicionesGPS;
//# sourceMappingURL=posicionGPSController.js.map