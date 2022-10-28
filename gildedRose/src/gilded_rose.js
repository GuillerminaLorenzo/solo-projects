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

      if (!AgedBrie && !Backstage) {
        if (item.quality > 0) {
          if (!Sulfuras) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (Backstage) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }

      if (!Sulfuras) {
        item.sellIn = item.sellIn - 1
      }

      if (item.sellIn < 0) {
        if (!AgedBrie) {
          if (!Backstage) {
            if (item.quality > 0) {
              if (!Sulfuras) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    })
    return this.items
  }
}

module.exports = {
  Item,
  Shop
}
