import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-desc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-desc.component.html',
  styleUrl: './info-desc.component.scss'
})
export class InfoDescComponent {
  @Output() changeActiveItem = new EventEmitter<number>();

  @Input() activeNavItem: number = 0
  @Input() activeElement: number = 0
  @Input() navControlPosition: string = 'left'
  @Input() icon: string = ''
  
  navElements: Array<string> = [
    'Analysis',
    'Optimization',
    'Monitoring'
  ]

  inc() {
    if (this.activeElement < this.navElements.length - 1) {
      this.changeActiveItem.emit(this.activeElement + 1)
    }
  }

  dec() {
    if (this.activeElement > 0) {
      this.changeActiveItem.emit(this.activeElement - 1)
    }
  }

}
