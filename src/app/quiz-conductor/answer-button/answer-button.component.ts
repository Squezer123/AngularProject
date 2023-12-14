import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrl: './answer-button.component.scss'
})
export class AnswerButtonComponent {
  @Output() userChoseAnswer = new EventEmitter<number>();

  @Input() index: number;
  @Input() chosenAnswer: number;
  @Input() tresc: string;
  @Input() czyPoprawna: boolean;

  chooseAnswer() {
    this.userChoseAnswer.emit(this.index);
  }
}
