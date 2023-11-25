import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Quiz } from "../domain/quiz.model";
import { QuizService } from "../services/quiz.service";
import { Pytanie } from "../domain/pytanie.model";

@Component({
  selector: 'app-quiz-conductor',
  templateUrl: './quiz-conductor.component.html',
  styleUrl: './quiz-conductor.component.scss'
})
export class QuizConductorComponent {
  quiz: Quiz
  pytanieIndex = 0
  aktualnePytanie: Pytanie
  poprawneOdpowiedzi = 0

  constructor(route: ActivatedRoute,
              private quizService: QuizService,
              private router: Router) {
    const id = +route.snapshot.params['id']
    this.quiz = this.quizService.findQuizById(id)
    this.aktualnePytanie = this.quiz.pytania[this.pytanieIndex]
  }

  chooseAnswer(index: number) {
    if(index == this.aktualnePytanie.poprawnaOdpowiedz) {
      this.poprawneOdpowiedzi++
    }

    this.pytanieIndex++
    this.aktualnePytanie = this.quiz.pytania[this.pytanieIndex]
  }

  navigateBack() {
    this.router.navigate(['quiz'])
  }
}
