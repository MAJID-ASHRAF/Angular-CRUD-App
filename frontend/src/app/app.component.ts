import { Component } from '@angular/core';


export interface User {
  firstName: string;
  lastName: string;
  contact: number;
  age: number;
  email: string;
  password:any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 title='form';

}
