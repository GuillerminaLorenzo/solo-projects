const { Shop, Item } = require('../src/gilded_rose')

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe('foo')
  })

  it('Once the sell by date has passed, quality degrades twice as fast', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 4)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(2)
  })

  it('The quality of an item is never negative', () => {
    const gildedRose = new Shop([new Item('Elixir of the Mongoose', 2, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(1)
    expect(items[0].quality).toBe(0)
  })

  it("'Aged Brie' actually increases in quality the older it gets", () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(1)
    expect(items[0].quality).toBe(1)
  })

  it('The quality of an item is never more than 50', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(1)
    expect(items[0].quality).toBe(50)
  })

  it("'Sulfuras', never has to be sold or decreases in quality", () => {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(0)
    expect(items[0].quality).toBe(80)
  })

  it("'Backstage passes', increases in quality as its SellIn value approaches", () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(14)
    expect(items[0].quality).toBe(21)
  })

  it("'Backstage passes', quality increases by 2 when there are 10 days or less", () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(8)
    expect(items[0].quality).toBe(22)
  })

  it("'Backstage passes', quality increases by 3 when there are 5 days or less", () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(3)
    expect(items[0].quality).toBe(23)
  })

  it("'Backstage passes', quality drops to 0 after the concert", () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(-1)
    expect(items[0].quality).toBe(0)
  })
})
