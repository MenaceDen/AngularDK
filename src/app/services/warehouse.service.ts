import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CartItem } from '../Models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  showBadgeNumber: Subject<number> = new Subject<number>();
  constructor(private router: Router) {}
  futureJSON =
    `{"goods": [` +
    `{"id":1, "category":"simpathy", "name":"Beautiful Spirit Basket", "price":105, "imgSrc":"/Images/simpathy/product1.PNG", "description":"Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket."},` +
    `{"id":2, "category":"simpathy", "name":"The Spathiphyllum Plant", "price":80, "imgSrc":"/Images/simpathy/product2.PNG", "description":"Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long-lasting and has an amazing effect on any room with its lush leaves and white flowers."},` +
    `{"id":3, "category":"simpathy", "name":"Comfort Planter", "price":66, "imgSrc":"/Images/simpathy/product3.PNG", "description":"The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6' peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect."},` +
    `{"id":4, "category":"simpathy", "name":"Eternal Friendship Bouquet", "price":100, "imgSrc":"/Images/simpathy/product4.PNG", "description":"An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8' vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends."},` +
    `{"id":5, "category":"simpathy", "name":"Long Stem Pink Rose Bouquet", "price":200, "imgSrc":"/Images/simpathy/product5.PNG", "description":"Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most."},` +
    `{"id":6, "category":"simpathy", "name":"Clear Skies Bouquet", "price":135, "imgSrc":"/Images/simpathy/product6.PNG", "description":"Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood."},` +
    `{"id":7, "category":"simpathy", "name":"Beyond Blue Bouquet", "price":92, "imgSrc":"/Images/simpathy/product7.PNG", "description":"There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason."},` +
    `{"id":8, "category":"simpathy", "name":"Alluring Elegance Bouquet", "price":115, "imgSrc":"/Images/simpathy/product8.PNG", "description":"An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions."},` +
    `{"id":9, "category":"simpathy", "name":"Beach House Bouquet", "price":125, "imgSrc":"/Images/simpathy/product9.PNG", "description":"Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms."},` +
    `{"id":10, "category":"simpathy", "name":"Pastel Peace Basket", "price":105, "imgSrc":"/Images/simpathy/product10.PNG", "description":"The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace."},` +
    `{"id":11, "category":"simpathy", "name":"Picnic Tulips", "price":70, "imgSrc":"/Images/simpathy/product11.PNG", "description":"Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mother's Day surprise."},` +
    `{"id":12, "category":"simpathy", "name":"Sunshine & Joy Garden", "price":65, "imgSrc":"/Images/simpathy/product12.PNG", "description":"The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time."},` +
    `{"id":13, "category":"get-well", "name":"Fiesta Bouquet", "price":95, "imgSrc":"/Images/get-well/product13.PNG", "description":"The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist-designed arrangement brings a pop of color and a burst of excitement as soon as it arrives."},` +
    `{"id":14, "category":"get-well", "name":"Alluring Elegance Bouquet", "price":115, "imgSrc":"/Images/get-well/product14.PNG", "description":"An illuminating array of florals brings an air of elegance to any room it's placed. This arrangement features refined florals like lilies, Queen Anne's Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions."},` +
    `{"id":15, "category":"get-well", "name":"Beyond Blue Bouquet", "price":92, "imgSrc":"/Images/get-well/product15.PNG", "description":"There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason."},` +
    `{"id":16, "category":"get-well", "name":"Clear Skies Bouquet", "price":135, "imgSrc":"/Images/get-well/product16.PNG", "description":"Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood."},` +
    `{"id":17, "category":"get-well", "name":"Light of My Life Bouquet", "price":80, "imgSrc":"/Images/get-well/product17.PNG", "description":"The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes."},` +
    `{"id":18, "category":"anniversary", "name":"Truly Stunning Bouquet", "price":108, "imgSrc":"/Images/anniversary/product18.PNG", "description":"This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient."},` +
    `{"id":19, "category":"anniversary", "name":"You're Precious Bouquet", "price":90, "imgSrc":"/Images/anniversary/product19.PNG", "description":"Blushing shades of pink blooms are nestled in lush greens to charm anyone's day. This bouquet is abundant with a classic assortment of pretty florals - roses, alstroemeria and carnations to name a few."},` +
    `{"id":20, "category":"anniversary", "name":"Long Stem Red Rose Bouquet", "price":200, "imgSrc":"/Images/anniversary/product20.PNG", "description":"You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say 'I love you' directly from a local florist to their home or office."},` +
    `{"id":21, "category":"anniversary", "name":"Pretty in Pink Belgian Chocolate Truffles", "price":45, "imgSrc":"/Images/anniversary/product21.PNG", "description":"Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink."},` +
    `{"id":22, "category":"anniversary", "name":"Valentine's Day Belgian Chocolate Covered Treat Sampler", "price":45, "imgSrc":"/Images/anniversary/product22.PNG", "description":"Don't make that special someone chose this February, and send the Valentine's Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more."},` +
    `{"id":23, "category":"congratulations", "name":"Bliss White Orchid", "price":68, "imgSrc":"/Images/congratulations/product23.PNG", "description":"The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table."},` +
    `{"id":24, "category":"congratulations", "name":"CLASSIC WHITE CALLA LILY", "price":58, "imgSrc":"/Images/congratulations/product24.PNG", "description":"This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun."},` +
    `{"id":25, "category":"congratulations", "name":"SPRING FLING TULIP BULB GARDEN", "price":45, "imgSrc":"/Images/congratulations/product25.PNG", "description":"Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion."},` +
    `{"id":26, "category":"congratulations", "name":"CONGRATS BELGIAN CHOCOLATE COVERED BERRY-GRAM", "price":55, "imgSrc":"/Images/congratulations/product26.PNG", "description":"Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out 'CONGRATS' Arrives in an Elegant Gift Box"} ]}`;

  offer = JSON.parse(this.futureJSON);
  offerId?: number;
  quantityToShow: number = 0;
  cartItems: CartItem[] = [];
  showProduct(id: number) {
    this.offerId = id;
    this.router.navigate(['/product', this.offerId]);
  }
  showAnother(way: string) {
    let currentId = this.offerId;
    let ids: number[] = [];
    let smallerIds: number[] = [];
    let higherIds: number[] = [];
    for (let i = 0; i < this.offer.goods.length; i++) {
      ids.push(this.offer.goods[i].id);
    }

    if (way === 'prev') {
      if (currentId) {
        for (let i = 0; i < ids.length; i++) {
          if (ids[i] < currentId) {
            smallerIds.push(ids[i]);
          }
        }
      }
      let prevId = Math.max(...smallerIds);

      if (prevId == -Infinity) {
        prevId = Math.max(...ids);
      }
      this.showProduct(prevId);
    }
    if (way === 'next') {
      if (currentId) {
        for (let i = 0; i < ids.length; i++) {
          if (ids[i] > currentId) {
            higherIds.push(ids[i]);
          }
        }
      }
      let nextId = Math.min(...higherIds);

      if (nextId == Infinity) {
        nextId = Math.min(...ids);
      }
      this.showProduct(nextId);
    }
  }
  showOnTheNav(quantity: number) {
    this.showBadgeNumber.next(quantity);
  }
  addProductToCart(
    id: number,
    imgSrc: string,
    name: string,
    price: number,
    quantity: number
  ) {
    if (this.cartItems.map((e) => e.id).includes(id)) {
      const pos = this.cartItems.map((e) => e.id).indexOf(id);
      this.cartItems[pos].quantity += quantity;
      this.quantityToShow += quantity;
      this.showOnTheNav(this.quantityToShow);
    } else {
      this.cartItems.push(new CartItem(id, imgSrc, name, price, quantity));
      this.quantityToShow += quantity;
      this.showOnTheNav(this.quantityToShow);
    }

    //console.log(this.cartItems);
  }
  removeFromCart(index: number, quantity: number) {
    this.cartItems.splice(index, 1);
    //console.log(this.cartItems);
    this.quantityToShow -= quantity;
    this.showOnTheNav(this.quantityToShow);
  }
  changeProductQuantity(index: number, quantity: number) {
    let prevQuantity = this.cartItems[index].quantity;
    this.cartItems[index].quantity = quantity;
    //console.log(this.cartItems[index]);
    if (this.cartItems[index].quantity > prevQuantity) {
      this.quantityToShow += this.cartItems[index].quantity - prevQuantity;
    } else {
      this.quantityToShow -= prevQuantity - this.cartItems[index].quantity;
    }
    this.showOnTheNav(this.quantityToShow);
  }
  calculateCart(): any[] {
    let calculations: any[] = [];
    let subtotal: number = 0;
    let shipping: number = 0;
    let total: number = 0;
    if (this.cartItems.length) {
      this.cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
        shipping = subtotal >= 100 ? 0 : 100;
        total = subtotal + shipping;
      });
      calculations.push(subtotal);

      if (shipping) {
        calculations.push(shipping);
      } else {
        calculations.push('FREE');
      }

      calculations.push(total);
    }
    return calculations;
  }
}
