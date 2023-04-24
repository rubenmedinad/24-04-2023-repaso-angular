import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clasehija-recibe',
  templateUrl: './clasehija-recibe.component.html',
  styleUrls: ['./clasehija-recibe.component.css']
})
export class ClasehijaRecibeComponent {
  @Input() nombre: any;
}
