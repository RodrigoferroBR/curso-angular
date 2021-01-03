import { Component } from '@angular/core';
import { Moment } from 'moment/moment'
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'frontend';
  ambiente: string;

  constructor() {
    this.ambiente = environment.ambiente;
  }

}
