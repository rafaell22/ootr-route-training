// @ts-check
'use strict'

import { jest } from '@jest/globals';

import Consumable from '../../../src/scripts/classes/Consumable.js';

import createEnum from '../../../src/scripts/classes/createEnum.js';
jest.mock('../../../src/scripts/classes/createEnum.js', () => {});

import itemTypes from '../../../src/scripts/data/itemTypes.js';
jest.mock('../../../src/scripts/data/itemTypes', () => { 
  return {
    CONSUMABLE: 0,
    NOT_CONSUMABLE: 1,
  }
});

import ages from '../../../src/scripts/data/ages.js';
jest.mock('../../../src/scripts/data/ages.js', () => {
  return {
    CHILD: 0,
    ADULT: 1,
  };
});

import Item from '../../../src/scripts/classes/Item.js';
jest.mock('../../../src/scripts/classes/Item.js', () => {
  return jest.fn().mockImplementation(
    function(name, type, age) {
      this.name = name;
      this.type = type;
      this.age = age;

      return this;
    }
  );
});

describe('Test class Consumable', () => {
  describe('Test class instantiation', () => {
    test('Test instantiation of item without age restrictions', () => {
      const consumableItemBothAges = new Consumable('nuts');
      expect(consumableItemBothAges.name).toBe('nuts');
      expect(consumableItemBothAges.type).toBe(itemTypes.CONSUMABLE);

      expect(consumableItemBothAges.canUse(ages.CHILD)).toBe(true);
      expect(consumableItemBothAges.canUse(ages.ADULT)).toBe(true);

      expect(consumableItemBothAges.quantity).toBe(0);
      consumableItemBothAges.add(1);
      expect(consumableItemBothAges.quantity).toBe(1);
      consumableItemBothAges.use(1);
      expect(consumableItemBothAges.quantity).toBe(0);
    });

    test('Test instantiation of item with age restriction', () => {
      const consumableItemChild = new Consumable('nuts', ages.CHILD);

      expect(consumableItemChild.name).toBe('nuts');
      expect(consumableItemChild.type).toBe(itemTypes.CONSUMABLE);

      expect(consumableItemChild.canUse(ages.CHILD)).toBe(true);
      expect(consumableItemChild.canUse(ages.ADULT)).toBe(true);

      expect(consumableItemChild.quantity).toBe(0);
      consumableItemChild.add(1);
      expect(consumableItemChild.quantity).toBe(1);
      consumableItemChild.use(1);
      expect(consumableItemChild.quantity).toBe(0);
    })
  });
});
