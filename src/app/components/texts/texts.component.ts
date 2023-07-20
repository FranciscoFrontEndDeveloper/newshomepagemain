import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.sass'],
})
export class TextsComponent {
  expression: boolean = true;
  @Input('titleText') titleText: string = '';
  @Input('paragraphText') paragraphText: string = '';
}
