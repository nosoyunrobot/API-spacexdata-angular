import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data: any[] = [];

  constructor(
    private http: HttpClient
  ){}

  //disparador
  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets')
    .subscribe((data: any) => {
      this.data = data;
    })
  }
}
