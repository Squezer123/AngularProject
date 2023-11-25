import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from "@angular/router";
import { Quiz } from "../domain/quiz.model";
import { QuizService } from "../services/quiz.service";

@Component({
  selector: 'app-quiz-conductor',
  templateUrl: './quiz-conductor.component.html',
  styleUrl: './quiz-conductor.component.scss'
})
export class QuizConductorComponent {
  quiz: Quiz
  quizIndex = 0

  constructor(private route: ActivatedRouteSnapshot,
              private quizService: QuizService) {
    this.quiz = this.quizService.findQuizById(route.params['id'])
  }

}
