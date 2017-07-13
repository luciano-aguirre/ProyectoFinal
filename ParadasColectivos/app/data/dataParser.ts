import express = require('express');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');
import posicionGPSModel = require('../models/posicionGPSModel');

import IPosicionGPS = posicionGPSModel.IPosicionGPS;
import repository = posicionGPSModel.repository;
