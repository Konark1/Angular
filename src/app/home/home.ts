import { Component } from '@angular/core';
import { NameCardComponent } from './name-card.component';

@Component({
  selector: 'app-home',
  imports: [NameCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
