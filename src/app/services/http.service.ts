import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Quiz } from "../domain/quiz.model";
import { catchError, Observable, of } from "rxjs";

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
        catchError(err => {
          console.log("Error when loading quizzes: " + err);
          return of();
        })
      );
  }
}
