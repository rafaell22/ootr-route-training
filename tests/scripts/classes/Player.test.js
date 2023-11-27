// @ts-check
'use strict'

import ages from '#data/ages.js';
import items from '#data/items.js';
import Player from '#classes/Player.js';
import locations from '#data/locations.js';

describe('Test class Player', () => {
  describe('Test player instance methods', () => {
    describe('Check if player is at a certain location', () => {
      test('Succesfully returns that the player is at specified location', () => {
        const location = locations.TEMPLE_OF_TIME;
        const player = new Player({
          at: location,
          is: ages.ADULT,
        });
        expect(player.at(location)).toBe(true);
      });

      test('Succesfully returns that the player is not at specified location', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: ages.ADULT,
        });
        expect(player.at(locations.MARKET)).toBe(false);
      });

      test('Throws error if try to check if player is at specified location, but no location is specified', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: ages.ADULT,
        });
        expect(() => player.at()).toThrow();
      });
    });

    describe('Chek if player is a certain age', () => {
      test('Succesfully returns that the player is at specified age', () => {
        const age = ages.ADULT;
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: age,
        });
        expect(player.is(age)).toBe(true);
      });

      test('Succesfully returns that the player is not at specified age', () => {
        const age = ages.ADULT;
        const assertAge = ages.CHILD;
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: age,
        });
        expect(player.is(assertAge)).toBe(false);
      });

      test('Throws error if try to check if player is at specified age, but no age is specified', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: ages.ADULT,
        });
        expect(() => player.is()).toThrow();
      });
    });

    describe('Check if user has certain items', () => {
      test('Succesfully returns that the player has specified item', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: ages.ADULT,
          has: [ items.MASTER_SWORD, items.HYLIAN_SHIELD ],
        });
        expect(player.has(items.MASTER_SWORD)).toBe(true);
      });

      test('Succesfully returns that the player does not have the specified item', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: ages.ADULT,
          has: [ items.MASTER_SWORD, items.HYLIAN_SHIELD ],
        });
        expect(player.has(items.KOKIRI_SWORD)).toBe(false);
      });

      test('Throws error if try to check that player has an item, but no item is specified', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
          is: ages.ADULT,
          has: [ items.MASTER_SWORD, items.HYLIAN_SHIELD ],
        });
        expect(() => player.has()).toThrow();
      });
    });
  });
});
