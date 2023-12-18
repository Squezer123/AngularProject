import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Quiz } from "../domain/quiz.model";
import { map, Observable } from "rxjs";
import { Kategoria } from "../domain/kategoria.enum";
import { Pytanie } from "../domain/pytanie.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http
      .get<Quiz[]>(this.url + "/quizzes")
      .pipe(
        map(body => {
          return body.map(obj => this.mapToQuiz(obj));
        })
      );
  }

  editQuiz(quizId: number, body: Quiz): Observable<Quiz> {
    return this.http.put(this.url + "/quizzes/" + quizId, body).pipe(
      map(body => {
        return this.mapToQuiz(body);
      })
    );
  }

  addQuiz(body: Quiz): Observable<Quiz> {
    return this.http.post(this.url + '/quizzes', body).pipe(
      map(body => {
        return this.mapToQuiz(body);
      })
    );
  }

  deleteQuiz(id: number): Observable<Quiz> {
    return this.http.delete(this.url + '/quizzes/' + id).pipe(
      map(body => {
        return this.mapToQuiz(body);
      })
    );
  }

  private mapToQuiz(body): Quiz {
    let kategoria: Kategoria = null;
    switch (body._kategoria) {
      case "SERIALE":
      case "Seriale":
        kategoria = Kategoria.SERIALE;
        break;
      case 'FILMY':
      case 'Filmy':
        kategoria = Kategoria.FILMY;
        break;
      case 'KSIAZKI':
      case 'Książki':
        kategoria = Kategoria.KSIAZKI;
        break;
      case 'HISTORIA':
      case 'Historia':
        kategoria = Kategoria.HISTORIA;
        break;
      case 'MODA':
      case 'Moda':
        kategoria = Kategoria.MODA;
        break;
      case 'KULINARIA':
      case 'Kulinaria':
        kategoria = Kategoria.KULINARIA;
        break;
      case 'MOTORYZACJA':
      case 'Motoryzacja':
        kategoria = Kategoria.MOTORYZACJA;
        break;
    }

    const pytania = body._pytania.map(pytanie => {
      return new Pytanie(pytanie._tresc, pytanie._odpowiedzi, pytanie._poprawnaOdpowiedz);
    });

    return new Quiz(body._id, body._nazwa, kategoria, new Date(body._dataWygasniecia), pytania);
  }
}
