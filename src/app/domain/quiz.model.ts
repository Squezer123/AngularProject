import { Kategoria } from "./kategoria.enum";
import { Pytanie } from "./pytanie.model";

export class Quiz {

  constructor(private _id: number,
              private _nazwa: string,
              private _kategoria: Kategoria,
              private _dataWygasniecia: Date,
              private _pytania: Pytanie[]) {
  }

  get nazwa() {
    return this._nazwa;
  }

  get id() {
    return this._id;
  }

  get kategoria() {
    return this._kategoria;
  }

  get dataWygasniecia() {
    return this._dataWygasniecia;
  }

  get pytania() {
    return this._pytania;
  }


  set id(value: number) {
    this._id = value;
  }

  set nazwa(value: string) {
    this._nazwa = value;
  }

  set kategoria(value: Kategoria) {
    this._kategoria = value;
  }

  set dataWygasniecia(value: Date) {
    this._dataWygasniecia = value;
  }

  set pytania(value: Pytanie[]) {
    this._pytania = value;
  }
}
