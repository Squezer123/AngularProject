export class Pytanie {

  constructor(private _tresc: String,
              private _odpowiedzi: String[],
              // PoprawnaOdpowiedz indeksujemy od 0
              // Czyli może mieć wartość z przedziału od 0 do 3
              private _poprawnaOdpowiedz: number) {
  }

  get tresc() {
    return this._tresc;
  }

  get odpowiedzi() {
    return this._odpowiedzi;
  }

  get poprawnaOdpowiedz() {
    return this._poprawnaOdpowiedz;
  }
}
