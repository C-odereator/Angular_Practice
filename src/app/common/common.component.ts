import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent {
  @Input() common:any;
}
