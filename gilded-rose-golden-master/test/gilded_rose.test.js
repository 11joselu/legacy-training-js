const { GildedRose, Item } = require('../src/gilded_rose');
const expectedResult = require('./expectedResult.json');
const wrongExpectedResult = require('./wrongExpectedResult.json');

describe('Gilded Rose', function () {
  it('Should update quality and sellin of item list', function () {
    const items = [
      createItem('foo', -1, 0),
      createItem('Aged Brie', 0, 2),
      createItem('Backstage passes to a TAFKAL80ETC concert', 2, 49),
      createItem('Sulfuras, Hand of Ragnaros', 6, 11),
    ];
    const gildedRose = new GildedRose(items);

    const updatedQualityItems = gildedRose.updateQuality();

    expect(updatedQualityItems).toEqual(expectedResult);
  });

  it('Should update quality and sellin of item list but should not match it', function () {
    const items = [
      createItem('foo', -1, 0),
      createItem('Aged Brie', 0, 2),
      createItem('Backstage passes to a TAFKAL80ETC concert', 2, 49),
      createItem('Sulfuras, Hand of Ragnaros', 6, 11),
    ];
    const gildedRose = new GildedRose(items);

    const updatedQualityItems = gildedRose.updateQuality();

    expect(updatedQualityItems).not.toEqual(wrongExpectedResult);
  });
});

function createItem(name, sellIn, quality) {
  return new Item(name, sellIn, quality);
}
