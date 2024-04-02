import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AnalysisComponent } from '../analysis/analysis.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomeComponent, AnalysisComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
