class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateQuality() {
    this.items.forEach((item) => {
      const AgedBrie = item.name == 'Aged Brie'
      const Backstage = item.name == 'Backstage passes to a TAFKAL80ETC concert'
      const Sulfuras = item.name == 'Sulfuras, Hand of Ragnaros'
      const Conjured = item.name == 'Conjured Mana Cake'
      const qualityBiggerThanZero = item.quality > 0
      const qualityLessThanFifty = item.quality < 50
      const sellInLessThanEleven = item.sellIn < 11
      const sellInLessThanSix = item.sellIn < 6


      if (!AgedBrie && !Backstage) {
          if (qualityBiggerThanZero && !Sulfuras) {
              item.quality -= 1
          }
        } else {
          if (qualityLessThanFifty) {
            item.quality += 1;
            if (Backstage) {
              if (sellInLessThanEleven && qualityLessThanFifty) {           
                item.quality += 1         
              }
              if (sellInLessThanSix && qualityLessThanFifty) {
                item.quality += 1
              }
            }
          }
        }

        if (!Sulfuras) {
          item.sellIn -= 1;
        }

        if (item.sellIn < 0) {
          if (!AgedBrie) {
            if (!Backstage) {
              if (qualityBiggerThanZero && !Sulfuras) {
                  item.quality -= 1
              }
            } else {
              item.quality -= item.quality;
            }
          } else {
            if (qualityLessThanFifty) {
              item.quality += 1;
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
