// @ts-check
'use strict'

import Player from '#classes/Player.js';
import locations from '#data/locations.js';

describe('Test class Player', () => {
  describe('Test player instance methods', () => {
    describe('Check if player is at a certain location', () => {
      test('Returns true if player is at specified address', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
        });
        expect(player.at(locations.TEMPLE_OF_TIME)).toBe(true);
      });

      test('Returns false if player is not at specified address', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
        });
        expect(player.at(locations.MARKET)).toBe(false);
      });

      test('Throws error if no location is specified in check', () => {
        const player = new Player({
          at: locations.TEMPLE_OF_TIME,
        });
        expect(() => player.at()).toThrow();
      });
    });
  });
});
