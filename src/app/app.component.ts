import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Clan } from './clan';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-UI';
  clans: any[] = [];

  constructor(private http: HttpClient) {}

  getClans() {
    this.http.get<Clan[]>('http://localhost:8080/getclans').subscribe(data => {
      console.log(data); // Add this line
      this.clans = data;
    });
  }
}
