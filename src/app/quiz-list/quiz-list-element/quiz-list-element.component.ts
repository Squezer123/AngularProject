import { Component, Input } from '@angular/core';
import { Quiz } from "../../domain/quiz.model";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: 'app-quiz-list-element',
  templateUrl: './quiz-list-element.component.html',
  styleUrl: './quiz-list-element.component.scss'
})
export class QuizListElementComponent {
  @Input() public quiz: Quiz;

  constructor(private quizService: QuizService) {
  }

  deleteQuiz() {
    this.quizService.deleteQuizById(this.quiz.id)
  }
}
