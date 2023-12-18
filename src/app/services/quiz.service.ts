import { Injectable } from '@angular/core';
import { Quiz } from "../domain/quiz.model";
import { Kategoria } from "../domain/kategoria.enum";
import { Pytanie } from "../domain/pytanie.model";
import { HttpService } from "./http.service";

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
    new Quiz(
      3,
      'Najlepszy quiz o filmach ever',
      Kategoria.FILMY,
      new Date(2024, 11, 11, 11, 11),
      [
        new Pytanie(
          'Który film zdobył nagrodę Oscarową za Najlepszy Film w 2020 roku?',
          [
            'Joker',
            '1917',
            'Parasite',
            'La La Land'
          ],
          2
        ),
        new Pytanie(
          'Który z aktorów zagrał główną rolę w filmie "The Revenant," za którą zdobył Oscara w 2016 roku?',
          [
            'Leonardo DiCaprio',
            'Brad Pitt',
            'Joaquin Phoenix',
            'Eddie Redmayne'
          ],
          0
        ),
      ]
    ),
    new Quiz(
      4,
      'Najlepszy quiz o historii ever',
      Kategoria.HISTORIA,
      new Date(2024, 11, 11, 11, 11),
      [
        new Pytanie(
          'Który wydarzenie rozpoczęło się 28 lipca 1914 roku i było bezpośrednią przyczyną wybuchu I wojny światowej?',
          [
            'Atak na Pearl Harbor',
            'Zamach w Sarajewie',
            'Zdobycie Berlina',
            'Rewolucja Październikowa'
          ],
          1
        ),
        new Pytanie(
          'Kto był liderem ruchu oporu w czasie II wojny światowej, znany z kryptonimu "Bolek"?',
          [
            'Winston Churchill',
            'Charles de Gaulle',
            'Lech Wałęsa',
            'Jan Karski'
          ],
          0
        ),
      ]
    ),
  ]
  id: number = this.quizy.length+1;

  constructor(private httpService: HttpService) {
    this.httpService.getAllQuizzes().subscribe(quizy => {
      while (this.quizy.length > 0) {
        this.quizy.pop();
      }
      let zmapowaneQuizy = quizy.map(quiz => {
        let quizObject = new Quiz(quiz.id, quiz.nazwa, Kategoria[quiz.kategoria], new Date(quiz.dataWygasniecia), quiz.pytania);
        return quizObject;
      });
      this.quizy.push(...zmapowaneQuizy);
    });
  }

  findQuizById(id: number): Quiz {
      return this.quizy.find(quiz => quiz.id === id)
  }

  deleteQuizById(id: number) {
    let index = this.quizy.findIndex(quiz => quiz.id === id)

    if (index !== -1) {
      this.quizy.splice(index, 1)
    }
  }

  addQuiz(nazwa, kategoria, dataWygasniecia, pytania) {
    this.quizy.push(new Quiz(this.id++, nazwa, kategoria, dataWygasniecia, pytania));
  }
  editQuiz(id,nazwa, kategoria, dataWygasniecia, pytania) {
    this.quizy[id-1] = new Quiz(id,nazwa,kategoria,dataWygasniecia,pytania);
  }
}
