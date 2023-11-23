export class Pytanie {

  constructor(private tresc: String,
              private odpowiedzi: String[],
              // PoprawnaOdpowiedz indeksujemy od 0
              // Czyli może mieć wartość z przedziału od 0 do 3
              private poprawnaOdpowiedz: number) {
  }


}
