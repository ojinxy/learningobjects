'use strict';

import mongoose from 'mongoose';

var LearningobjectiveSchema = new mongoose.Schema({
  _id: String,
  name: String,
  info: String,
  active: Boolean,
  complexityLvl:Number
});

export default mongoose.model('Learningobjective', LearningobjectiveSchema);
