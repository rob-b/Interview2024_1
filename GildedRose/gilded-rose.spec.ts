import { Item, GildedRose } from './gilded-rose';

describe('Gilded Rose', () => {
  it("should not allow negative quality", () =>{
    const gildedRose = new GildedRose([new Item('foo', 0, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })

  it("should constrain quality to a max of 50 ", () =>{
    const gildedRose = new GildedRose([new Item('foo', 0, 52)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  })

  it("should decrease the quality of an unknown item", () =>{
    const gildedRose = new GildedRose([new Item('unknown item a', 2, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
  })

  it("should decrease the sellin of an unknown item", () =>{
    const gildedRose = new GildedRose([new Item('unknown item a', 2, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
  })

  it("should maintain the quality of sulfuras", () =>{
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  })

  it("should increase the quality of aged brie", () =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
  })

  it("should decrease the sellIn of aged brie", () =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
  })
});
