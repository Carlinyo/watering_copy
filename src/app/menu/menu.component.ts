import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
