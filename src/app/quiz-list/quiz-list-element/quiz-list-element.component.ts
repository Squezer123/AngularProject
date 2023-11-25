import { Component, Input } from '@angular/core';
import { Quiz } from "../../domain/quiz.model";
import { QuizService } from "../../services/quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz-list-element',
  templateUrl: './quiz-list-element.component.html',
  styleUrl: './quiz-list-element.component.scss'
})
export class QuizListElementComponent {
  @Input() public quiz: Quiz;

  constructor(private quizService: QuizService,
              private router: Router) {
  }

  deleteQuiz() {
    this.quizService.deleteQuizById(this.quiz.id)
  }

  startQuiz() {
    this.router.navigate(['quiz', this.quiz.id, 'conduct'])
  }
}
