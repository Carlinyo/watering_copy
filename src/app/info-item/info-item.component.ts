import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [CustomButtonComponent, CommonModule],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.scss'
})
export class InfoItemComponent {
  @Input() title = ''
  @Input() desc = ''
  @Input() elements = [{ icon: '', title: '', desc: '' }]
  @Input() button: { text: string, icon: string, type: string } = { text: '', icon: '', type: '' }
}
