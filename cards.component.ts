import { Component } from '@angular/core';
import { Card } from '../Interface/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  cardList: Card[] = [
    {
      title: 'Range Rover',
      description: 'lorem the hs jfjsbvskl blkfs hbfs',
      img: '',
    },

    {
      title: 'Honda Civic',
      description: 'lorem the hs jfjsbvskl blkfs hbfs',
      img: '',
    },

    {
      title: 'Range Rover',
      description: 'lorem the hs jfjsbvskl blkfs hbfs',
      img: '',
    },
    {
      title: 'Range Rover',
      description: 'lorem the hs jfjsbvskl blkfs hbfs',
      img: '',
    },
  ];
}
