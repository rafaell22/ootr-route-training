// @ts-check
'use strict'

import Check from '#classes/Check.js';

import timeOfDay from '#data/timeOfDay.js';
import ages from '#data/ages.js';
import locations from '#data/locations.js';

describe('Test class Check', () => {
  describe('Test class instantiation', () => {
    test('Accept class instantiation', () => {
      const checkName = 'Market Shooting Gallery Reward'
      const check = new Check(checkName, {
        at: locations.MARKET,
        is: ages.CHILD,
        on: timeOfDay.DAY,
      });
      expect(check).toEqual(expect.objectContaining({
        name: checkName,
        conditions: expect.objectContaining({
          at: locations.MARKET,
          is: ages.CHILD,
          on: timeOfDay.DAY
        })
      }))
    });

    test('Reject class instantiation when no argument is passed', () => {
      
    });  
  });

  describe('Test class methods', () => {
    test('Accept marks check as done', () => {});

    test('Accept mark check as not done', () => {});
  });
});
