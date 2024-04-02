import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';

interface IInfoElement {
  icon: string;
  title: string;
  desc: string;
}

interface IButton {
  text: string;
  icon?: string;
  type: string;
}

export interface IAnalyticsInfoElement {
  title: string;
  desc: string;
  elements: IInfoElement[],
  button: IButton
}

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.scss'
})
export class AnalysisComponent {
  icon: string = 'assets/images/images of bluewater/Icon_analysis.svg'
  activeElement: number = 0
  
  elements: IAnalyticsInfoElement[] = [
    {
      title: 'Create hydraulic \n network models',
      desc: 'Like google docs but for hydraulic network models',
      elements: [
        { icon: 'assets/images/icons/multinetwork.png', title: 'Multi-user edition of network', desc: 'share your project with other users and save time by editing models as a team. If another user adds a node or a pipe you will see it appearing automatically on your screen.' },
        { icon: 'assets/images/icons/map.png', title: 'Geographic Map Layer', desc: 'draw the network layout of any city/town in the world by using an Open street Map layer in the background.' },
        { icon: 'assets/images/icons/import.png', title: 'Import EPANET.inp files', desc: 'Do you already have a model in EPANET .inp format? You can upload it to the platform and you can modify it before running water network simulations.' }
      ],
      button: {
        text: 'Start Today',
        icon: 'assets/images/icons/arrow.png',
        type: 'white-button'
      }
    },
    {
      title: 'Create hydraulic \n network models',
      desc: 'Like google docs but for hydraulic network models',
      elements: [
        { icon: 'assets/images/icons/multinetwork.png', title: 'Multi-user edition of network', desc: 'share your project with other users and save time by editing models as a team. If another user adds a node or a pipe you will see it appearing automatically on your screen.' },
        { icon: 'assets/images/icons/map.png', title: 'Geographic Map Layer', desc: 'draw the network layout of any city/town in the world by using an Open street Map layer in the background.' },
        { icon: 'assets/images/icons/import.png', title: 'Import EPANET.inp files', desc: 'Do you already have a model in EPANET .inp format? You can upload it to the platform and you can modify it before running water network simulations.' }
      ],
      button: {
        text: 'Start Today',
        icon: 'assets/images/icons/arrow.png',
        type: 'white-button'
      }
    },
    {
      title: 'Create hydraulic \n network models',
      desc: 'Like google docs but for hydraulic network models',
      elements: [
        { icon: 'assets/images/icons/multinetwork.png', title: 'Multi-user edition of network', desc: 'share your project with other users and save time by editing models as a team. If another user adds a node or a pipe you will see it appearing automatically on your screen.' },
        { icon: 'assets/images/icons/map.png', title: 'Geographic Map Layer', desc: 'draw the network layout of any city/town in the world by using an Open street Map layer in the background.' },
        { icon: 'assets/images/icons/import.png', title: 'Import EPANET.inp files', desc: 'Do you already have a model in EPANET .inp format? You can upload it to the platform and you can modify it before running water network simulations.' }
      ],
      button: {
        text: 'Start Today',
        icon: 'assets/images/icons/arrow.png',
        type: 'white-button'
      }
    }
  ]

  changeActiveItem(index: number) {
    this.activeElement = index
  }
}

