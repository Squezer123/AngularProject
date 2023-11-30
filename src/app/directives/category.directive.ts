import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Kategoria } from "../domain/kategoria.enum";

@Directive({
  selector: '[appCategory]'
})
export class CategoryDirective implements OnInit {
  @Input() category: Kategoria;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    switch (this.category) {
      case Kategoria.FILMY:
        this.element.nativeElement.style.color = '#FF5733'
        this.element.nativeElement.style.fontFamily = 'Arial'
        break
      case Kategoria.HISTORIA:
        this.element.nativeElement.style.color = '#3498db'
        this.element.nativeElement.style.fontFamily = 'Georgia'
        break
      case Kategoria.KSIAZKI:
        this.element.nativeElement.style.color = '#2ecc71'
        this.element.nativeElement.style.fontFamily = 'Times New Roman'
        break
      case Kategoria.KULINARIA:
        this.element.nativeElement.style.color = '#e74c3c'
        this.element.nativeElement.style.fontFamily = 'Verdana'
        break
      case Kategoria.MODA:
        this.element.nativeElement.style.color = '#9b59b6'
        this.element.nativeElement.style.fontFamily = 'Courier New'
        break
      case Kategoria.MOTORYZACJA:
        this.element.nativeElement.style.color = '#f39c12'
        this.element.nativeElement.style.fontFamily = 'Palatino Linotype'
        break
      case Kategoria.SERIALE:
        this.element.nativeElement.style.color = '#1abc9c'
        this.element.nativeElement.style.fontFamily = 'Roboto'
        break
    }
  }

}
