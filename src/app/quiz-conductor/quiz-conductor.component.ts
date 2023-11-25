import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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

  constructor(route: ActivatedRoute,
              private quizService: QuizService) {
    const id = +route.snapshot.params['id']
    this.quiz = this.quizService.findQuizById(id)
    this.aktualnePytanie = this.quiz.pytania[this.pytanieIndex]
  }

}
