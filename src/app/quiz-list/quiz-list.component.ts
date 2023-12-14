import { Component } from '@angular/core';
import { Quiz } from "../domain/quiz.model";
import { QuizService } from "../services/quiz.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
  quizy: Quiz[];
  nazwaDoFiltrowania: string = "";

  constructor(private quizService: QuizService, private router: Router) {
    this.quizy = this.quizService.quizy;
  }
  addQuiz () {
    this.router.navigate([`/quiz-form`]);
  }
}
