import express = require('express');
import bodyParser = require('body-parser');
import request = require('request');
import posicionesGPSRepository = require('../repositories/posicionesGPSRepository');
import posicionGPSModel = require('../models/posicionGPSModel');

import IPosicionGPS = posicionGPSModel.IPosicionGPS;

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
*///funcion con callback
export async function cargarPosiciones(linea: number) {
    request(
        {
            method: 'GET',
            uri: 'http://api.datos.bahiablanca.gob.ar/api/v2/datastreams/PARAD-DE-COLEC/data.json/?auth_key=a049a7553f75ed50c8fab78b1685e7ac83c8d0a4&filter0=column0[==]' + linea
        }
        , async function (error, response, body) {
                   
            try {
                const dataJSON = JSON.parse(body);
                let paradas = dataJSON['result']['fArray'];//VER COMO TIPAR EL ARRAY
                let numeroParadas: number = 0;
                let posLatitud: number = 6;
                let posLongitud: number = 7;
                let posicionCreada: IPosicionGPS;
                    
                while (posLatitud < paradas.length && posLongitud < paradas.length) {
                    posicionCreada = await posicionesGPSRepository.create(paradas[posLatitud]['fStr'], paradas[posLongitud]['fStr']);
                    ++numeroParadas;
                    if (posicionCreada != null) {
                        console.log('Parada ' + numeroParadas + ' creada');
                    }                        
                    posLatitud += 4;
                    posLongitud += 4;
                }
                console.log('Se cargaron ' + numeroParadas + ' de la linea ' + linea);
            } catch (e) {
                console.log('Error al cargar las posiciones');
                throw e;
            }
        });
}

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
}*///funcion con callback
export async function obtenerPosicionesGPS(): Promise<IPosicionGPS[]> {
    //try {
        //NUNCA VA A HABER UN ERROR
        let posicionesGPS: IPosicionGPS[] = await posicionesGPSRepository.getAll();
        if (posicionesGPS != null) {
            console.log('Se obtuvieron las posiciones desde el servicio');
        } else {
            console.log('Posiciones null en el controlador');
        }
        return posicionesGPS;
  //  } catch (error) {
   //     console.log('Error al obtener las paradas desde el servicio');
   //     return null;
   // }
}
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
}*///funcion con callback
export async function eliminarPosicionesGPS(): Promise<Boolean> {
    //try {NUNCA VA A HABER UN ERROR
        return await posicionesGPSRepository.deleteAll();
    //} catch (error) {
     //   return false;
    //}
}
