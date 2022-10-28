class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    this.items.forEach((item) => {
      const AgedBrie = item.name === 'Aged Brie'
      const Backstage = item.name === 'Backstage passes to a TAFKAL80ETC concert'
      const Sulfuras = item.name === 'Sulfuras, Hand of Ragnaros'
      const Conjured = item.name === 'Conjured Mana Cake'
      const specialNames = !AgedBrie && !Backstage && !Sulfuras && !Conjured
      const sellInLessThanEleven = item.sellIn < 11
      const sellInLessThanSix = item.sellIn < 6
      const sellInLessThanZero = item.sellIn <= 0
      const qualityBiggerThanZero = item.quality > 0
      const qualityLessThanFifty = item.quality < 50

      if (!Sulfuras) {
        item.sellIn -= 1
      }

      if (specialNames) {
        if (qualityBiggerThanZero) {
          item.quality -= 1
          if (sellInLessThanZero) {
            item.quality -= 1
          }
        }
      } else if (Conjured) {
        if (qualityBiggerThanZero) {
          item.quality -= 2
        }
      } else if (Backstage) {
        item.quality += 1
        if (sellInLessThanEleven) {
          item.quality += 1
        }
        if (sellInLessThanSix) {
          item.quality += 1
        }
        if (sellInLessThanZero) {
          item.quality = 0
        }
      } else if (AgedBrie && qualityLessThanFifty) {
        item.quality += 1
      }
    })
    return this.items
  }
}

module.exports = {
  Item,
  Shop
}
