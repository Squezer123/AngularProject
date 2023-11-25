import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Kategoria } from "../domain/kategoria.enum";
import { QuizService } from "../services/quiz.service";
import {Router} from "@angular/router";
import {Pytanie} from "../domain/pytanie.model";

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent {
  form: FormGroup;
  kategorie: string[];

  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router) {
    this.kategorie = Object.values(Kategoria);

    this.form = this.fb.group({
      nazwa: new FormControl('', [Validators.required, Validators.minLength(3),
        Validators.maxLength(50)]),
      kategoria: new FormControl('', Validators.required),
      dataWygasniecia: new FormControl('', Validators.required),
      pytania: this.fb.array([], Validators.required)
    });
  }

  get pytania() {
    return this.form.get('pytania') as FormArray;
  }
  get nazwa() {
    return this.form.get('nazwa');
  }
  get kategoria() {
    return this.form.get('kategoria');
  }
  get dataWygasniecia() {
    return this.form.get('dataWygasniecia');
  }

  addPytanie() {
    const pytanieForm = this.fb.group({
      tresc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      odp1: ['', [Validators.required, Validators.maxLength(30)]],
      odp2: ['', [Validators.required, Validators.maxLength(30)]],
      odp3: ['', [Validators.required, Validators.maxLength(30)]],
      odp4: ['', [Validators.required, Validators.maxLength(30)]],
      nrPoprawnejOdp: ['', [Validators.required, Validators.min(1), Validators.max(4)]]
    });

    this.pytania.push(pytanieForm);
  }

  register() {
    if (this.form.valid) {
      console.log(this.form.value)
      const listaPytan: Pytanie[] = [];
      for(let element of this.form.value.pytania) {
        listaPytan.push(new Pytanie(element.tresc,[element.odp1,element.odp2,element.odp3,element.odp4],1))
      }

        this.quizService.addQuiz(this.form.value.nazwa,this.form.value.kategoria,this.form.value.dataWygasniecia,listaPytan);
        this.router.navigate([`/quiz-list`]);
    }
    else {
      console.log("Pusty validator");
    }
  }
}
