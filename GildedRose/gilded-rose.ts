export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const increaseQuality = (item: Item) => {
  return item.quality += 1
}


const maintainQuality = (item : Item) => {
  return item.quality
}


type SUPPORTED = Record<string, (a: any) => any>

const SUPPORTED_ITEMS: SUPPORTED = {
  "Aged Brie": increaseQuality,
  "Backstage passes to a TAFKAL80ETC concert": increaseQuality,
  "Sulfuras, Hand of Ragnaros": maintainQuality
}

const defaultQuality = (item: Item) => {
  return item.quality - 1
}

const qualityOfUnknownItem = (item: Item): undefined | number => {

  let fn = SUPPORTED_ITEMS[item.name]

  if (typeof (fn) === "undefined") {
    return defaultQuality(item)
  } else {
    return fn(item)
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      let item = this.items[i]
      let quality = qualityOfUnknownItem(item)

      if (typeof (quality) === "number") {
        item.quality = quality

        // FIXME: use item everywhere
        this.items[i] = item
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }

      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
