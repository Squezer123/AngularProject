import { Injectable } from '@angular/core';
import { Quiz } from "../domain/quiz.model";
import { Kategoria } from "../domain/kategoria.enum";
import { Pytanie } from "../domain/pytanie.model";

@Injectable({ providedIn: 'root' })
export class QuizService {
  quizy: Quiz[] = [
    new Quiz(
      1,
      'Najlepszy quiz o serialach ever',
      Kategoria.SERIALE,
      new Date(2024, 0, 15, 17, 0),
      [
        new Pytanie(
          'Który z poniższych seriali został stworzony przez Vince\'a Gilligana?',
          [
            'Stranger Things',
            'Breaking Bad',
            'Game of Thrones',
            'The Crown'
          ],
          1
        ),
        new Pytanie(
          'W którym serialu główny bohater nosił pseudonim "Heisenberg"?',
          [
            'Dexter',
            'The Sopranos',
            'Breaking Bad',
            'The Wire'
          ],
          2
        ),
        new Pytanie(
          'Kto jest twórcą serialu Black Mirror?',
          [
            'J.J. Abrams',
            'Charlie Brooker',
            'Ryan Murphy',
            'Shonda Rhimes'
          ],
          1
        ),
      ]
    ),
    new Quiz(
      2,
      'Najlepszy quiz o modzie ever',
      Kategoria.MODA,
      new Date(2023, 11, 1, 11, 30),
      [
        new Pytanie(
          'Która z tych marek słynie z czerwonej podeszwy swoich butów?',
          [
            'Nike',
            'Adidas',
            'Louboutin',
            'Puma'
          ],
          2
        ),
        new Pytanie(
          'Która ikona mody jest znana jako "Czarownica z Zachodu" i jest redaktorką naczelną Vogue?',
          [
            'Anna Wintour',
            'Coco Chanel',
            'Karl Lagerfeld',
            'Giorgio Armani'
          ],
          0
        ),
        new Pytanie(
          'Która z poniższych marek jest znana z produkcji luksusowych zegarków?',
          [
            'Casio',
            'Rolex',
            'Timex',
            'Swatch'
          ],
          1
        ),
      ]
    ),
  ]

}
