import { Model } from "@core/interfaces/model.interface";
import { Creator } from "@core/models/creator.model";
import { Image } from "@core/interfaces/image.interface";

export class Comic implements Model {
  private _id!: number;
  private _title!: string;
  private _description!: string;
  private _isbn!: string;
  private _pageCount!: number;
  private _images!: Image[];
  private _creators!: Creator[];

  public get id(): number {
      return this._id;
  }
  public set id(value: number) {
      this._id = value;
  }
  public get title(): string {
      return this._title;
  }
  public set title(value: string) {
      this._title = value;
  }
  public get description(): string {
      return this._description;
  }
  public set description(value: string) {
      this._description = value;
  }
  public get isbn(): string {
      return this._isbn;
  }
  public set isbn(value: string) {
      this._isbn = value;
  }
  public get pageCount(): number {
      return this._pageCount;
  }
  public set pageCount(value: number) {
      this._pageCount = value;
  }
  public get images(): Image[] {
      return this._images;
  }
  public set images(value: Image[]) {
      this._images = value;
  }
  public get creators(): Creator[] {
      return this._creators;
  }
  public set creators(value: Creator[]) {
      this._creators = value;
  }

  constructor(input: any) {
      Object.assign(this, input);

      if (input.creators) {
          this.creators = input.creators.map((c: any) => new Creator(c));
      }
  }
  serialize() {
      return {
          id: this.id,
          title: this.title,
          description: this.description,
          isbn: this.isbn,
          pageCount: this.pageCount,
          images: this.images,
          creators: this.creators.map(c => c.serialize())
      }
  }
}
