// @ts-check
'use strict'

import Inventory from '../../../src/scripts/classes/Inventory.js';

import items from '../../../src/scripts/data/items.js';

describe('Test class Inventory', () => {
  describe('Test class instantiation', () => {
    test('Create new empty inventory', () => {
      const inventory = new Inventory();
      expect(inventory.items.size).toBe(0);
    });
  });

  describe('Test class methods', () => {
    test('Check if inventory has undefined item', () => {
      const inventory = new Inventory();
      expect(() => inventory.has()).toThrow();
    });

    test('Check if empty inventory has item', () => {
      const inventory = new Inventory();
      expect(inventory.has(items.KOKIRI_SWORD)).toBe(false);
    })

    test('Check if empty pocket in inventory has item', () => {
      const inventory = new Inventory();
      expect(inventory.has(items.KOKIRI_SWORD, 'equipment')).toBe(false);
    })

    test('Add item to inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item);
      expect(inventory.has(item)).toBe(true);
    });

    test('Add item to pocket in inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item, 'equipment');
      expect(inventory.has(item, 'equipment')).toBe(true);
    });

    test('Remove item from inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item);
      inventory.remove(item);
      expect(inventory.has(item)).toBe(false);
    });

    test('Remove item from pocket in inventory', () => {
      const inventory = new Inventory();
      const item = items.KOKIRI_SWORD;
      inventory.add(item, 'equipment');
      inventory.remove(item, 'equipment');
      expect(inventory.has(item, 'equipment')).toBe(false);
    });
  });
});
