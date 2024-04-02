import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InfoDescComponent } from '../info-desc/info-desc.component';
import { InfoItemsComponent } from '../info-items/info-items.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [InfoDescComponent, InfoItemsComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Output() changeActiveItem = new EventEmitter<number>()

  @Input() activeElement = 0
  @Input() icon = ''
  @Input() infoElements: any = [{ title: '', desc: '', elements: [{ icon: '', title: '', desc: '' }], button: { text: '', icon: '', type: '' }}]
  @Input() descPosition = 'row'
  @Input() navControlPosition: string = 'left'

  changeActiveIndex(index: number) {
    const elementsContainer: HTMLDivElement | null = document.querySelector('.info-elements')
    elementsContainer!.style.transform = `translateX(-${index * 195}%)`
    this.changeActiveItem.emit(index)
  }
}
