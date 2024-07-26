export class Offer {
  public id: number;
  public category: string;
  public name: string;
  public price: number;
  public imgSrc: string;
  public description: string;
  constructor(
    id: number,
    category: string,
    name: string,
    price: number,
    imgSrc: string,
    description: string
  ) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.price = price;
    this.imgSrc = imgSrc;
    this.description = description;
  }
}
