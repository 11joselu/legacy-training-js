const { GildedRose, Item } = require('../src/gilded_rose');

describe('Gilded Rose', function () {
  describe('When a Item is not a special item', () => {
    it('SellIn and Quality should be reduced by one', function () {
      const gildedRose = new GildedRose([new Item('Book', 10, 20)]);

      const [item] = gildedRose.updateQuality();

      expect(item.name).toBe('Book');
      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(19);
    });

    it('And SellIn date has passed. Quality should degrades twice as fast', function () {
      const gildedRose = new GildedRose([new Item('Book', 0, 20)]);

      const [item] = gildedRose.updateQuality();

      expect(item.name).toBe('Book');
      expect(item.quality).toBe(18);
    });
  });
});
