import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-lang-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-select.component.html',
  styleUrl: './lang-select.component.scss'
})
export class LangSelectComponent {
  open: boolean = false

  openSelect() {
    this.open = !this.open
  }

  get getArrowStyle() {
    return this.open ? 'active-arrow' : 'disabled-arrow'
  }
}
