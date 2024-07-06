import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  constructor() {}
  futureJSON =
    '{"goods": [' +
    '{"id":"1", "category":"simpathy", "name":"Beautiful Spirit Basket", "price":"105", "imgSrc":"/Images/simpathy/product1.PNG", "description":"Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket."},' +
    '{"id":"2", "category":"simpathy", "name":"The Spathiphyllum Plant", "price":"80", "imgSrc":"/Images/simpathy/product2.PNG", "description":"Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long-lasting and has an amazing effect on any room with its lush leaves and white flowers."},' +
    '{"id":"3", "category":"simpathy", "name":"Comfort Planter", "price":"66", "imgSrc":"/Images/simpathy/product3.PNG", "description":"The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6 peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect."},' +
    '{"id":"4", "category":"simpathy", "name":"Eternal Friendship Bouquet", "price":"100", "imgSrc":"/Images/simpathy/product4.PNG", "description":"An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8 vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends."} ]}';

  offer = JSON.parse(this.futureJSON);
}
