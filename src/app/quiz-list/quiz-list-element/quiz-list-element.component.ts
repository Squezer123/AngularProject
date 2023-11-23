import { Component, Input } from '@angular/core';
import { Quiz } from "../../domain/quiz.model";

@Component({
  selector: 'app-quiz-list-element',
  templateUrl: './quiz-list-element.component.html',
  styleUrl: './quiz-list-element.component.scss'
})
export class QuizListElementComponent {
  @Input() public quiz: Quiz;
}
