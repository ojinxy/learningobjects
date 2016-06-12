/**
 * Populate DB with required data
 */

'use strict';
import Learningobjective from '../api/learningobjective/learningobjective.model';

Learningobjective.find({}).remove()
  .then(() => {
    Learningobjective.create({
      _id: 'rem',
      name: 'Remember',
      info: 'Remember information that was taught.',
      active: true,
      complexity_lvl: 1
    },{
      _id: 'und',
      name: 'Understand',
      info: 'Understand information that was taught.',
      active: true,
      complexity_lvl: 2
    },{
      _id: 'app',
      name: 'Apply',
      info: 'Application information that was taught.',
      active: true,
      complexity_lvl: 3
    },{
      _id: 'ana',
      name: 'Analyze',
      info: 'Analyze information that was taught.',
      active: true,
      complexity_lvl: 4
    },{
      _id: 'eva',
      name: 'Evaluate',
      info: 'Evaluate information that was taught.',
      active: true,
      complexity_lvl: 5
    },{
      _id: 'cre',
      name: 'Create',
      info: 'Create new information based on information which was taught.',
      active: true,
      complexity_lvl: 6
    })
  });
