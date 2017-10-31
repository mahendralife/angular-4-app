import { Component } from '@angular/core';
import { HttpServices } from '../services/httpServices';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ HttpServices ]
})
export class HomeComponent  {
 private users;
 private url = 'https://api.github.com/users';
  constructor(private http: HttpServices) {

   this.http.GET(this.url).subscribe(
     response => this.users = response,
     error => console.log(error),
     () => console.log('Finished!')
   );
   }

}
