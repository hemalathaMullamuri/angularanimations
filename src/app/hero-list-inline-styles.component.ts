import {
  Component,
  Input,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { Hero } from './hero.service';

@Component({
 selector: 'app-hero-list-inline-styles',
 template: `
   <ul>
     <li *ngFor="let hero of heroes"
         [@heroState]="hero.state"
         (click)="hero.toggleState()">
       {{hero.name}}
     </li>
   </ul>
 `,
 styleUrls: ['./hero-list.component.css'],

 animations: [
   trigger('heroState', [
     transition('inactive => active', [
       style({
         backgroundColor: '#cfd8dc',
         transform: 'scale(1.3)'
       }),
       animate('80ms ease-in', style({
         backgroundColor: '#eee',
         transform: 'scale(1)'
       }))
     ]),
   ])
 ]
})
export class HeroListInlineStylesComponent {
  @Input() heroes: Hero[];
}
