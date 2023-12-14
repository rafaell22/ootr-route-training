// @ts-check
'use strict'

import Consumable from '#classes/Consumable.js';

import itemTypes from '#data/itemTypes.js';
import ages from '#data/ages.js';
import items from '#data/items.js';

describe('Test class Consumable', () => {
  describe('Test class instantiation', () => {
    test('Successfully create Consumable instance passing only name and no conditions', () => {
      const itemName = items.DEKU_NUTS;
      const consumableItemBothAges = new Consumable(itemName);
      expect(consumableItemBothAges).toEqual(expect.objectContaining({
        name: itemName,
        type: itemTypes.CONSUMABLE,
      }));
    });

    test('Successfully create Consumable instance passing name and conditions', () => {
      const itemName = items.DEKU_NUTS;
      const consumableItemChild = new Consumable(itemName, {
        isAge: ages.CHILD
      });
      expect(consumableItemChild).toEqual(expect.objectContaining({
        name: itemName,
        type: itemTypes.CONSUMABLE,
        conditions: expect.objectContaining({
          isAge: ages.CHILD,
        }),
      }));
    });

    test('Throws error when creating Consumable instance, but passing no argument', () => {});

    test('Throws error when creating Consumable instance, but name parameter is not of type string', () => {});
  });
  
  describe('Test instance methods and properties', () => {
    test('Successfully check quantity of items', () => {
      const consumable = new Consumable(items.DEKU_NUTS, {}, 2);
      expect(consumable.quantity).toBe(2);
    });
    
    test('Successfully add new units of item', () => {
      const consumable = new Consumable(items.DEKU_NUTS, {}, 2);
      consumable.add(3);
      expect(consumable.quantity).toBe(5);
    });

    test('Successfully add use units of item', () => {
      const consumable = new Consumable(items.DEKU_NUTS, {}, 3);
      consumable.use(1);
      expect(consumable.quantity).toBe(2);
    });
  });
});
