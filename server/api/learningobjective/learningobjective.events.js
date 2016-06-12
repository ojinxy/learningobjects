/**
 * Learningobjective model events
 */

'use strict';

import {EventEmitter} from 'events';
import Learningobjective from './learningobjective.model';
var LearningobjectiveEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LearningobjectiveEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Learningobjective.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LearningobjectiveEvents.emit(event + ':' + doc._id, doc);
    LearningobjectiveEvents.emit(event, doc);
  }
}

export default LearningobjectiveEvents;
