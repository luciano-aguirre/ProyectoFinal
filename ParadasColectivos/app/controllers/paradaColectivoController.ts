import express = require('express');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');
import posicionGPSModel = require('../models/posicionGPSModel');
import paradaColectivoModel = require('../models/paradaColectivoModel');
import request = require('request');

//import IPosicionGPS = posicionGPSModel.IPosicionGPS;
//import repositorioPosicionesGPS = posicionGPSModel.repository;
//import IParadaColectivo = paradaColectivoModel.IParadaColectivo;
//import repositorioParadas = paradaColectivoModel.repository;
/*
function crearParadaColectivo(linea: Number, latitud: Number, longitud: Number, sentido: String): IParadaColectivo {

    repositorioPosicionesGPS.create({lati}

    let nuevaParada: IParadaColectivo = null;
    repositorioParadas.create({ linea: linea, posicionGPS: posicionGPS, sentido: sentido }, (error, paradaColectivo) => {
        if (!error) {
            nuevaParada = paradaColectivo;
        }
    });
    return nuevaParada;
}

export function obtenerParadasColectivo(req: express.Request, res: express.Response) {
    let idParada: number = req.params.id;

    repositorioParadas.findOne({ _id: idParada }, (error, paradaColectivo) => {
        if (error) {
            res.send(400);
        } else {
            paradaColectivo.populate('posicion', function (error, posicionGPS: IPosicionGPS) {
                if (error) {
                    res.send(400);
                }
                else {
                    res.send('Parada ID ' + paradaColectivo.id + ' (' + posicionGPS.latitud + ',' + posicionGPS.longitud + ') Sentido ' + paradaColectivo.sentido);
                }
            });            
        }
    });
}

export function cargarParadasColectivo(req: express.Request, res: express.Response) {
    let linea: number = req.params.linea;

    request(
        {
            method: 'GET',
            uri: 'http://api.datos.bahiablanca.gob.ar/api/v2/datastreams/PARAD-DE-COLEC/data.json/?auth_key=a049a7553f75ed50c8fab78b1685e7ac83c8d0a4&filter0=column0[==]' + linea
        }
        , function (error, response, body) {

            try {
                const dataJSON = JSON.parse(body);
                let paradas = dataJSON['result']['fArray'];//VER COMO TIPAR EL ARRAY
                let numeroParadas: number = 0;
                let posLatitud: number = 6;
                let posLongitud: number = 7;
                let posSentido: number = 8;
                while (posLatitud < paradas.length && posLongitud < paradas.length) {
                    //console.log(`Parada ${++numeroParadas}: (${paradas[posLatitud]['fStr']}, ${paradas[posLongitud]['fStr']})`);
                    crearParadaColectivo(linea, paradas[posLatitud]['fStr'], paradas[posLongitud]['fStr'], paradas[posSentido]['fStr']);
                    ++numeroParadas;
                    posLatitud += 4;
                    posLongitud += 4;
                    posSentido += 4;
                }
                res.send(`Total paradas linea ${linea} : ${numeroParadas}`);
            } catch (e) {
                res.send('Error al parsear el JSON');
            }
        });
}
*/