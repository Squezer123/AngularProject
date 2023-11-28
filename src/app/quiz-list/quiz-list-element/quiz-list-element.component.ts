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
  printDate(): string {
    const el: string[] = ["dd","mm","yyyy"];
    let retDate = '';
    let tmp: number;
    el.forEach((element, index) => {
        if (index > 0) { retDate += '-'; }
        switch (element) {
          case 'dd': tmp = this.quiz.dataWygasniecia.getDate(); break;
          case 'mm': tmp = this.quiz.dataWygasniecia.getMonth() + 1; break;
          default: retDate += this.quiz.dataWygasniecia.getFullYear();
        }
        if (element !== 'yyyy') {
          tmp < 10 ? retDate += '0' + tmp : retDate += tmp;
        }
      }
    );

    return retDate;
  }
  editQuiz () {
    this.router.navigate([`quiz`,this.quiz.id,'edit']);
  }
}
