import express = require('express');
import mongoose = require('mongoose');
import posicionGPSModel = require('./posicionGPSModel'); 

import IPosicionGPS = posicionGPSModel.IPosicionGPS;
/*

export var paradaColectivoSchema = new mongoose.Schema({
    linea: Number,
    posicion: { type: mongoose.Schema.Types.ObjectId, refer: 'PosicionGPS' },
    sentido: String
});

export interface IParadaColectivo extends mongoose.Document {
    linea: Number,
    posicion: IPosicionGPS,
    sentido: String
}
*/
//VER CUANDO USAR Number o number
//https://gist.github.com/robert52/1f82b5d201aa95e13cd1a3344f03eda5

//export var repository = mongoose.model<IParadaColectivo>('ParadaColectivo', paradaColectivoSchema);