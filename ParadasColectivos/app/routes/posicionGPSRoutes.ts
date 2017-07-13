/*
 * GET users listing.
 */
import express = require('express');
import controller = require("../controllers/posicionGPSController");
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

export function obtenerPosicionesGPS(req: express.Request, res: express.Response) {
    controller.obtenerPosicionesGPS(req, res);
};

export function cargarPosicionesGPS(req: express.Request, res: express.Response) {
    controller.cargarPosicionesGPS(req, res);
};

export function eliminarPosicionesGPS(req: express.Request, res: express.Response) {
    controller.eliminarPosicionesGPS(req, res);
};
