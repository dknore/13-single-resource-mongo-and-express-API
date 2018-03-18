'use strict';

const mongoose = require('mongoose');

const suvSchema = new mongoose.Schema({
  car: [mongoose.model('Car').schema],
});

let Suv = mongoose.model('Suv', suvSchema);
module.exports = Suv;
