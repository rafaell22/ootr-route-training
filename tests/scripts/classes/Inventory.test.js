// @ts-check
'use strict'

import Inventory from '#classes/Inventory.js';

import items from '#data/items.js';

describe('Test class Inventory', () => {
  describe('Test class instantiation', () => {
    test('Successfully create new empty inventory', () => {
      const inventory = new Inventory();
      expect(inventory.items.size).toBe(0);
    });
  });

  describe('Test class methods', () => {
    test('Throw error if checking for item in inventory, but passing no argument', () => {
      const inventory = new Inventory();
      expect(() => inventory.has()).toThrow();
    });

    test('Succesfully check that item is not in inventory', () => {
      const inventory = new Inventory();
      expect(inventory.has(items.KOKIRI_SWORD)).toBe(false);
    })

    test('Successfully check that item is not in inventory\'s pocket', () => {
      const inventory = new Inventory();
      expect(inventory.has(items.KOKIRI_SWORD, 'equipment')).toBe(false);
    })

    test('Successfully add new item to inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item);
      expect(inventory.has(item)).toBe(true);
    });

    test('Successfully try to add existing item to inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item);
      inventory.add(item);
      expect(inventory.has(item)).toBe(true);
    });

    test('Successfully add new item to pocket in inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item, 'equipment');
      expect(inventory.has(item, 'equipment')).toBe(true);
    });

    test('Successfully try to add existing item to pocket in inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item, 'equipment');
      inventory.add(item, 'equipment');
      expect(inventory.has(item, 'equipment')).toBe(true);
    });

    test('Succesfully remove item from inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item);
      inventory.remove(item);
      expect(inventory.has(item)).toBe(false);
    });

    test('Successfully remove item from inventory\'s pocket', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item, 'equipment');
      inventory.remove(item, 'equipment');
      expect(inventory.has(item, 'equipment')).toBe(false);
    });

    test('Succesfully try to remove inexistent item from inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.remove(item);
      expect(inventory.has(item)).toBe(false);
    });

    test('Succesfully try to remove inexistent item from inventory\'s pocket', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.remove(item, 'equipment');
      expect(inventory.has(item, 'equipment')).toBe(false);
    });
  });
});
