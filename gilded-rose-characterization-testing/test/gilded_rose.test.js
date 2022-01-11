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

    it('And quality is 0. Should not put negative quality', function () {
      const gildedRose = new GildedRose([new Item('Book', 10, 0)]);

      const [item] = gildedRose.updateQuality();

      expect(item.name).toBe('Book');
      expect(item.quality).toBe(0);
    });
  });

  describe('When a Item is a special item: ', () => {
    describe('Aged Brie', () => {
      it('SellIn is 10. Should be reduced and quality must increase one', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Aged Brie');
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(21);
      });

      it('SellIn date is passed. Quality should increment twice as fast', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Aged Brie');
        expect(item.quality).toBe(22);
      });

      it('SellIn is 10 and quality over 50. Should not modify quality value', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Aged Brie');
        expect(item.quality).toBe(50);
      });

      it('SellIn is 0 and quality is 0. Should increase quality twice as fast', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Aged Brie');
        expect(item.quality).toBe(2);
      });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
      it('When SellIn is below to 11. Should be reduce sellIn and quality must increase by two', () => {
        const gildedRose = new GildedRose([
          new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert');
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(22);
      });

      it('When SellIn is above to 11. Should reduced sellIn by one and quality increase by one', () => {
        const gildedRose = new GildedRose([
          new Item('Backstage passes to a TAFKAL80ETC concert', 12, 20),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert');
        expect(item.sellIn).toBe(11);
        expect(item.quality).toBe(21);
      });

      it('With SellIn date passed. Quality should be reset to 0', () => {
        const gildedRose = new GildedRose([
          new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert');
        expect(item.quality).toBe(0);
      });

      it('When has quality 50. Should not put quality over 50', () => {
        const gildedRose = new GildedRose([
          new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert');
        expect(item.quality).toBe(50);
      });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
      it('When SellIn is below to 11. Should not reduce sellIn and quality must not change', () => {
        const gildedRose = new GildedRose([
          new Item('Sulfuras, Hand of Ragnaros', 10, 20),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Sulfuras, Hand of Ragnaros');
        expect(item.sellIn).toBe(10);
        expect(item.quality).toBe(20);
      });

      it('When SellIn is above to 11. Should not change sellIn/quality', () => {
        const gildedRose = new GildedRose([
          new Item('Sulfuras, Hand of Ragnaros', 12, 20),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Sulfuras, Hand of Ragnaros');
        expect(item.sellIn).toBe(12);
        expect(item.quality).toBe(20);
      });

      it('With SellIn date passed. Quality should keep it', () => {
        const gildedRose = new GildedRose([
          new Item('Sulfuras, Hand of Ragnaros', 0, 20),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Sulfuras, Hand of Ragnaros');
        expect(item.quality).toBe(20);
      });

      it('When has quality 50. Should not put quality over 50', () => {
        const gildedRose = new GildedRose([
          new Item('Sulfuras, Hand of Ragnaros', 10, 50),
        ]);

        const [item] = gildedRose.updateQuality();

        expect(item.name).toBe('Sulfuras, Hand of Ragnaros');
        expect(item.quality).toBe(50);
      });
    });
  });
});
