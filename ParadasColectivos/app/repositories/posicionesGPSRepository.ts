import express = require('express');
import mongoose = require('mongoose');
import posicionGPSModel = require('../models/posicionGPSModel');

import IPosicionGPS = posicionGPSModel.IPosicionGPS;
import repository = posicionGPSModel.repository;

export async function create(latitud: number, longitud: number): Promise<IPosicionGPS> {
    try {
        return await repository.create({ latitud: latitud, longitud: longitud });
    } catch (error) {
        console.log('No se pudo crear una posicion en el repositorio');
        return null;
    }
}

export function obtenerPosicionGPS(_id: string): IPosicionGPS{

    let nuevaPosicionGPS: IPosicionGPS;
    repository.findById(_id, (error, posicionGPS) => {
        if (error) {
            console.log('Error al recuperar una posicion por su id');
        }
        nuevaPosicionGPS = posicionGPS;
    });
    return nuevaPosicionGPS;
}


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
}*///funcion con callback

export async function getAll(): Promise<IPosicionGPS[]> {
    try {
        let posicionesGPS: IPosicionGPS[] = await repository.find({}).exec();
        console.log('Se obtuvieron las posiciones desde el repositorio');
        return posicionesGPS;
    } catch (error) {
        console.log('Error al obtener las paradas desde el repositorio');
        return null;
    }
}
/*
export function deleteAll(next) {
    
    repository.remove({}, (error) => {
        next(error);
    });
}*///funcion con callback

export async function deleteAll(): Promise<Boolean> {
    try {
        await repository.remove({}).exec();
        return true;
    } catch (error) {
        return false;
    }
}