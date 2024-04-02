import { Component } from '@angular/core';
import { KatiliMasComponent } from '../katili-mas/katili-mas.component';
import { InfoComponent } from '../info/info.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [KatiliMasComponent, InfoComponent, CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
