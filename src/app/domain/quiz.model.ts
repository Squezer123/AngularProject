import { Kategoria } from "./kategoria.enum";
import { Pytanie } from "./pytanie.model";

export class Quiz {

  constructor(private id: number,
              private nazwa: String,
              private kategoria: Kategoria,
              private dataWygasniecia: Date,
              private pytania: Pytanie[]) {
  }

}
