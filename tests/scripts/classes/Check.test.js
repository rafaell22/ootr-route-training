// @ts-check
'use strict'

import Check from '#classes/Check.js';

import timeOfDay from '#data/timeOfDay.js';
import ages from '#data/ages.js';
import locations from '#data/locations.js';
import items from '#data/items.js';

describe('Test class Check', () => {
  describe('Test class instantiation', () => {
    test('Successfully create class instance if only check\'s name and reward is passed as argument', () => {
      const checkName = 'Market Shooting Gallery Reward';
      const check = new Check(checkName, {
        item: items.KOKIRI_SWORD,
        quantity: 1,
      });
      expect(check).toEqual(expect.objectContaining({
        name: checkName,
        reward: expect.objectContaining({
          item: items.KOKIRI_SWORD,
          quantity: 1,
        })
      }));
    })

    test('Successfully create class instance if check\'s name, reward and conditions are passed as argument', () => {
      const checkName = 'Market Shooting Gallery Reward'
      const check = new Check(checkName, {
        item: items.KOKIRI_SWORD,
        quantity: 1,
      }, {
        at: locations.MARKET,
        is: ages.CHILD,
        on: timeOfDay.DAY,
      });
      expect(check).toEqual(expect.objectContaining({
        name: checkName,
        reward: expect.objectContaining({
          item: items.KOKIRI_SWORD,
          quantity: 1,
        }),
        conditions: expect.objectContaining({
          at: locations.MARKET,
          is: ages.CHILD,
          on: timeOfDay.DAY
        })
      }))
    });

    test('Throws error on class instantiation when no argument is passed', () => {
      expect(() => new Check()).toThrow();
    });  

    test('Throws error on class instantiation when only name is passed as argument', () => {
      const checkName = 'Market Shooting Gallery Reward'
      expect(() => new Check(checkName)).toThrow();
    });  

    test('Throws error on class instantiation when check\' name is not a string', () => {
      const checkName = 123;
      expect(() => new Check(checkName)).toThrow();
    });  
  });

  describe('Test class methods', () => {
    test('Succesfully mark check as done', () => {
      const checkName = 'Market Shooting Gallery Reward';
      const check = new Check(checkName, {
        item: items.KOKIRI_SWORD,
        quantity: 1,
      }, {
        at: locations.MARKET,
        is: ages.CHILD,
        on: timeOfDay.DAY,
      });

      check.do();
      expect(check.done).toBe(true);
    });

    test('Succesfully mark check as not done', () => {
      const checkName = 'Market Shooting Gallery Reward';
      const check = new Check(checkName, {
        item: items.KOKIRI_SWORD,
        quantity: 1,
      }, {
        at: locations.MARKET,
        is: ages.CHILD,
        on: timeOfDay.DAY,
      });

      check.do();
      check.undo();
      expect(check.done).toBe(false);
    });
  });
});
