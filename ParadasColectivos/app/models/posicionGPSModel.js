"use strict";
const mongoose = require('mongoose');
exports.posicionGPSSchema = new mongoose.Schema({
    latitud: Number,
    longitud: Number
});
//VER CUANDO USAR Number o number
exports.repository = mongoose.model('PosicionGPS', exports.posicionGPSSchema);
//# sourceMappingURL=posicionGPSModel.js.map