import { Component, Input } from '@angular/core';
import { InfoItemComponent } from '../info-item/info-item.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-info-items',
  standalone: true,
  imports: [InfoItemComponent, CommonModule],
  templateUrl: './info-items.component.html',
  styleUrl: './info-items.component.scss'
})
export class InfoItemsComponent {
  @Input() elements = [{ title: '', desc: '', elements: [{ icon: '', title: '', desc: '' }], button: { text: '', icon: '', type: ''}}]
  
}
